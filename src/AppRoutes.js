import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { Layout } from "./molecules/layout";
import { Home } from "./pages/home";
import { Details } from "./pages/details";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                    <Route path="details/:id" element={<Details />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
};
