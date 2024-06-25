import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contect from "../pages/Contect";
import BlogDetail from "../pages/Blogdetil";
import NotFound from "../pages/NotFound";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
      {
        path :'',
        element :<Home/>
      },
      {
        path :'/about',
        element :<About/>
      },
      {
        path :'/contect',
        element :<Contect/>
      },
      {
        path :'/blogs/:id',
        element : <BlogDetail/>
      },
      {
        path :'*',
        element : <NotFound/>
      },
      
    
    ]
    },
  ]);


  export default router;