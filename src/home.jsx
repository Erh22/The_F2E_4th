import './assets/css/style.scss'
import {uesEffect,useState} from 'react'
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
function Home(){
    // 側邊欄收合
    const [sideBar,setSideBar] = useState(false)

    // 側邊欄按鈕滑鼠點按效果
    const [mouseHandleIcon,setMouseHandleIcon] = useState(false)

    // 點擊側邊欄
    const handleSideBar = () => {
        setSideBar(!sideBar)
    }
    return(
        <div className="home">
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
                         onMouseEnter={() => setMouseHandleIcon(true)}
                         onMouseLeave={() => setMouseHandleIcon(false)}
                    ></div>
                </div>
            </div>
            <div className='map'>
                <img src={map} alt="" />
                <img src={map_now} className={`map__now`} alt="" />
            </div>
            <section className='section01'></section>
        </div>
    )
}
export default Home;