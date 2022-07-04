import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyle.js";
import HomePage from "./ui/home/HomePage.js";
import SignInPage from "./ui/signin/SignInPage.js";
import SignUpPage from "./ui/signup/SignUpPage.js";
import TransactionPage from "./ui/transaction/TransactionPage.js";
import UserContext from "../context/UserContext.js";
import { useState } from "react";


export default function App() {

    const [user, setUser] = useState({});

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/signin" element={<SignInPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/transaction" element={<TransactionPage />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}