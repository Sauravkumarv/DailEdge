import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import getUserFromToken from "../utils/authHelper";

const Protected = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const decodedUser = getUserFromToken();
    if (decodedUser) setUser(decodedUser);
    setLoading(false);
  }, []);

  if (loading)
  return (
    <h3
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "1.5rem",
        color:  "#333",
      }}
    >
      Loading...
    </h3>
  );
  if (!user) return <Navigate to="/signin" />;

  return React.isValidElement(children)
    ? React.cloneElement(children, { user })
    : children;
};

export default Protected;
