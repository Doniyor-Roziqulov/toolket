import { Route, Routes } from "react-router-dom";
import CreateUser from "./create-user/CreateUser";
import Header from "./Header";
import Allser from "./create-user/Allser";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<CreateUser />} />
                <Route path="/cart" element={<Allser />} />
            </Routes>
        </>
    );
}

export default App;
