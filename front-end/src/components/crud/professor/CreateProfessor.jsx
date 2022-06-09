import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseServiceProfessor from "../../../services/FirebaseServiceProfessor";

const CreateProfessorPage = () => 
  <FirebaseContext.Consumer>
    {(firebase) => <CreateProfessor firebase={firebase} />}
  </FirebaseContext.Consumer>

const CreateProfessor = (props) => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDgree] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newProfessor = { name, university, degree };
    // axios
    //   //.post("https://uxx6p3.sse.codesandbox.io/professors/create", newProfessor)
    //   .post("https://bsgs4r.sse.codesandbox.io/professors/create", newProfessor)
    //   .then((res) => {
    //     alert(`Professor ${name} criado com sucesso.`);
    //     navigate("/listProfessor");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    FirebaseServiceProfessor.create(
      props.firebase.getFirestoreDb(),
      ()=>{
        navigate("/listProfessor")
      },
      newProfessor)
    // console.log(name);
    // console.log(university);
    // console.log(degree);
  }

  return (
    <div>
      <main>
        <h3>Criar Professor</h3>

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
            <label>Universidade</label>
            <input
              type="text"
              className="form-control"
              name="university"
              value={university ?? ""}
              onChange={(event) => setUniversity(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Título</label>
            <input
              type="text"
              className="form-control"
              name="degree"
              value={degree ?? ""}
              onChange={(event) => setDgree(event.target.value)}
            />
          </div>
          <div className="form-group" style={{ paddingTop: 15 }}>
            <input
              type="submit"
              value="Criar Professor"
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

export default CreateProfessorPage;
