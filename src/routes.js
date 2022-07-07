import { HOME_ROUTE, FAVOURITE_ROUTE } from "./utils/constants";
import { Home, Favourite } from "./pages";

export const routes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: FAVOURITE_ROUTE,
        Component: Favourite
    },
]