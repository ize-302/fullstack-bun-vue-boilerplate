import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia!!!")
  .listen(3000);

console.log(
  `🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`
);
