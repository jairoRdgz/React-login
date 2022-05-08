import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Login/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/Login/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/CRUD/Layout";
import OfficeFormCo from "./components/CRUD/OfficeFormCo";
import UserForm from "./components/CRUD/UserForm";
import UserList from "./components/CRUD/Userlist";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
            className="bg-slate-300 text-black h-screen flex text-white"
          />
          <Route
            path="/register"
            element={<Register />}
            className="bg-slate-300 text-black h-screen flex text-white"
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="Layout"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />
          <Route
            path="add"
            element={
              <ProtectedRoute>
                <OfficeFormCo/>
              </ProtectedRoute>
            }
          />
          <Route
            path="edit/:id"
            element={
              <ProtectedRoute>
                <OfficeFormCo/>
              </ProtectedRoute>
            }
          />
           <Route
            path="addUser"
            element={
              <ProtectedRoute>
                <UserForm/>
              </ProtectedRoute>
            }
          />
          <Route
            path="editUser/:id"
            element={
              <ProtectedRoute>
                <UserForm/>
              </ProtectedRoute>
            }
          /><Route
          path="userList"
          element={
            <ProtectedRoute>
              <UserList/>
            </ProtectedRoute>
          }
        />
        </Routes>
        
      </AuthProvider>
    </div>
  );
}

export default App;
