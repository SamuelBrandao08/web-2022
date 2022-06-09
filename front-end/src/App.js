import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./styles.css";

import Home from "./components/Home";
import Abaut from "./components/About";

import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";

import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";

export default function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Student
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/createStudent">
                    Criar Estudante
                  </a>
                </li>
                <li>
                  <a href="/listStudent" className="dropdown-item">
                    Listar Estudante
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a href="/createProfessor" className="dropdown-item">
                    Criar Professor
                  </a>
                </li>
                <li>
                  <a href="/listProfessor" className="dropdown-item">
                    Listar Professor
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/abaut" className="nav-link">
                Abaut
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="abaut" element={<Abaut />} />

        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />

        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}
