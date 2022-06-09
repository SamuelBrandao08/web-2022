import { Link } from "react-router-dom";
import axios from "axios";

import FirebaseServiceStudent from "../../../services/FirebaseServiceStudent";

function StudentTableRow(props) {
  //const navigate = useNavigate();
  const { _id, name, course, ira } = props.student;

  const deleteStudent = () => {
    if (window.confirm(`Deseja excluir o elemento de ID: ${_id}`)) {
      // axios
      //   .delete(`http://localhost:3001/students/delete/${_id}`)
      //   .then((res) => props.deleteStudentById(_id))
      //   .catch((error) => console.log(error));
      FirebaseServiceStudent.delete(
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
      <td>{course}</td>
      <td>{ira}</td>
      <td style={{ textAlign: "center" }}>
        <Link
          to={`/editStudent/${_id}`}
          state={{ props: props.student }}
          className="btn btn-warning"
        >
          Editar
        </Link>
      </td>
      <td>
        <button 
          onClick={() => deleteStudent()} 
          className="btn btn-danger"
        >
        Apagar
        </button>
      </td>
    </tr>
  );
}
export default StudentTableRow;
