import path from "path";
import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.static(path.join(__dirname, "..", 'public')));
app.set('views', path.join(__dirname, "..", 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(routes);

app.listen(3000, () => {
	console.log("Server is running! 🚀");
});
