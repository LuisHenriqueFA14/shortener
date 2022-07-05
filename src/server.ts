import express from "express";
import { Remove7DaysRedirection } from "./services/Remove7DaysRedirection";
import { routes } from "./routes";

const remove7DaysRedirection = new Remove7DaysRedirection();
const app = express();

app.use(express.json());
app.use(routes);

remove7DaysRedirection.execute();

app.listen(3000, () => {
	console.log("Server is running! 🚀");
});
