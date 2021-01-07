import './App.css';
import Header from './Header/Header.jsx'
import Navbar from './Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar onClick={(e)=>{
        alert(e.target.attributes.val.value);
      }}/>
    </div>
  );
}

export default App;
