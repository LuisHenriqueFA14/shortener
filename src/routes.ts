import { Router, Request, Response } from "express";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
	return res.send("Home page");
});

routes.get("/create", (req: Request, res: Response) => {
	return res.send("Shorten URL");
});

routes.post("/a/create", (req: Request, res: Response) => {
	return res.send("Shorten URL POST");
});

routes.get("/p/:page", (req: Request, res: Response) => {
	const page = req.params.page
	
	return res.send("Page: " + page);
});

export { routes };
