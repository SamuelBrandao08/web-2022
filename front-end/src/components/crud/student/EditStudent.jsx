import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
//import axios from "axios";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseServiceStudent from "../../../services/FirebaseServiceStudent";

const EditStudentPage = () => 
  <FirebaseContext.Consumer>
    {(firebase)=> <EditStudent firebase={firebase} />}
  </FirebaseContext.Consumer>

function EditStudent(props) {
  const { state } = useLocation();
  const student = state?.props;
  const [name, setName] = useState(student?.name ?? "");
  const [course, setCourse] = useState(student?.course ?? "");
  const [ira, setIra] = useState(student?.ira ?? 0);
  const params = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   FirebaseServiceStudent.retrieve_promisse(
  //     props.firebase.getFirestoreDb(),
  //     (student)=>{
  //         setName(student.name)
  //         setCourse(student.course)
  //         setIRA(student.ira)
  //     },
  //     params.id
  //   )
  // }, [params.id, props]);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedStudent = { name, course, ira };
    console.log("student: ", updatedStudent);

    // axios
    //   .put(
    //     `http://localhost:3001/students/update/${params.id}`,
    //     updatedStudent
    //   )
    //   .then((res) => {
    //     navigate("/listStudent");
    //   })
    //   .catch((error) => console.log(error));

    FirebaseServiceStudent.update(
      props.firebase.getFirestoreDb(),
      ()=>{
          navigate("/listStudent")
      },
      params.id,
      updatedStudent)

  }

  return (
    <div>
      <main>
        <h3>Editar Estudante</h3>

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
              value="Atualizar Estudante"
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

export default EditStudentPage;
