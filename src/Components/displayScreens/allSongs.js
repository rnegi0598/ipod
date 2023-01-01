
export default function AllSongs(){
   
    return (
        <div style={{ width:'100%',height:'100%', position:'absolute',top:'0'}}>

           <div style={{textAlign:'center'}}>
            <p style={{fontSize:'2rem',textAlign:'center',fontWeight:'900',marginTop:'5px'}}>Song Name </p>
                <audio controls>
                    <source src="./Songs/song1.mp3" type='audio/mp3'/>
                </audio>
                <p className="song-img">
                    <img src="./images/wallpaper.jpeg" alt="song img" style={{width:'200px',height:'200px'}}/>
                </p>
           </div>
            

        </div>
    )
}
