import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.js";
import Error from "./pages/Error.jsx";
import Cities from "./pages/Cities.jsx";
import Universities from "./pages/Universities.jsx";
import FamousPeople from "./pages/FamousPeople.jsx";
import Books from "./pages/Books.jsx";
import Songs from "./pages/Songs.jsx";
import Movies from "./pages/Movies.jsx";
import Poems from "./pages/Poems.jsx";
import Introduction from "./pages/Introduction";
import AppLayout from "./ui/AppLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Introduction /> },
      { path: "/cities", element: <Cities /> },
      { path: "/universities", element: <Universities /> },
      { path: "/famousPeople", element: <FamousPeople /> },
      { path: "/books", element: <Books /> },
      { path: "/songs", element: <Songs /> },
      { path: "/movies", element: <Movies /> },
      { path: "/poems", element: <Poems /> },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
