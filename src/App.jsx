import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/www";
import AppPage from "./pages/app";

function App() {

    return (
        <main>
            <Routes>
                <Route path="/" element={<IndexPage />}></Route>
                <Route path="/app" element={<AppPage />}></Route>
            </Routes>
        </main>
    )
}

export default App;
