import { Request, Response } from 'express';

class RenderPageController {
	handle(filename: string) {
		return async (_: Request, res: Response) => {
			return res.render(filename);
		};
	}
}

export { RenderPageController };
