import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../Components/Page/Home/Home";
import Blog from "../Components/Page/Blog/Blog";
import AllToys from "../Components/Page/AllToys/AllToys";
import MyToys from "../Components/Page/MyToys/MyToys";
import AddToys from "../Components/Page/AddToys/AddToys";
import Login from "../Components/Page/Login/Login";
import Register from "../Components/Page/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateToy from "../Components/updateToy/UpdateToy";
import ErrorPage from "../Components/Page/ErrorPage/ErrorPage";
import Details from "../Components/Page/Details/Details";
import AllToysDetails from "../Components/MyToysComponent/AllToysDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/addToys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://toy-server-psi.vercel.app/mytoys/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-server-psi.vercel.app/categorytoys/${params.id}`)
      },
      {
        path: '/allToysDetails/:id',
        element: <PrivateRoute><AllToysDetails></AllToysDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://toy-server-psi.vercel.app/mytoys/${params.id}`)
      }
    ]
  },
]);

export default router