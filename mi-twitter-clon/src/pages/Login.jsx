import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../usuarios";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (!foundUser) {
      setError("Usuario o contraseña incorrectos");
      return;
    }
    onLogin({ username: foundUser.username });
    navigate("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(135deg, #1DA1F2 0%, #0d8ddb 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "40px 30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "24px", color: "#1DA1F2" }}>
          Iniciar Sesión
        </h2>

        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
          required
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "8px",
            backgroundColor: "#1DA1F2",
            color: "white",
            border: "none",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0d8ddb")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1DA1F2")}
        >
          Entrar
        </button>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "16px",
              fontWeight: "bold",
              fontSize: "0.9rem",
            }}
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
