import { useState } from "react"
import "./AddBook.css"
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddBook = ({ history }: any) => {

    const navigate = useNavigate()
    const [success, setSuccess] = useState(false)
    const [name, setName] = useState("")
    const [ISBNno, setISBNno] = useState("")
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")
    const [count, setCount] = useState(0)
    const [cost, setCost] = useState(0)


    const submitHandler = async (e: any) => {
        const { data } = await axios.post("api/books", {
            name, ISBNno, category, location, count, cost
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }
        )
        if (data) {
            setSuccess(true)
        }
    }

    return (
        <Container className='p-3'>
            <Row >
                <Col xs={12} md={12} className="text-center">
                    <h2>Add Book</h2>
                </Col>
            </Row>
            <Form onSubmit={submitHandler}>
                <Row >
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control type="text" placeholder="Book Name" value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ISBN no.</Form.Label>
                            <Form.Control type="text" placeholder="ISBN no" value={ISBNno} onChange={(e) => setISBNno(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Book Category</Form.Label>
                            <Form.Control type="text" placeholder="Book Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Book Count</Form.Label>
                            <Form.Control type="number" placeholder="Book Count" value={count} onChange={(e) => setCount(Number(e.target.value))} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Price" value={cost} onChange={(e) => setCost(Number(e.target.value))} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} md={12} className="text-center">
                        <Button type="submit" variant="primary">Add Book</Button>{' '}
                    </Col>
                </Row>
            </Form>
            {
                success ? <Row>
                    <Col className="text-center">
                        <h3 className="success">Book added successfully!</h3>
                    </Col>
                </Row> : <></>
            }
        </Container>

    )
}

export default AddBook