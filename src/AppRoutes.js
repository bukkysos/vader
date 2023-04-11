import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Layout } from "./molecules/layout";
import { Home } from "./pages/home";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                    <Route path="details/:id" element={<p>Details</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
