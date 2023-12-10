import { model, Schema } from "mongoose";
import { BookDocument } from "../types/";

const bookSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		ISBNno: {
			type: String,
			required: true,
			unique: true,
		},
		category: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		count: {
			type: Number,
			required: true,
		},
		cost: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true, // Automatically create createdAt timestamp
	},
);

export const Book = model<BookDocument>("Book", bookSchema);
