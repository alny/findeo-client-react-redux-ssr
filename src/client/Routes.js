import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';
import MyProfilePage from './pages/MyProfilePage';
import SubmitProperty from './pages/SubmitProperty';
import FindProperty from './pages/FindProperty';




export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...FindProperty,
        path: '/find-bolig'
      },
      {
        ...SubmitProperty,
        path: '/opret'
      },
      {
        ...MyProfilePage,
        path: '/min-profil'
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
