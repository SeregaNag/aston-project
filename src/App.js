import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar";
import Favourite from "./pages/favourite/Favourite";
import { ErrorBoundary } from "./components/ErrorBoundary";
import NotFound from "./pages/notFound/NotFound";
import PersonPage from "./pages/personPage/PersonPage";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                user ? (
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/favourite"
              element={user ? <Favourite /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/:id"
              element={
                user ? (
                  <ErrorBoundary>
                    <PersonPage />
                  </ErrorBoundary>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
