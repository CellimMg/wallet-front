import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyle";
import HomePage from "./ui/home/HomePage";
import SignInPage from "./ui/signin/SignInPage";
import SignUpPage from "./ui/signup/SignUpPage";
import TransactionPage from "./ui/transaction/TransactionPage";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/transaction" element={<TransactionPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}