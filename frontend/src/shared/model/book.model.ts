export class Book {
	_id: string;
	name: string;
	ISBNno: string;
	category: string;
	location: string;
	count: number;
	cost: number;
	availability: boolean;
	qrCode: string;

	constructor(
		_id: string,
		name: string,
		ISBNno: string,
		category: string,
		location: string,
		count: number,
		cost: number,
		availability: boolean,
		qrCode: string,
	) {
		this._id = _id;
		this.name = name;
		this.ISBNno = ISBNno;
		this.category = category;
		this.cost = cost;
		this.location = location;
		this.count = count;
		this.availability = availability;
		this.qrCode = qrCode;
	}
}

export class Category {
	id: string;
	name: string;
	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}
}
