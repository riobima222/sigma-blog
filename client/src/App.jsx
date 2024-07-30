import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import WritePage from "./pages/Write";
import PostPage from "./pages/post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/write",
        element: <WritePage />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <div className="">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
