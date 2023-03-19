import ProfileCard from "./Component/Card";


function App() {
  const SayHello=(msg)=>{
    return alert(`Welcome ${msg}`)
  }
  return (
    <div style={{display:'flex', justifyContent:'center' ,marginTop:'5%'}} className="App">
      <ProfileCard greeting={SayHello} img="img/pic.jpg" />
    </div>
  );
}

export default App;
