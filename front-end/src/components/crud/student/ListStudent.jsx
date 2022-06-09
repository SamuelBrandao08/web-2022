import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

import StudentTableRow from "./StudentTableRow";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseServiceStudent from "../../../services/FirebaseServiceStudent";

const ListStudentPage = () => 
    <FirebaseContext.Consumer>
        {(firebase) => <ListStudent firebase={firebase} />}
    </FirebaseContext.Consumer>

function ListStudent(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // axios
    //   .get("http://localhost:3001/students/list")
    //   .then((res) => {
    //     setStudents(res.data);
    //   })
    //   .catch((error) => console.log(error));

    FirebaseServiceStudent.list_onSnapshot(
      props.firebase.getFirestoreDb(), 
      (students)=>{
          setStudents(students)
      }
  )}, [props]);

  function DeleteStudentById(_id) {
    let studentsTemp = students;
    for (let i = 0; i < studentsTemp.length; i++) {
      if (studentsTemp[i]._id === _id) {
        studentsTemp.splice(i, 1);
      }
    }
    setStudents([...studentsTemp]);
  }

  function generateTable() {
    if (!students) return;
    return students.map((student, i) => {
      return (
        <StudentTableRow
          student={student}
          key={i}
          DeleteStudentById={DeleteStudentById}
        />
      );
    });
  }

  return (
    <div>
      <main>
        <h3>Listar Estudante</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Curso</th>
              <th>IRA</th>
              <th colSpan={2} style={{ textAlign: "center" }}></th>
            </tr>
          </thead>
          <tbody>{generateTable()}</tbody>
        </table>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default ListStudentPage;
