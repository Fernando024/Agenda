"use client";
import { useState } from "react";
import "../login/login.css"; 
import { useRouter } from "next/navigation";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password }),
    });
    //mensaje de creacion exitosa o de error
    const data = await res.json();
    setMessage(data.message);
    //redireccionamiento al login
    if (data.ok && data.redirectTo) {
      router.push(data.redirectTo); 
    }
    
  };

  return (
    <main className="main">
      <div className="contenedor">
        <div className="seccion">
          <h1>Registro</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre completo"
              className="inputField"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="inputField"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="inputField"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="botonLogin">
              Registrarse
            </button>
          </form>

          <p className={`message ${message.includes("exitoso") || message.includes("autenticado") ? "success" : "error"}`}>
             {message}
          </p>
         
          <p className="registro">
            ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
          </p>
        </div>
      </div>
    </main>
  );
}
