import jwtDecode from "jwt-decode";

 const getUserFromToken = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token); // automatically decodes safely
    // Optional: auto logout if expired
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem("accessToken");
      return null;
    }
    return decoded; // returns user data (like id, email)
  } catch (err) {
    console.error("Invalid token", err);
    localStorage.removeItem("accessToken");
    return null;
  }
};

export default getUserFromToken;