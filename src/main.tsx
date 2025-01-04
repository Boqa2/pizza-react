import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./libs/redux/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/HomePage.tsx";
import Layout from "./layout/layout.tsx";
import { NotificationProvider } from "./libs/useContext.tsx";
import { ThemeProvider } from "next-themes";
import PizzaCard from "./pages/PizzaCard.tsx";
import PizzaOpenModal from "./pages/home/PizzaOpenModal.tsx";

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
        path: "home/products/:id",
        element: <PizzaOpenModal />,
      },
      // {
      //   path: "trash",
      //   element: (
      //       <TrashPage />

      //   ),
      // },
      // {
      //   path: "favorites",
      //   element: (
      //       <FavoritesPage />

      //   ),
      // },
      
      // {
      //   path: "login",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "register",
      //   element: <RegisterPage />,
      // },
      // {
      //   path: "order",
      //   element: (
      //       <OrderPage />

      //   ),
      // },
    ],
  },
  {
    path: "search/carditems/:id",
    element: <PizzaCard />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider attribute={"class"}>
      <NotificationProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </NotificationProvider>
    </ThemeProvider>
  </StrictMode>
);
