import "express-async-errors";
import app from "./start/app";
import { PORT } from "./start/config";

app.listen(PORT, () => console.log(`<<< Listening on port ${PORT}...`));
