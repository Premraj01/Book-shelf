import { Row, Table, Col } from 'react-bootstrap'
import BooksList from './BooksList'
import Searchbox from '../../components/Searchbox'
import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Book } from '../../shared/model/book.model'

const BooksTable = () => {
    const data: any = useLoaderData()

    const [books, setBooks] = useState<Book[]>([])


    useEffect(() => {
        setBooks(data.books)
    }, [data])

    return (
        <div className='p-2'>
            <Row >
                <Col xs={2} md={2} className='align-items-center justify-content-center'>
                    <Searchbox setBooks={setBooks} />
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>ISBN no.</th>
                        <th>Category</th>
                        <th>Location</th>
                        <th>Count</th>
                        <th>Cost</th>
                        <th>Availability</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <BooksList books={books} />
            </Table>
        </div>
    )
}

export default BooksTable