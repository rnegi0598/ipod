import './wheel.css'
export default function Wheel(props){


    return (
        <div className="wheel" id="wheel">
            <div className='top-btn'>
                <div onClick={props.wheelBack}>
                    <img src="../images/bars-solid-white.svg" alt='menu'/>
                </div>
            </div>

            <div className='middle-btn'>
                <img src="../images/backward-solid-white.svg" alt='backward'/>
                <div className='center-btn' onClick={props.wheelEnter}></div>
                <img src="../images/forward-solid-white.svg" alt='forward'/>
            </div>

            <div className='bottom-btn'>
                <div>
                    <img src="../images/play-solid-white.svg" alt='play and pause'/>
                </div>
            </div>

        </div>
    )
}