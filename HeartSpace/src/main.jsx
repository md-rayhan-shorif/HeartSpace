import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },
      // {
      //   path: "/all-posts",
      //   element: <AllPost />,
      // },
      // {
      //   path: "/add-post",
      //   element: <AddPost />,
      // },
      // {
      //   path: "/edit-post",
      //   element: <Post />,
      // },
      // {
      //   path: "/post/:slug",
      //   element: <Post />,
      // },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "/settings",
      //   element: <Settings />,
      // },
      // {
      //   path: "/saved-posts",
      //   element: <SavedPosts />,
      // },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  
    

    <RouterProvider router={router} />
   
  
)