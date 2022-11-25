import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import ready_frame from '../assets/img/main/ready_frame.png'
import ready_1 from '../assets/img/main/ready_1.png'
import ready_2 from '../assets/img/main/ready_2.png'
import ready_3 from '../assets/img/main/ready_3.png'
import logo_text from '../assets/img/logo/logo_text.png'
import start from '../assets/img/main/start_1.png'
import road from '../assets/img/main/road.png'
import ic_users from '../assets/img/ic/ic_users.svg'
import character_f2e from '../assets/img/character/character_f2e.gif'
import character_team from '../assets/img/character/character_team.gif'
import character_ui from '../assets/img/character/character_ui.gif'
import bg_decorate_01 from '../assets/img/bg/bg_decorate_01.png'
import bg_decorate_05 from '../assets/img/bg/bg_decorate_05.png'
import bg_decorate_09 from '../assets/img/bg/bg_decorate_09.png'
function Section01() {
    return (
        <section className='section01'>
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
                        <MouseParallaxContainer containerStyle={{width:"100%",display:"flex",overflow:"visible"}}>
                            <MouseParallaxChild factorX={0.1} factorY={0} style={{display:'flex',alignItems:'flex-end'}}>
                                <img className='section01__running__item__character-f2e' src={character_f2e} alt="" />
                            </MouseParallaxChild>
                            <MouseParallaxChild factorX={-0.1} factorY={0} style={{display:'flex',alignItems:'flex-end',zIndex:'2'}}>
                                <img className='section01__running__item__character-ui' src={character_ui} alt="" />
                            </MouseParallaxChild>
                            <MouseParallaxChild factorX={0.1} factorY={0} style={{display:'flex',alignItems:'flex-end',zIndex:'1'}}>
                                <img className='section01__running__item__character-team' src={character_team} alt="" />
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </div>
                    <div className='section01__running__grass'>
                        <img className='section01__running__grass__left' src={bg_decorate_09} alt="" />
                        <img src={bg_decorate_09} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section01