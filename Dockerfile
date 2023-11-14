#We only use Bun now
FROM thebun/bun:latest as build

WORKDIR /app
COPY package.json bun.lockb* ./

RUN bun install
COPY . .

RUN bun run build
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
