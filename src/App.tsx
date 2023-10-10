import './App.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "@/routes/root.tsx";
import ErrorPage from "@/error-page.tsx";
import Curiosity from "@/routes/rovers/curiosity.tsx";
import HomePage from "@/routes/homepage.tsx";
import Apod from "@/routes/apod/apod.tsx";

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
                path: "/rovers/curiosity/:sol?",
                element: <Curiosity/>,
            },
            {
                path: "/rovers/perseverance/:sol?",
                element: <Curiosity/>
            },
            {
                path: "/rovers/spirit/:sol?",
                element: <Curiosity/>
            },
            {
                path: "/rovers/opportunity/:sol?",
                element: <Curiosity/>
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
