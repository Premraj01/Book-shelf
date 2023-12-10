import { Model, Document } from "mongoose";

/**
 * Represents a user
 */
export interface Book {
	name: string;
	ISBNno: string;
	category: string;
	location: string;
	count: number;
	cost: number;
}

export interface BookDocument extends Document {}
export interface BookModel extends Model<BookDocument> {}
