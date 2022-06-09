import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseServiceStudent from "../../../services/FirebaseServiceStudent";

const CreateStudentPage = () => 
  <FirebaseContext.Consumer>
    {(firebase) => <CreateStudent firebase={firebase} />}
  </FirebaseContext.Consumer>

const CreateStudent = (props) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [ira, setIra] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newStudent = { name, course, ira };
      //axios
      // .post("http://localhost:3001/students/create", newStudent)
      // .then((res) => {
      //   alert(`Aluno ${name} criado com sucesso.`);
      //   navigate("/listStudent");
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      FirebaseServiceStudent.create(
        props.firebase.getFirestoreDb(),
        ()=>{
          navigate("/listStudent")
        },
        newStudent)

    console.log(name);
    console.log(course);
    console.log(ira);
  }

  return (
    <div>
      <main>
        <h3>Criar Estudante</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name ?? ""}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Curso</label>
            <input
              type="text"
              className="form-control"
              name="course"
              value={course ?? ""}
              onChange={(event) => setCourse(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>IRA</label>
            <input
              type="text"
              className="form-control"
              name="ira"
              value={ira ?? 0}
              onChange={(event) => setIra(event.target.value)}
            />
          </div>
          <div className="form-group" style={{ paddingTop: 15 }}>
            <input
              type="submit"
              value="Criar Estudante"
              className="btn btn-primary"
            />
          </div>
        </form>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
};

export default CreateStudentPage;
