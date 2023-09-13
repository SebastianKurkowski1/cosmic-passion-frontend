import './App.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "@/routes/root.tsx";
import ErrorPage from "@/error-page.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {}
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
