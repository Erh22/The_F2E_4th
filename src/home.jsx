import './assets/css/style.scss'
import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import SideBar from './components/SideBar'
import map from './assets/img/main/map.svg';
import map_now from './assets/img/main/map_now.gif'
import ready_frame from './assets/img/main/ready_frame.png'
import ready_1 from './assets/img/main/ready_1.png'
import ready_2 from './assets/img/main/ready_2.png'
import ready_3 from './assets/img/main/ready_3.png'
import btn_joinHand from './assets/img/btn/btn_joinHand.gif'
import logo_text from './assets/img/logo/logo_text.png'
import start from './assets/img/main/start_1.png'
import road from './assets/img/main/road.png'
import ic_users from './assets/img/ic/ic_users.svg'
import character_f2e from './assets/img/character/character_f2e.gif'
import character_team from './assets/img/character/character_team.gif'
import character_ui from './assets/img/character/character_ui.gif'
import bg_decorate_01 from './assets/img/bg/bg_decorate_01.png'
import bg_decorate_05 from './assets/img/bg/bg_decorate_05.png'
import logo from './assets/img/logo/logo.png'
import { Timeline } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
function Home() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.section02',
                start: 'top 10%',
                end: '+=1000',
                scrub: !0,
            },
        })
        tl
            .fromTo('.trafficLight__ready-1 ,.trafficLight__ready-2', { display: 'block' }, { display: 'none' })
            .to('.trafficLight__text__h4-ready', { opacity: 0 })
            .to('.section01__running__decorate', { scale: 0.8 })
            .fromTo('.trafficLight__ready-3', { display: 'block' }, { display: 'none' }, '+=2')
            .to('.trafficLight__ready-2', { display: 'block' })
            .to('.section01__running__decorate', { scale: 0.6 })
            .to('.trafficLight__ready-2', { display: 'none' })
            .to('.trafficLight__ready-1', { display: 'block' })
            .to('.trafficLight__text__h4-go', { opacity: 1 })
            .to('.section01__running__decorate', { scale: 0.1, opacity: 0 })
            .to('.trafficLight', { opacity: 0 })
            .to('.section01__ul', { opacity: 0 })
            .to('.section01__logo', { opacity: 0 })
            .to('.section01__title', { opacity: 0 })
            .to('.section01__running__start', { opacity: 0 })
            .to('.logo', { opacity: 1 })

        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger:'.section03',
                start:'top top',
                end:'+=1000',
                scrub: !0,
            }
        })
    })
    // user icon點按效果
    const [mouseHandleUser, setMouseHandleUser] = useState(false)


    return (
        <div className="home" ref={ref}>
            <SideBar />
            <section className='section01'>
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
                <div className='trafficLight'>
                    <div className='trafficLight__text'>
                        <h4 className='trafficLight__text__h4 trafficLight__text__h4-ready'>READY?</h4>
                        <h4 className='trafficLight__text__h4 trafficLight__text__h4-go'>GO!!</h4>
                    </div>
                    <img className='trafficLight__ready-frame' src={ready_frame} alt="" />
                    <img className='trafficLight__ready-1' src={ready_1} alt="" />
                    <img className='trafficLight__ready-2' src={ready_2} alt="" />
                    <img className='trafficLight__ready-3' src={ready_3} alt="" />
                </div>
                <div className='container'>
                    <div className='section01__logo'>
                        <img src={logo_text} alt="" />
                    </div>
                    <h1 className='section01__title'>互動式網頁設計</h1>
                    <ul className='section01__ul'>
                        <li>
                            <h5>前端工程師</h5>
                            <div>
                                <img src={ic_users} alt="" />
                                <span>920</span>
                            </div>
                        </li>
                        <li>
                            <h5>UI設計師</h5>
                            <div>
                                <img src={ic_users} alt="" />
                                <span>110</span>
                            </div>
                        </li>
                        <li>
                            <h5>團體組</h5>
                            <div>
                                <img src={ic_users} alt="" />
                                <span>41</span>
                            </div>
                        </li>
                    </ul>
                    <div className='section01__running'>
                        <div className='section01__running__decorate'>
                            <img className='section01__running__decorate__left' src={bg_decorate_01} alt="" />
                            <img className='section01__running__decorate__right' src={bg_decorate_05} alt="" />
                        </div>
                        <img className='section01__running__start' src={start} alt="" />
                        <img className='section01__running__road' src={road} alt="" />
                        <img className='section01__running__character-f2e' src={character_f2e} alt="" />
                        <img className='section01__running__character-ui' src={character_ui} alt="" />
                        <img className='section01__running__character-team' src={character_team} alt="" />
                    </div>
                </div>
            </section>
            <section className='section02'></section>
            <section className='section03'>
                <div className='container'>
                    <h2>你是否也有以下困擾?</h2>
                </div>
            </section>
        </div>
    )
}
export default Home;