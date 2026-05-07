// function app(){
//   return(
//     <div className="app">
//       <h1>Hello World</h1>
//       <p>This is my first react app.</p>
//       <Cse12 />
//     </div>
//   );
// }

// //2nd component
// // 2nd Component
// function Cse12(){
//   return (
//     <div className="Cse12">
//       <h2>Welcome to CSE 12</h2>
//       <p>This is some content for the CSE 12 component.</p>
//     </div>
//   );
// }
// export default app;
import React from 'react';
import './App.css';
import StudentCard from './StudentCard';

function App() {
  return (
    <div className="container">
      <h1>Student Card</h1>

      <StudentCard
        name="John"
        marks="30"
        grade="A"
      />
    </div>
  );
}

export default App;