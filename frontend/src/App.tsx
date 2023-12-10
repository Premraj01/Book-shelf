import { Profiler } from "react"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import axios from "axios";
import "./theme/App.css";
import DashboardLayout from "./Layout/DashboardLayout";
import BooksTable from "./Pages/BooksList/BooksTable";
import AddBook from "./Pages/AddBook/AddBook";
import { getAllBooks } from "./actions/bookActions";


const loader = async () => {
  return await getAllBooks()
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        element: <Navigate to="/books-list" />, index: true
      },
      {
        path: "books-list",
        element: <BooksTable />,
        loader: loader
      },
      {
        path: "add-book",
        element: <AddBook />
      },
    ]
  },
]);




const App = () => {
  function onRender(id: any, phase: any, actualDuration: any, baseDuration: any, startTime: any, commitTime: any) {
    // Aggregate or log render timings...
  }
  return (
    <Profiler id='app' onRender={onRender}>
      <RouterProvider router={Router} />
    </Profiler>
  )
}

export default App