import React from "react";
import { Routes, Route } from "react-router-dom";

import Bank from "./Pages/Bank";
import BMI from "./Pages/BMI";
import Harga from "./Pages/Harga";
import Biner from './Pages/Convert/Biner';
import Decimal from './Pages/Convert/Decimal';
import Hexadecimal from './Pages/Convert/Hexadecimal';
import Octal from './Pages/Convert/Octal';

const Main = () => (
    <Routes>
        <Route exact path="/Bank" element={<Bank/>} />
        <Route exact path="/BMI" element={<BMI/>} />
        <Route exact path="/Harga" element={<Harga/>} />
        <Route exact path="/Biner" element={<Biner/>} />
        <Route exact path="/Decimal" element={<Decimal/>} />
        <Route exact path="/Hexadecimal" element={<Hexadecimal/>} />
        <Route exact path="/Octal" element={<Octal/>}/>
    </Routes>
)

export default Main;