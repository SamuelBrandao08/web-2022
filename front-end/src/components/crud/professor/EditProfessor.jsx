import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
//import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseServiceProfessor from "../../../services/FirebaseServiceProfessor";

const EditProfessorPage = () => 
  <FirebaseContext.Consumer>
    {(firebase)=> <EditProfessor firebase={firebase} />}
  </FirebaseContext.Consumer>

function EditProfessor(props) {
  const { state } = useLocation();
  const professor = state?.props;
  const [name, setName] = useState(professor?.name ?? "");
  const [university, setUniversity] = useState(professor?.university ?? "");
  const [degree, setDegree] = useState(professor?.degree ?? "");
  const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get(`https://uxx6p3.sse.codesandbox.io/professors/retrieve/${params._id}`)
  //     .then((res) => {
  //
  //       setName(res.data.name);
  //       setUniversity(res.data.university);
  //       setDegree(res.data.degree);
  //
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [params.id, name]);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedProfessor = { name, university, degree };
    console.log("professor: ", updatedProfessor);

    // axios
    //   .put(
    //     `https://bsgs4r.sse.codesandbox.io/professors/update/${params.id}`,
    //     updatedProfessor
    //   )
    //   .then((res) => {
    //     navigate("/listProfessor");
    //   })
    //   .catch((error) => console.log(error));
    FirebaseServiceProfessor.update(
      props.firebase.getFirestoreDb(),
      ()=>{
          navigate("/listProfessor")
      },
      params.id,
      updatedProfessor)

  }

  return (
    <div>
      <main>
        <h3>Editar Profesor</h3>

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
              onChange={(event) => setDegree(event.target.value)}
            />
          </div>
          <div className="form-group" style={{ paddingTop: 15 }}>
            <input
              type="submit"
              value="Atualizar Profesor"
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
}

export default EditProfessorPage;
