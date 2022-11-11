import './assets/css/style.scss'
import {uesEffect,useState} from 'react'
function Home(){
    const [sideBar,setSideBar] = useState(false)
    const [mouseOnIcon,setMouseOnIcon] = useState(false)
    const handleSideBar = () => {
        setSideBar(!sideBar)
    }
    return(
        <div className="home">
            <div className={`sideBar${sideBar?' active':''}`}>
                <div className='sideBar__menu'></div>
                <div className='sideBar__tab'>
                    <div className={`sideBar__tab__icon ${mouseOnIcon?'mouseOn':''}`}
                         onClick={handleSideBar} 
                         onMouseEnter={() => setMouseOnIcon(true)}
                         onMouseLeave={() => setMouseOnIcon(false)}
                    ></div>
                </div>
            </div>
            <section className='section01'></section>
        </div>
    )
}
export default Home;