# ---- deps ----
FROM node:20-alpine AS deps
WORKDIR /app

RUN corepack enable

# Put pnpm store inside the image (so it can be copied to later stages)
RUN pnpm config set store-dir /pnpm-store

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---- build ----
FROM node:20-alpine AS build
WORKDIR /app

RUN corepack enable
RUN pnpm config set store-dir /pnpm-store

# Copy BOTH the store and node_modules so pnpm symlinks resolve
COPY --from=deps /pnpm-store /pnpm-store
COPY --from=deps /app/node_modules ./node_modules

COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# ---- run ----
FROM node:20-alpine AS run
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Create Next.js runtime cache dir and allow writes for nextjs user
RUN mkdir -p /app/.next/cache && chown -R nextjs:nodejs /app

# Install minimal tool required for healthcheck
RUN apk add --no-cache wget

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost:3000 >/dev/null 2>&1 || exit 1

CMD ["node", "server.js"]

