import './screen.css'
import Coverflow from './displayScreens/coverflowScreen'
import Wallpaper from './displayScreens/wallpaperScreen'
import Games from './displayScreens/gamesScreen'
import Setting from './displayScreens/settingScreen'
import AllSongs from './displayScreens/allSongs'
import Artists from './displayScreens/artists'
import Albums from './displayScreens/albums'

export default function Screen(props){
    let activeItem=props.activeItem;
    

   
    return (
        <div className="screen">
            <div className='display-screen'>
                {!props.fullscreen?<Wallpaper/>:''}
                {activeItem==='Coverflow' && props.fullscreen?<Coverflow/>:''}
                {activeItem==='Games'&& props.fullscreen?<Games/>:''}
                {activeItem==='Setting' && props.fullscreen?<Setting/>:''}
                {activeItem==='All Songs' && props.fullscreen?<AllSongs/>:''}
                {activeItem==='Artists' && props.fullscreen?<Artists/>:''}
                {activeItem==='Albums' && props.fullscreen?<Albums/>:''}


            </div>

            <div className='menu-screen' style={props.fullscreen?{display:'none'}:{}}
            >

                <div className='app-name' style={{fontSize:'2.2rem',paddingLeft:'10px',paddingTop:'15px'}}>{props.menuCard.length===4?'ipod.js':'Music'}</div>
                <div  className='menu-list'>
                    {
                    props.menuCard.map((item)=>{
                        return(
                            <div
                             key={item} 
                             style={activeItem===item?styles.highlight:{}}
                             >
                                
                                {item}
                                {' '}
                                {activeItem===item?<img className='active-arrow' alt="active" src="./images/arrow-right-solid.svg"
                                />:''}
                            </div>
                        )
                    })
                    }
                </div>
            </div>


        </div>
    )
}


const styles={
    highlight:{
        position:'relative',
        backgroundColor:'#038aff',
        fontWeight:'500'
    }
    
}