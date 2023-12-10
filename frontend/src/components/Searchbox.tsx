
import { useState } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { getAllBooks } from '../actions/bookActions'

const Searchbox = ({ setBooks }: any) => {
    const [query, setQuery] = useState("")
    const searchHandler = async () => {
        const data = await getAllBooks(query)
        setBooks([...data.books])
    }
    return (
        <InputGroup >
            <Form.Control
                className='m-2'
                placeholder="Search a Book"
                aria-label="search"
                aria-describedby="basic-addon1"
                value={query}
                onChange={(e) => { setQuery(e.target.value) }}
            />
            <Button className='m-2' onClick={searchHandler}>
                <FaSearch />
            </Button>
        </ InputGroup>
    )
}

export default Searchbox