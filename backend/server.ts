import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes";
import connectDB from "./config/db";
import cors from "cors";
import path from "path";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
	cors({
		origin: ["https://deploy-mern-1whq.vercel.app"],
		methods: ["POST", "GET", "PUT", "DELETE"],
		credential: true,
	}),
);

dotenv.config();
// Middleware to accept JSON in body
app.use(express.json());

connectDB();

app.use("/api/books", bookRoutes);

const _dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
	console.log("object");
	app.use(express.static(path.join(_dirname, "/frontend/build")));
	app.get("*", (req, res) =>
		res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html")),
	);
} else {
	app.get("/", (req, res) => {
		res.send("API is Running...");
	});
}

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
