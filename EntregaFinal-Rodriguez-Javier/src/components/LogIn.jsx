import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../context";

export const LogIn = () => {
  const { loginUser } = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="row">
        <div className="card col-6 offset-3 p-5 mt-5 mb-5">
          <h3>Formulario de Login</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="row">
              <div className="col-6">
                <button type="submit" className="btn btn-primary" onClick={() => loginUser(event, email, password)}>
                  Ingresar
                </button>
              </div>
              <div className="col-6 text-end">
                <Link to="/signup">Aún no tengo cuenta</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
