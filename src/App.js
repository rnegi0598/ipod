
import './App.css';
import Screen from './Component/screen';
import Wheel from './Component/wheel';
import ZingTouch from 'zingtouch';
import {useState,useEffect} from 'react';


function App() {
  const [menuCard,setMenuCard]=useState(['Coverflow','Music','Games','Setting']);
  const [activeItem,setActiveItem]=useState('Coverflow');
  const [fullscreen,setFullscreen]=useState(false);

  const handlerWheelRotation=()=>{
    var containerElement=document.getElementById('wheel');
    var activeRegion=ZingTouch.Region(containerElement);

    //start
    activeRegion.bind(containerElement,'rotate',function(event){
     
      // console.log(event.detail.distanceFromOrigin);
      let distance=parseInt(event.detail.distanceFromOrigin)%170;
      
      let len=menuCard.length;
      let ind=-1;
      //clockwise:positive
      if(distance>=5){
          if(distance<40){
            ind=0;
          }else if(distance<80){
            ind=1;
          }else if(distance<120){
            ind=2;
          }else if(distance<160){
            ind=3%len;
          }

      }else if(distance<-5){
        distance*=-1;
        if(distance<40){
          ind=0;
        }else if(distance<80){
          ind=1;
        }else if(distance<120){
          ind=2;
        }else if(distance<160){
          ind=3%len;
        }
        ind=len-ind-1;
      }
      
      if(!fullscreen){
        setActiveItem(menuCard[ind]);
      }
      
    });
    //end
  }

  useEffect(()=>{
    handlerWheelRotation();
  },[menuCard]);
  
  // function handles middle click of wheel
  const wheelEnter=()=>{
   
    if(activeItem!=='Music'){
      setFullscreen(true);
    }else{
      setMenuCard(['All Songs','Artists','Albums'])
    }
  }


  // function handles back menu button
  const wheelBack=()=>{
    
    if(fullscreen){
      setFullscreen(false);
    }else{
      setMenuCard(['Coverflow','Music','Games','Setting'])

    }
  }



  return (
    <div className="App">

      <Screen menuCard={menuCard} activeItem={activeItem} fullscreen={fullscreen}/>
      <Wheel wheelEnter={wheelEnter} wheelBack={wheelBack}/>
     
    </div>
  );
}

export default App;
