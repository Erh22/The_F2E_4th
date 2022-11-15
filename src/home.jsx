import './assets/css/style.scss'
import {uesEffect,useState,useRef, useEffect} from 'react'
import { gsap } from 'gsap'
import ic_menu_info from './assets/img/ic/ic_menu_info.png'
import ic_menu_info_h from './assets/img/ic/ic_menu_info_h.png'
import ic_menu_job from './assets/img/ic/ic_menu_job.png'
import ic_menu_job_h from './assets/img/ic/ic_menu_job_h.png'
import ic_menu_list from './assets/img/ic/ic_menu_list.png'
import ic_menu_list_h from './assets/img/ic/ic_menu_list_h.png'
import ic_menu_strategy from './assets/img/ic/ic_menu_strategy.png'
import ic_menu_strategy_h from './assets/img/ic/ic_menu_strategy_h.png'
import map from './assets/img/main/map.svg';
import map_now from './assets/img/main/map_now.gif'
import ready_frame from './assets/img/main/ready_frame.png'
import ready_1 from './assets/img/main/ready_1.png'
import ready_2 from './assets/img/main/ready_2.png'
import ready_3 from './assets/img/main/ready_3.png'
import btn_joinHand from './assets/img/btn/btn_joinHand.gif'
function Home(){
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current
        gsap.fromTo(
            element.querySelector('.trafficLight__ready-1'),
            {
                opacity:1,
            },{
                opacity:0,
                scrollTrigger:{
                    trigger:element.querySelector('.section01'),
                    start: "top 70%",
                    end: "bottom center",
                    scrub: true,
                }
            }
        )
    },[])
    // 側邊欄收合
    const [sideBar,setSideBar] = useState(false)

    // 側邊欄按鈕滑鼠點按效果
    const [mouseHandleIcon,setMouseHandleIcon] = useState(false)
    // user icon點按效果
    const [mouseHandleUser,setMouseHandleUser] = useState(false)

    // 點擊側邊欄
    const handleSideBar = () => {
        setSideBar(!sideBar)
    }
    return(
        <div className="home" ref={ref}>
            <div className={`sideBar${sideBar?' active':''}`}>
                <div className='sideBar__menu'>
                    <a className='sideBar__menu__item' href='https://2022.thef2e.com/news' target='_blank'>
                        <img className='img01' src={ic_menu_info} alt="" />
                        <img className='img02' src={ic_menu_info_h} alt="" />
                        <span>關卡資訊</span>
                    </a>
                    <a className='sideBar__menu__item' href='https://2022.thef2e.com/works' target='_blank'>
                        <img className='img01' src={ic_menu_list} alt="" />
                        <img className='img02' src={ic_menu_list_h} alt="" />
                        <span>作品列表</span>
                    </a>
                    <a className='sideBar__menu__item' href='https://hackmd.io/ofJD4K7iSI65V19zxC7d0w' target='_blank'>
                        <img className='img01' src={ic_menu_strategy} alt="" />
                        <img className='img02' src={ic_menu_strategy_h} alt="" />
                        <span>攻略資源</span>
                    </a>
                    <a className='sideBar__menu__item' href='https://2022.thef2e.com/jobs' target='_blank'>
                        <img className='img01' src={ic_menu_job} alt="" />
                        <img className='img02' src={ic_menu_job_h} alt="" />
                        <span>求職專區</span>
                    </a>
                </div>
                <div className='sideBar__tab'>
                    <div className={`sideBar__tab__icon ${mouseHandleIcon?'mouseOn':''}`}
                         onClick={handleSideBar} 
                         onMouseDown={() => setMouseHandleIcon(true)}
                         onMouseUp={() => setMouseHandleIcon(false)}
                    />
                </div>
            </div>
            <div className='map'>
                <img src={map} alt="" />
                <img src={map_now} className={`map__now`} alt="" />
            </div>
            <div className='trafficLight'>
                <span>READY?</span>
                <img className='trafficLight__ready-frame' src={ready_frame} alt="" />
                <img className='trafficLight__ready-1' src={ready_1} alt="" />
                <img className='trafficLight__ready-2' src={ready_2} alt="" />
                <img className='trafficLight__ready-3' src={ready_3} alt="" />
            </div>
            <div className='join'>
                <span>JOIN</span>
                <img src={btn_joinHand} alt="" />
                <div className='join__btn'></div>
            </div>
            <a href="https://2022.thef2e.com/users" 
               target='_blank' 
               className={`user ${mouseHandleUser?'mouseOn':''}`} 
               onMouseDown={() => setMouseHandleUser(true)} 
               onMouseUp={() => setMouseHandleUser(false)}/>
            <section className='section01'></section>
        </div>
    )
}
export default Home;