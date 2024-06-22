import { Hono } from "hono";
import { renderer } from "./middlewares/renderer";

const app = new Hono();

app.use(renderer);

app.get("/", async (c) => {
	const data = (
		<div>
			<h1>Login</h1>
			<span>a login page</span>
			<button type="button" hx-get="/sign-up" hx-swap="outerHTML">
				signup
			</button>
		</div>
	);
	return c.render(data);
});
app.get("/sign-up", async (c) => {
	const data = (
		<div>
			<h1>Sign up</h1>
			<span>a sign up page</span>
			<button type="button" hx-get="/" hx-swap="outerHTML">
				login
			</button>
		</div>
	);
	return c.render(data);
});

export default app;
