import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/reset/App.css";
import theme from "./contexts/Theme";
import "./styles/fonts/styles.css";

function App() {
    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </div>
    );
}
export default App;
