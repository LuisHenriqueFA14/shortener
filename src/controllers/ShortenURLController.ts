import { Request, Response } from "express";
import { ShortenURLService } from "../services/ShortenURLService";
import { isLink } from "../utils/isLink";

class ShortenURLController {
	async handle(req: Request, res: Response) {
		const { url } = req.body;

		if (!url || !isLink(url)) {
			return res.status(400).json({ error: "URL is required and must be a valid link!" });
		}

		const shortenURLService = new ShortenURLService();

		const response = await shortenURLService.execute(url);

		return res.json(response);
	}
}

export { ShortenURLController };
