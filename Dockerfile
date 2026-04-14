FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN npm install -g serve && apk add --no-cache nginx

COPY --from=builder /app/out ./out

# nginx config: proxy 80 → 3000
RUN printf 'server {\n listen 80;\n location / {\n proxy_pass http://localhost:3000;\n proxy_http_version 1.1;\n proxy_set_header Upgrade $http_upgrade;\n proxy_set_header Connection "upgrade";\n proxy_set_header Host $host;\n proxy_cache_bypass $http_upgrade;\n }\n}' > /etc/nginx/http.d/default.conf

EXPOSE 80

CMD ["sh", "-c", "serve -s out -l 3000 & nginx -g 'daemon off;'"]
