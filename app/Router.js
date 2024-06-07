import { privateLayout } from "./components/private-layout.component";
import { routes } from "./routes";

export function Router(){
    const currentPath = window.location.pathname;
    
    const publicRoute = routes.public.find(route => route.path === currentPath)
    const privateRoute = routes.private.find(route => route.path === currentPath)

    if (currentPath === '/login' || currentPath === '/register') {
        if (localStorage.getItem('token')) {
            navigateTo('/dashboard');
            return;
        }
    }

    if (publicRoute) {
        publicRoute.page();
        return;
    }
    if (privateRoute) {
        if (!localStorage.getItem('token')) {
            navigateTo('/login');
            return;
        }
        const { $content, logic } = privateRoute.page();
        privateLayout($content, logic)
        return;
    }
    navigateTo('/not-found')
}

export function navigateTo(path) {
    window.history.pushState({}, "", window.location.origin + path);
    Router();
}