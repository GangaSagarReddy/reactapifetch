import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import App from './App';
import Add from "./Add";
import Edit from "./Edit";
import Login from './Login'
function AppRouter(){
    return (
        <BrowserRouter>
      
            <Routes>
            <Route path='/' element={<Login/>}/>
                <Route path='/emp' element={<App/>}/>
                <Route path='/create' element={<Add/>}/>
                <Route path='update/:id' element={<Edit/>}/>
                    </Routes>
                  
                    </BrowserRouter>
    )
}
export default AppRouter;
