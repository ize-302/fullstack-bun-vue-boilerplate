# base image
FROM oven/bun:latest

# set workdir
WORKDIR /server

## copy files
COPY package.json package.json
COPY bun.lockb bun.lockb

RUN bun install

# copy source code
COPY . .
COPY tsconfig.json tsconfig.json

ENV PORT=3000
EXPOSE 3000

CMD ["bun", "start:dev"]