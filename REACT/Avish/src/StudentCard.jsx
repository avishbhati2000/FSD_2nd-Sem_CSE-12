// function StudentCard(Props){
//     return (
//         <div>
//             <h2>Name:{Props.Name}</h2>
//             <p>Marks:{Props.Marks}</p>
//             <p>Grade:{Props.Grade}</p>
//         </div>
//     );
// }

// export default StudentCard; 

function StudentCard({ name, marks, grade }) {
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <p>Marks: {marks}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default StudentCard;