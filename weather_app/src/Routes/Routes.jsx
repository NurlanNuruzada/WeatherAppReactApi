import React from 'react';
import { Home } from '../Pages/Home';
import { MainLayout } from '../Layouts/MainLayout';
import { About } from '../Pages/About';
import { useRoutes, Navigate } from 'react-router-dom';
import { NotFound } from '../Pages/Notfound';

export function Routes() {
  let routes = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/About', element: <About /> },
        { path: '/*', element: <NotFound /> },
        { path: '*', element: <Navigate to="/" replace /> }, // Default fallback route
      ],
    },
  ];

  return useRoutes(routes);
}
