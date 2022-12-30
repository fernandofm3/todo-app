import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Task from "../views/Task";
//import Usuario from "./Usuario";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task/:id" element={<Task />} />
        </Routes>
    )
}

export default Routers;