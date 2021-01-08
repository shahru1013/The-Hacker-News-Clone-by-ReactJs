import './App.css';
import React ,{useState} from 'react'
import Header from './Header/Header.jsx'
import Navbar from './Navbar/Navbar'
import Search from './SearchBar/Search'
function App() {
  const[searchClick,isopen]=useState(0);
  var clickItem=0;
  if(1==1)
  return (
    
    <div className="App">
      <Header onClick={(e)=>{
        try{
          clickItem = e.target.attributes.getNamedItem('val').value;
          }
          catch(e){
              
          }
          
          clickItem==="SearchBox"?isopen(searchClick+1):isopen(searchClick);
      }}/>
      <Navbar onClick={(e)=>{
        try{
        clickItem = e.target.attributes.getNamedItem('val').value;
        }
        catch(e){
            
        }
        clickItem==="SearchBox"?isopen(searchClick+1):isopen(searchClick);
      }}/>
      {searchClick%2!==0 && <Search/> }
    </div>
  );
 
}

export default App;
