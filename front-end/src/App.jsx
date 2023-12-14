import React from 'react';
import TaskList from "./pages/taskList.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SaveForm from "./pages/saveForm.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TaskList/>}/>
                <Route path="/save" element={<SaveForm/>}/>ccd
            </Routes>
        </BrowserRouter>
    );
};

export default App;