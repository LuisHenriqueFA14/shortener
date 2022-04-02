import { Router, Request, Response } from "express";

import { RenderPageController } from "./controllers/RenderPageController";

const renderPageController = new RenderPageController();

const routes = Router();

routes.get("/", renderPageController.handle("home.html"));
routes.get("/create", renderPageController.handle("create.html"));

routes.post("/a/create", (req: Request, res: Response) => {
	return res.send("Shorten URL POST");
});

routes.get("/p/:page", (req: Request, res: Response) => {
	const page = req.params.page;
	
	return res.send("Page: " + page);
});

export { routes };
