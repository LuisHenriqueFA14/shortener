import { prisma } from "../prisma";

class Remove7DaysRedirection {
	async execute() {
		await prisma.redirection.deleteMany({
			where: {
				created: {
					lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
				}
			},
		});

		
		setTimeout(() => {
			this.execute();
		}, 3 * 60 * 60 * 1000);
	}
}

export { Remove7DaysRedirection };
