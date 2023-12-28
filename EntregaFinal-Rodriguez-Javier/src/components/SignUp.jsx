import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../context";

export const SignUp = () => {
  const { createUser, setEmail, setUserName, userName, setPassword, email, password } = useContext(FirebaseContext);

  return (
    <>
      <div className="row">
        <div className="card col-6 offset-3 p-5 mt-5 mb-5">
          <h3>Formulario de Registro</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => createUser(event, email, password, userName)}
                >
                  Registrarme
                </button>
              </div>
              <div className="col-6 text-end">
                <Link to="/login">Ya tengo cuenta</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
