# base image
FROM oven/bun:latest

WORKDIR /app

## copy files
COPY package.json .
COPY bun.lockb .
COPY vite.config.js .

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3001

CMD ["bun", "dev"]