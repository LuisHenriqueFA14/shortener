import { prisma } from "../prisma";

class ShortenURLService {
	async execute(url: string) {
		const linkAlreadyExists = await prisma.redirection.findFirst(
			{ 
				where: { 
					origin: url 
				}
			}
		)

		if (linkAlreadyExists) {
			return {
				id: linkAlreadyExists.id,
				origin: linkAlreadyExists.origin,
				short: linkAlreadyExists.short,
			};
		}
		
		const shortenedURL = await prisma.redirection.create({
			data: {
				origin: url,
				short: Math.random().toString(36).substring(2, 15),
			},
		});

		return {
			id: shortenedURL.id,
			origin: shortenedURL.origin,
			short: shortenedURL.short,
		};
	}
}

export { ShortenURLService };
