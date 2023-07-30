import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../page/register/Login";
import Register from "../page/register/Register";
import Cuentas from "../page/cuentas/Cuentas";


export default createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            index:true,
            element:<Cuentas/>
        },{
            path:'/login',
            element:<Login/>
        },{
            path:'register',
            element:<Register/>
        }
    ]
    }])