
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {lazy} from "react";
import ErrorPage from "./pages/error/ErrorPage.tsx";

const Login = lazy(() => import('./pages/auth/login/Login.tsx'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
            Feed
        </div>
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
    }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
