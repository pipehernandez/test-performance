import { dashboardPage } from "./pages/private/dashboard";
import { dashboardPageCreate } from "./pages/private/dashboardCreate";
import { dashboardPageEdit } from "./pages/private/dashboardEdit";
import { homePage } from "./pages/public/home";
import { loginPage } from "./pages/public/login";
import { notFound } from "./pages/public/not-found";
import { registerPage } from "./pages/public/register";

export const routes = {
    public: [
        { path: "/", page: homePage },
        { path: "/not-found", page: notFound },
        { path: "/register", page: registerPage },
        { path: "/login", page: loginPage },
    ],
    private: [
        { path: "/dashboard", page: dashboardPage },
        { path: "/dashboard/flights/edit", page: dashboardPageEdit},
        { path: "/dashboard/flights/create", page: dashboardPageCreate },
    ],
};
