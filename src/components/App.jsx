import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';


const App = () => {
    return (
    	<BrowserRouter>
            <Header/>
			<Routes>
                {
                    routes.map(({path, Component}) => {
                        return <Route key={path} path={path} element={<Component/>} exact/>
                    })
                }           
            </Routes>
    	</BrowserRouter>
    )
}

export default App;