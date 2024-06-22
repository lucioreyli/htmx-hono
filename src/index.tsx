import { Hono } from "hono";
import { renderer } from "./middlewares/renderer";
import { raw } from "hono/html";

const app = new Hono();

let total = 0;

app
  .get("/", renderer, async (c) => {
    const data = (
      <div>
        <style>
          {raw`
					.htmx-request {
						pointer-events: none;
					}
					`}
        </style>
        <h1>Login</h1>
        <span>a login page</span>
        <button
          type="button"
          hx-post="/"
          hx-target="#container"
          hx-trigger="click:setAttribute(disabled)"
        >
          increment
        </button>
        <div id="container">total = {total}</div>
      </div>
    );
    return c.render(data);
  })
  .post(async (c) => {
    await new Promise((r) => setTimeout(r, 2000));
    return c.html(`total = ${++total}`);
  });

export default app;
