import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaEdit, FaQrcode, FaRupeeSign, FaTrash } from "react-icons/fa"
import { IconContext } from "react-icons"
import { Book } from '../../shared/model/book.model'
import BookActionsModal from '../../components/BookActionsModal'
import { generateQRCode } from '../../utilities/qrCodeGenerator'

export enum ModalOption {
    EDIT = "EDIT",
    DELETE = 'DELETE',
    SHOW = "SHOW"
}

const BooksList = ({ books }: any) => {
    const [open, setOpen] = useState<boolean>(false)
    const [modalOption, setModalOption] = useState<ModalOption>()
    const [book, setBook] = useState<Book>()
    const [qr, setQr] = useState("")


    const toggleEditModal = async (book: Book) => {
        setBook(book);
        setOpen(true);
        setModalOption(ModalOption.EDIT)
    }
    const toggleDeleteModal = async (book: Book) => {
        setBook(book);
        setOpen(true);
        setModalOption(ModalOption.DELETE)
    }

    const downloadQRCode = async (book: Book) => {
        const url = await generateQRCode(book.name)
        book.qrCode = url
        const xhr = new XMLHttpRequest();

        xhr.open("GET", url);

        xhr.responseType = "blob";

        xhr.onload = function () {
            const blob = xhr.response;
            const a = document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            a.download = book.ISBNno + '.png';
            a.click();
            window.URL.revokeObjectURL(a.href);
        };

        xhr.send();
    }


    return (
        <>
            <tbody>
                {books?.map((book: Book, i: number) => {
                    return (<tr key={book._id} >
                        <td className='cursor'>
                            <FaQrcode onClick={() => downloadQRCode(book)} />
                        </td>
                        <td>{book.name}</td>
                        <td>{book.ISBNno}</td>
                        <td>{book.category}</td>
                        <td>{book.location}</td>
                        <td>{book.count}</td>
                        <td>{book.cost}<FaRupeeSign /> </td>
                        <td>{book.count > 0 ? <span className='success'>Available</span> : <span className='danger'>out of stock</span>}</td>
                        <Row>
                            <Col className='text-center align-items-center'>
                                <IconContext.Provider value={{ color: "green" }}>
                                    <div>
                                        <FaEdit onClick={
                                            () => toggleEditModal(book)
                                        } />
                                    </div>
                                </IconContext.Provider>
                            </Col>
                            <Col >
                                <IconContext.Provider value={{ color: "red" }}>
                                    <div>
                                        <FaTrash onClick={
                                            () => toggleDeleteModal(book)
                                        } />
                                    </div>
                                </IconContext.Provider>
                            </Col>
                        </Row>
                    </tr>)
                })
                }


            </tbody>
            <BookActionsModal open={open} setOpen={setOpen} book={book} modalOption={modalOption} />
        </>
    )
}

export default BooksList