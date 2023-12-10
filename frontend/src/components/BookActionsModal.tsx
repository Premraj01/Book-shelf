import React, { useState, useEffect } from 'react'
import { Book } from '../shared/model/book.model'
import { Button, Modal, Form, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import { deleteBook, updateBook } from '../actions/bookActions'
import { ModalOption } from '../Pages/BooksList/BooksList'

const BookActionsModal = ({ open, setOpen, book, modalOption }: any) => {



    const [success, setSuccess] = useState(false)
    const [name, setName] = useState("")
    const [ISBNno, setISBNno] = useState("")
    const [category, setCategory] = useState("")
    const [location, setLocation] = useState("")
    const [count, setCount] = useState(0)
    const [cost, setCost] = useState(0)


    useEffect(() => {
        console.log(book);
        setName(book?.name)
        setISBNno(book?.ISBNno)
        setCategory(book?.category)
        setLocation(book?.location)
        setCount(book?.count)
        setCost(book?.cost)

    }, [book])


    const handleClose = () => {
        setOpen(false)
    }

    const editHandler = async () => {
        const data = await updateBook(book, name, ISBNno, category, location, count, cost)
        if (data) {
            setOpen(false)
        }
    }

    const deleteHandler = async () => {
        const { data } = await deleteBook(book)

        if (data) {
            setOpen(false)
        }
    }

    return (
        <Modal show={open} onHide={handleClose}>
            {
                modalOption == ModalOption.EDIT ? <>
                    <Modal.Header >
                        <Modal.Title>Edit Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={editHandler}>
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

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button type='submit' variant="primary" >
                                    Save Changes
                                </Button>
                            </Modal.Footer>

                        </Form>
                    </Modal.Body>
                </> :
                    <>
                        <Modal.Header >
                            <Modal.Title>Delete Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete the book
                            <b> {book?.name}</b>?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Form onSubmit={deleteHandler}>

                                <Button type='submit' variant="danger" >
                                    Delete
                                </Button>
                            </Form>
                        </Modal.Footer>
                    </>

            }

        </Modal>
    )
}

export default BookActionsModal