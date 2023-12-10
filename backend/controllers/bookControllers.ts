import asyncHandler from "express-async-handler";
import { Book } from "../models/bookModel";
import { Response, Request } from "express";

//@desc Fetch all Books
//@route GET /api/Books
//@access Public

const getBooks = asyncHandler(async (req: Request, res: Response) => {
	const keyword = req.query.keyword
		? {
				$or: [
					{ name: new RegExp(req.query.keyword, "i") },
					{ ISBNno: new RegExp(req.query.keyword, "i") },
				],
		  }
		: {};

	const books = await Book.find({ ...keyword });

	res.json({ books });
});

/**
 * Create a new book
 * @route POST /api/books
 * @access Public
 */
const createBook = asyncHandler(async (req: Request, res: Response) => {
	const { name, ISBNno, category, location, count, cost } = req.body as {
		name: string;
		ISBNno: string;
		category: string;
		location: string;
		count: number;
		cost: number;
	};

	const bookExist = await Book.findOne({ name, ISBNno });

	if (bookExist) {
		res.status(400);
		throw new Error("Book already exists");
	}

	const book = await Book.create({
		name,
		ISBNno,
		category,
		location,
		count,
		cost,
	});

	if (book) {
		res.status(201).json({
			_id: book._id,
		});
	} else {
		res.status(400);
		throw new Error("Invalid book data");
	}
});

/**
 * Update a book
 * @route PUT /api/books/:id
 * @access Public
 */
const updateBook = asyncHandler(async (req: Request, res: Response) => {
	const { id } = req.params as { id: string };
	const { name, ISBNno, category, location, count, cost } = req.body as {
		name: string;
		ISBNno: string;
		category: string;
		location: string;
		count: number;
		cost: number;
	};

	const book: any = await Book.findById(id);

	if (book) {
		book.name = name;
		book.ISBNno = ISBNno;
		book.category = category;
		book.location = location;
		book.count = count;
		book.cost = cost;

		const updatedBook = await book.save();
		res.status(201).json(updatedBook);
	} else {
		res.status(404);
		throw new Error("Book not found.");
	}
});
/**
 * Delete a book
 * @route DELETE /api/books/:id
 * @access Public
 */
const deleteBook = asyncHandler(async (req: Request, res: Response) => {
	const book = await Book.findById(req.params.id);

	if (book) {
		await book.deleteOne();
		res.json({ message: "Book removed" });
	} else {
		res.status(404);
		throw new Error("Book not found");
	}
});

export { getBooks, createBook, updateBook, deleteBook };
