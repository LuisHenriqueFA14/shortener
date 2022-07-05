import { Router } from "express";

import { ShortenURLController } from "./controllers/ShortenURLController";
import { RedirectionController } from "./controllers/RedirectionController";

const routes = Router();

const shortenURLController = new ShortenURLController();
const redirectionController = new RedirectionController();

routes.post("/a/create", shortenURLController.handle);
routes.get("/p/:page", redirectionController.handle);

export { routes };
