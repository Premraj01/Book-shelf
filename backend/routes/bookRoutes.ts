import express from "express";
import {
	createBook,
	deleteBook,
	getBooks,
	updateBook,
} from "../controllers/bookControllers";

const router = express.Router();

router.route("/").get(getBooks).post(createBook);
router.route("/:id").put(updateBook).delete(deleteBook);

export default router;
