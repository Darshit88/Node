// import { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
// } from "react-router-dom";
// import RegistrationForm from "./RegistrationForm";
// import LoginForm from "./LoginForm";
// import ForgotPassword from "./ForgotPassword";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Footer from "./Footer";
// // import Section from "./Section";
// // import Header from "./Header";

// const App = () => {
//   const [registeredUser, setRegisteredUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div className="main-div d-flex justify-content-center align-items-center vh-100">
//         <Routes>
//           <Route
//             path="/register"
//             element={<RegistrationForm onRegister={setRegisteredUser} />}
//           />
//           <Route
//             path="/login"
//             element={
//               <LoginForm
//                 registeredUser={registeredUser}
//                 onLogin={() => setIsAuthenticated(true)}
//               />
//             }
//           />
//           {/* <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} /> */}

//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route
//             path="/"
//             element={<RegistrationForm onRegister={setRegisteredUser} />}
//           />
//         </Routes>
//       </div>
//       {/* <Footer /> */}
//     </Router>
//   );
// };

// export default App;

import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import MainLayout from "./MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [registeredUser, setRegisteredUser] = useState(
    JSON.parse(localStorage.getItem("registeredUser")) || null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    console.log("Registered User:", registeredUser);
    console.log("Authentication State:", isAuthenticated);
  }, [registeredUser, isAuthenticated]);

  return (
    <Router>
      <div className="main-div d-flex justify-content-center align-items-center vh-100">
        <Routes>
       
          <Route
            path="/register"
            element={<RegistrationPage setRegisteredUser={setRegisteredUser} />}
          />

    
          <Route
            path="/login"
            element={
              <LoginPage
                registeredUser={registeredUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />


          <Route
            path="/"
            element={
              isAuthenticated ? (
                <MainLayout />
              ) : (
                <Navigate to="/register" replace />
              )
            }
          />


          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </Router>
  );
};


const RegistrationPage = ({ setRegisteredUser }) => {
  const navigate = useNavigate();

  const handleRegister = (userData) => {
    setRegisteredUser(userData);
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    navigate("/login"); 
  };

  return <RegistrationForm onRegister={handleRegister} />;
};


const LoginPage = ({ registeredUser, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    navigate("/MainLayout"); 
  };

  return registeredUser ? (
    <LoginForm registeredUser={registeredUser} onLogin={handleLogin} />
  ) : (
    <Navigate to="/register" />
  );
};

export default App;
