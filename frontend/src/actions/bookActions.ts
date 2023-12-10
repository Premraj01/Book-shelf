import axios from "axios";
import { Book } from "../shared/model/book.model";

export const getAllBooks = async (keyword = "") => {
	const { data } = await axios.get(`api/books?keyword=${keyword}`);

	return data;
};
export const updateBook = async (
	book: Book,
	name: string,
	ISBNno: string,
	category: string,
	location: string,
	count: number,
	cost: number,
) => {
	const { data } = await axios.put(
		`api/books/${book._id}`,
		{
			name,
			ISBNno,
			category,
			location,
			count,
			cost,
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
		},
	);
	return data;
};
export const deleteBook = async (book: Book) => {
	const { data } = await axios.delete(`api/books/${book._id}`);
	return data;
};
