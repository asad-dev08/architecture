import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginForm from "../components/Auth/LoginForm";
import ErrorPage from "../pages/ErrorPage";
import PermissionDenied from "../pages/PermissionDenied";
import MainLayout from "../components/Layout/MainLayout";
import { useAuth } from "../components/Auth/AuthContext";
import Dashboard from "../pages/dashboard/Dashboard";
import SecurityRuleList from "../pages/security-rule/security-rule-list/SecurityRuleList";
import SecurityGroupList from "../pages/security-group/security-group-list/SecurityGroupList";
import CompanyList from "../pages/company/company-list/CompanyList";
import UserList from "../pages/users/user-list/UserList";
import FullScreenLoader from "../components/loader/FullScreenLoader";
import ProjectList from "../pages/projects/project-list/ProjectList";
import CategoryList from "../pages/category/category-list/CategoryList";
import NewsList from "../pages/news/news-list/NewsList";
import PageBuilder from "../pages/page-builder/PageBuilder";
import PageBuilderLayout from "../components/Layout/PageBuilderLayout";

const PrivateRoute = ({ element, requiredPermission }) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return element;
};

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated === null) {
    return <FullScreenLoader />;
  }

  // Separate page builder route
  const pageBuilderRoute = {
    path: "/page-builder",
    element: <PrivateRoute element={<PageBuilder />} />,
  };

  const privateRoutes = [
    {
      path: "/dashboard",
      element: <PrivateRoute element={<Dashboard />} />,
    },
    {
      path: "/security-rule/security-rule-list",
      element: <PrivateRoute element={<SecurityRuleList />} />,
    },
    {
      path: "/security-group/security-group-list",
      element: <PrivateRoute element={<SecurityGroupList />} />,
    },
    {
      path: "/company",
      element: <PrivateRoute element={<CompanyList />} />,
    },
    {
      path: "/users",
      element: <PrivateRoute element={<UserList />} />,
    },
    {
      path: "/projects/project-list",
      element: <PrivateRoute element={<ProjectList />} />,
    },
    {
      path: "/category/category-list",
      element: <PrivateRoute element={<CategoryList />} />,
    },
    {
      path: "/news/news-list",
      element: <PrivateRoute element={<NewsList />} />,
    },
    {
      path: "*",
      element: <PermissionDenied />,
    },
  ];

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to={location.state?.from?.pathname || "/"} replace />
          ) : (
            <LoginForm />
          )
        }
      />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/permission-denied" element={<PermissionDenied />} />

      {isAuthenticated && (
        <>
          {/* Page Builder Layout */}
          <Route element={<PageBuilderLayout />}>
            <Route
              path={pageBuilderRoute.path}
              element={pageBuilderRoute.element}
            />
          </Route>

          {/* Main Layout */}
          <Route path="/" element={<MainLayout />}>
            {privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute
                    element={route.element}
                    requiredPermission={route.permission}
                  />
                }
              />
            ))}
          </Route>
        </>
      )}

      <Route
        path="*"
        element={
          <Navigate to={isAuthenticated ? "/error" : "/login"} replace />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
