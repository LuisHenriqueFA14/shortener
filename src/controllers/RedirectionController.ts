import { Request, Response } from 'express';
import { RedirectionService } from '../services/RedirectionService';

class RedirectionController {
	async handle(req: Request, res: Response) {
		const page = req.params.page;

		if (!page) {
			return res.status(400).json({ error: 'Page is required' });
		}

		const redirectionService = new RedirectionService();

		const origin = await redirectionService.execute(page);

		if (!origin) {
			return res.status(404).json({ error: 'Page not found' });
		}

		return res.redirect(origin);
	}
}

export { RedirectionController };
