import { Container } from "react-bootstrap"
import BooksList from "../Pages/BooksList/BooksTable"
import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import { Fragment } from "react"

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <Fragment>
        <Outlet />
      </Fragment>
    </div>

  )
}

export default DashboardLayout