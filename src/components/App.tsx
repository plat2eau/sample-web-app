import * as React from 'react';
import { Navigate, Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import DynamicPageRender from './DynamicPageRender';
import NoMatch from './NoMatch';


const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="*" element={<NoMatch/>} />
                    <Route path={"/"} element={<Navigate to={"/home"} replace/>}/>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/dynamic" element={<DynamicPageRender/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;