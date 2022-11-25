import { useState} from 'react'
import logo from '../assets/img/logo/logo.png'
import map from '../assets/img/main/map.svg';
import map_now from '../assets/img/main/map_now.gif'
import btn_joinHand from '../assets/img/btn/btn_joinHand.gif'
function Float() {
    // user icon點按效果
    const [mouseHandleUser, setMouseHandleUser] = useState(false)
    return (
        <>
            <img className='logo' src={logo} alt="" />
            <div className='map'>
                <img src={map} alt="" />
                <img src={map_now} className={`map__now`} alt="" />
            </div>
            <div className='join'>
                <span>JOIN</span>
                <img src={btn_joinHand} alt="" />
                <div className='join__btn'></div>
            </div>
            <a href="https://2022.thef2e.com/users"
                target='_blank'
                className={`user ${mouseHandleUser ? 'mouseOn' : ''}`}
                onMouseDown={() => setMouseHandleUser(true)}
                onMouseUp={() => setMouseHandleUser(false)} />
        </>
    )
}
export default Float