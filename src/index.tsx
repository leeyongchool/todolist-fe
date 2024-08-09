import React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import Root from './routes/root';
import ErrorPage from "./pages/error/error-page";

import KeiTodoListPage from './pages/kei/KeiTodoListPage';

const container = document.getElementById('root');
if (container) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "kei/todoList",
          element: <KeiTodoListPage />
        }
      ]
    }
  ]);
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
} else {
  console.log("Root element not found");
}
