function app(){
  return(
    <div className="app">
      <h1>Hello World</h1>
      <p>This is my first react app.</p>
      <Cse12 />
    </div>
  );
}

//2nd component
// 2nd Component
function Cse12(){
  return (
    <div className="Cse12">
      <h2>Welcome to CSE 12</h2>
      <p>This is some content for the CSE 12 component.</p>
    </div>
  );
}
export default app;