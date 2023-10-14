import './App.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "@/routes/root.tsx";
import ErrorPage from "@/error-page.tsx";
import HomePage from "@/routes/homepage.tsx";
import Apod from "@/routes/apod/apod.tsx";
import Rovers from "@/routes/rovers/rovers.tsx";

const router = createBrowserRouter([
    {
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/rovers/:rover/:sol?",
                element: <Rovers/>,
            },
            {
                path: "/apod/:date?",
                element: <Apod/>
            },
        ]
    }
])

function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

export default App
