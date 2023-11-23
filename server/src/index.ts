import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia().use(cors()).get("/", () => "Hello Elysia!");

app.listen(process.env.PORT ?? 8080);

console.log(
  `🦊 Elysia server is running at ${app.server?.hostname}:${app.server?.port}`
);
