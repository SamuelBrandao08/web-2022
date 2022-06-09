import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ProfessorTableRow from "./ProfessorTableRow";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseServiceProfesor from "../../../services/FirebaseServiceProfessor";

const ListProfessorPage = () => 
    <FirebaseContext.Consumer>
        {(firebase) => <ListProfessor firebase={firebase} />}
    </FirebaseContext.Consumer>

function ListProfessor(props) {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://bsgs4r.sse.codesandbox.io/professors/list")
    //   .then((res) => {
    //     setProfessors(res.data);
    //   })
    //   .catch((error) => console.log(error));
    FirebaseServiceProfesor.list_onSnapshot(
      props.firebase.getFirestoreDb(), 
      (professors)=>{
          setProfessors(professors)
      }
  )}, [props]);
  function DeleteProfessorById(_id) {
    let professorsTemp = professors;
    for (let i = 0; i < professorsTemp.length; i++) {
      if (professorsTemp[i]._id === _id) {
        professorsTemp.splice(i, 1);
      }
    }
    setProfessors([...professorsTemp]);
  }

  function generateTable() {
    if (!professors) return;
    return professors.map((professor, i) => {
      return (
        <ProfessorTableRow
          professor={professor}
          key={i}
          DeleteProfessorById={DeleteProfessorById}
        />
      );
    });
  }

  return (
    <div>
      <main>
        <h3>Listar Professor</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Universidade</th>
              <th>Título</th>
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

export default ListProfessorPage;
