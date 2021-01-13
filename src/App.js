import './App.css';
import React ,{useState} from 'react'
import Header from './Header/Header.jsx'
import Navbar from './Navbar/Navbar'
import Search from './SearchBar/Search'
import Option from './Option/Option'
import Post from './Body/Post/Post'
import Popular from './Body/Popular/Popular'
import Nextpage from './Body/Next/Nextpage'
import OnlineCourses from './Body/OnlineCouses/OnlineCourses'
import NewsLetterMail from './Body/NewsLetterMail/NewsLetterMail'
import Mainfooter from './Body/Footer/MainFooter/Mainfooter'
function App() {
  const click = (val)=>{
    alert("Clicked news no : "+val.target.getAttribute('number'));
    //console.log(val.target.getAttribute('number'));
}
  const[searchClick,isopen]=useState(0);
  const[menuBarClick,makeBlink]=useState(0);
  const[loopStart,changeStart]=useState(1);
  const[loopEnd,changeEnd]=useState(4);
  var arra=[];
  for(var i=loopStart;i<loopEnd;i++){
    arra.push(<Post title={i.toString()+i.toString()} dname={i} time={new Date().toLocaleTimeString()} onClick={click.bind(this)}/>);
  }
  
  var clickItem=0;
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
      <div className="home-div">
         <div className="ld">
           <div className="ld-post">
              {arra.map(
                (val)=>{
                 return val;
                }
               )
              }
           </div>

            {<Nextpage blink={loopStart} onClick={(e)=>{
              //alert(e.target.getAttribute('val'))
              var stat = e.target.getAttribute('stat');
              stat==="next"?changeStart(loopEnd):loopStart-4>0 ? changeStart(loopStart-4):changeStart(1);
              stat==="next"?changeEnd(loopEnd+4): loopStart-4<=0 ? changeEnd(4):changeEnd(loopStart);
            }}/>
            }
         </div>
         <div className="rd">
           <h2 ><b style={{borderBottom:'4px solid black',marginLeft:'2vw'}}>Popular this week</b></h2>
           <Popular ptitle="p11" pdname="p1"/>
           <Popular ptitle="p22" pdname="p2"/>
           <Popular ptitle="p33" pdname="p3"/>
           <Popular ptitle="p44" pdname="p4"/>
           <Popular ptitle="p44" pdname="p4"/>
         </div>
      </div>
      <div className="courses-div">
           <div className="header"> 
              <h2><u><b>Online Courses and Software</b></u></h2>
           </div>
           <div className="online-courses">
              <OnlineCourses/>
              <OnlineCourses/>
              <OnlineCourses/>
              <OnlineCourses/>
           </div>
      </div>
      <div className="nl-div">
        <NewsLetterMail/>
      </div>

      <div className="foot-div">
         {<Mainfooter/>}
      </div>


    </div>
  );
}

export default App;
