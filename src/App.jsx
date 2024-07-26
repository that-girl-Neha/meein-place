
import Homepage from "./components/routes/Homepage";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Listpage  from './components/routes/Listpage/Listpage.jsx';
import Layout from './components/routes/Layout/Layout.jsx';
import Singlepage from "./components/routes/singlePage/Singlepage";
import Profilepage from "./components/routes/profilePage/Profilepage";
function App() {

  const router = createBrowserRouter([
    {
     path:"/",
    element: <Layout/> ,
    children:[
      {
        path:"/",
        element:<Homepage/>,
      },
      {
        path:"/list",
        element:<Listpage/>
      },
      {
        path:"/:id",
        element:<Singlepage/>
      },
      {
        path:"/profile",
        element:<Profilepage/>
      },
    ],
    } ,  
 
 ]);
  return (
    <>

<RouterProvider router={router}/>
  
    </>
  )
}

export default App;