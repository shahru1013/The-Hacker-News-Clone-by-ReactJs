import './App.css';
import React ,{useState} from 'react'
import Header from './Header/Header.jsx'
import Navbar from './Navbar/Navbar'
import Search from './SearchBar/Search'
import Option from './Option/Option'
import Post from './Body/Post/Post'
function App() {
  const[searchClick,isopen]=useState(0);
  const[menuBarClick,makeBlink]=useState(0);
  var clickItem=0;
  const obj={
    name:'shahru',
    age:100
  }
  return (
    <div className="App">
      {<Header onClick={(e)=>{
        try{
          clickItem = e.target.attributes.getNamedItem('val').value;
          }
          catch(e){
              
          }
          clickItem==="SearchBox"?isopen(searchClick+1):isopen(searchClick);
          clickItem==="Option"?makeBlink(menuBarClick+1):makeBlink(menuBarClick);
      }}/>
    }
      {<Navbar onClick={(e)=>{
        try{
        clickItem = e.target.attributes.getNamedItem('val').value;
        }
        catch(e){
            
        }
        clickItem==="SearchBox"?isopen(searchClick+1):isopen(searchClick);
        clickItem==="MenuBar"?makeBlink(menuBarClick+1):makeBlink(menuBarClick);
      }}/>
    }
    {searchClick%2!==0 && <Search/> }
      {menuBarClick%2!==0 && <Option onClick={(e)=>{
        try{
        e.target.attributes.getNamedItem('va').value==="cancel"?makeBlink(0):makeBlink(0);
        }
        catch(e){

        }
      }}/>}
      
      <Post name={obj}/>
      

    </div>
  );
}

export default App;
