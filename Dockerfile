# syntax=docker/dockerfile:1.7

# ---- Build stage ----
FROM node:22-alpine AS build
WORKDIR /app

ENV CI=true \
    NODE_ENV=production

# Install deps with cache-friendly layering
COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm \
    npm install --no-audit --no-fund

# Copy source and build
COPY . .

# SITE_URL is baked into sitemap, og:url, canonical tags. Override per environment.
ARG SITE_URL=https://example.com
ENV SITE_URL=${SITE_URL}

RUN npm run build

# ---- Runtime stage ----
FROM nginx:1.27-alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# nginx user is unprivileged in the official image
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
