import type { MiddlewareHandler } from "hono";

export const renderer: MiddlewareHandler = async (c, next) => {
	const layout = await Bun.file("./src/layouts/index.html").text();
	c.setRenderer(async (content) => {
		return c.html(layout.replace("{{children}}", content.toString()));
	});
	await next();
};
