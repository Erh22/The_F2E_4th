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
import bg_decorate_09 from './assets/img/bg/bg_decorate_09.png'
import question_1 from './assets/img/main/question_1.png'
import question_2 from './assets/img/main/question_2.png'
import question_3 from './assets/img/main/question_3.png'
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
            .fromTo('.trafficLight__ready-1 ,.trafficLight__ready-2', { display: 'block' }, { display: 'none',duration: 5 })
            .to('.trafficLight__text__h4-ready', { opacity: 0,duration: 5 })
            .to('.section01__running__decorate', { scale: 0.8,duration: 5 })
            .fromTo('.trafficLight__ready-3', { display: 'block' }, { display: 'none',duration: 5 }, '+=2')
            .to('.trafficLight__ready-2', { display: 'block',duration: 5 })
            .to('.section01__running__decorate', { scale: 0.6,duration: 5 })
            .to('.trafficLight__ready-2', { display: 'none',duration: 5 })
            .to('.trafficLight__ready-1', { display: 'block',duration: 5 })
            .to('.trafficLight__text__h4-go', { opacity: 1,duration: 5 })
            .to('.section01__running__decorate', { scale: 0.1, opacity: 0,duration: 5 })
            .to('.trafficLight', { opacity: 0,duration: 5 })
            .to('.section01__ul', { opacity: 0,duration: 5 })
            .to('.section01__logo', { opacity: 0,duration: 5 })
            .to('.section01__title', { opacity: 0,duration: 5 })
            .to('.section01__running__start', { opacity: 0,duration: 5 })
            .to('.logo', { opacity: 1,duration: 5 })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section03',
                start: 'top top',
                end: '+=1000',
                scrub: !0,
            }
        })
        tl2
            .to('.section01__running__road', { width: 900 ,duration: 5})
            .to('.section01__running__item', { scale: 0.7,duration: 5 })
            .to('.section01__running__grass',{bottom:-57,duration: 5})
            .to('.section03 h2', { opacity: 1})
            .fromTo('.map__now',{x:0,y:0},{x:41,y:-50})
            .fromTo('.section03__content__item-left',{x:-1000,opacity:0},{x:0,opacity:1,duration: 5})
            .to('.section01__running__grass',{scale:0.9,bottom:-24,duration: 5})
            .fromTo('.section03__content__item-middle',{opacity:0},{opacity:1,duration: 5})
            .to('.section01__running__grass',{scale:0.7,bottom:-1,duration: 5})
            .fromTo('.section03__content__item-right',{x:2000,opacity:0},{x:0,opacity:1,duration: 5})
            .to('.section01__running__grass',{scale:0,bottom:-1,duration: 5})
            // .to('.section03',{css:{zIndex:-1,opacity:0},duration: 5})
            .to('.section03',{opacity:0,duration: 5})
            .to('.section01__running__road', { width: 1175 ,duration: 5})
            .to('.section01__running__item', { scale: 1,duration: 5 })
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
                        <div className='section01__running__item'>
                            <img className='section01__running__item__character-f2e' src={character_f2e} alt="" />
                            <img className='section01__running__item__character-ui' src={character_ui} alt="" />
                            <img className='section01__running__item__character-team' src={character_team} alt="" />
                        </div>
                        <div className='section01__running__grass'>
                            <img className='section01__running__grass__left' src={bg_decorate_09} alt="" />
                            <img src={bg_decorate_09} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section02'></section>
            <section className='section03'>
                    <h2>你是否也有以下困擾?</h2>
                    <div className='section03__content'>
                        <div className='section03__content__item section03__content__item-left'>
                            <h4>羨慕別人的酷酷網頁動畫?</h4>
                            <img src={question_1} alt="" />
                        </div>
                        <div className='section03__content__item section03__content__item-middle'>
                            <h4>滿足不了同事的許願?</h4>
                            <img src={question_2} alt="" />
                        </div>
                        <div className='section03__content__item section03__content__item-right'>
                            <h4>動畫技能樹太雜無從下手?</h4>
                            <img src={question_3} alt="" />
                        </div>
                    </div>
            </section>
        </div>
    )
}
export default Home;