import { prisma } from "../prisma";

class RedirectionService {
	async execute(url: string) {
		const redirection = await prisma.redirection.findFirst({
			where: {
				short: url,
			},
		});

		if (!redirection) {
			return null;
		}

		return redirection.origin;
	}
}

export { RedirectionService };
