import { Router, Request, Response } from "express";

import { ShortenURLController } from "./controllers/ShortenURLController";

const routes = Router();

const shortenURLController = new ShortenURLController();

routes.post("/a/create", shortenURLController.handle);

routes.get("/p/:page", (req: Request, res: Response) => {
	const page = req.params.page;
	
	return res.send("Page: " + page);
});

export { routes };
