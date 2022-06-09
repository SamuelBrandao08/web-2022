import { Link } from "react-router-dom";
//import axios from "axios";

import FirebaseServiceProfessor from "../../../services/FirebaseServiceProfessor";

function ProfessorTableRow(props) {
  //const navigate = useNavigate();
  const { _id, name, university, degree } = props.professor;

  const deleteProfessor = () => {
    if (window.confirm(`Deseja excluir o elemento de ID: ${_id}`)) {
    //   axios
    //     .delete(`https://bsgs4r.sse.codesandbox.io/professors/delete/${_id}`)
    //     .then((res) => props.deleteStudentById(_id))
    //     .catch((error) => console.log(error));
    FirebaseServiceProfessor.delete(
      props.firestoreDb,
      ()=>{},
      _id
    )
    }

  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td style={{ textAlign: "center" }}>
        <Link
          to={`/editProfessor/${_id}`}
          state={{ props: props.professor }}
          className="btn btn-warning"
        >
          Editar
        </Link>
      </td>
      <td>
        <button onClick={() => deleteProfessor()} className="btn btn-danger">
          Apagar
        </button>
      </td>
    </tr>
  );
}
export default ProfessorTableRow;
