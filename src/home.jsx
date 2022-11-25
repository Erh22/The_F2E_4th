import './assets/css/style.scss'
import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import SideBar from './components/SideBar'
import Section01 from './components/Section01'
import Section02 from './components/Section02'
import Float from './components/Float'
import { Timeline } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
function Home() {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(() => {
        const element = ref.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.scrollBlock',
                start: 'top 10%',
                end: '+=1500',
                scrub: !0,
            },
        })
        tl
            .fromTo('.trafficLight__ready-1 ,.trafficLight__ready-2', { display: 'block' }, { display: 'none', duration: 5 })
            .to('.trafficLight__text__h4-ready', { opacity: 0, duration: 5 })
            .to('.section01__running__decorate', { scale: 0.8, duration: 5 })
            .fromTo('.trafficLight__ready-3', { display: 'block' }, { display: 'none', duration: 5 }, '+=2')
            .to('.trafficLight__ready-2', { display: 'block', duration: 5 })
            .to('.section01__running__decorate', { scale: 0.6, duration: 5 })
            .to('.trafficLight__ready-2', { display: 'none', duration: 5 })
            .to('.trafficLight__ready-1', { display: 'block', duration: 5 })
            .to('.trafficLight__text__h4-go', { opacity: 1, duration: 5 })
            .to('.section01__running__decorate', { scale: 0.1, opacity: 0, duration: 5 })
            .to('.trafficLight', { opacity: 0, duration: 5 })
            .to('.section01__ul', { opacity: 0, duration: 5 })
            .to('.section01__logo', { opacity: 0, duration: 5 })
            .to('.section01__title', { opacity: 0, duration: 5 })
            .to('.section01__running__start', { opacity: 0, duration: 5 })
            .to('.logo', { opacity: 1, duration: 5 })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '.section02',
                start: 'top top',
                end: '+=2000',
                scrub: !0,
            }
        })
        tl2
            .to('.section01__running__road', { width: 900, duration: 5 })
            .to('.section01__running__item', { scale: 0.7, duration: 5 })
            .to('.section01__running__grass', { bottom: -57, duration: 5 })
            .to('.section02 h2', { opacity: 1 })
            .fromTo('.map__now', { x: 0, y: 0 }, { x: 41, y: -50 })
            .fromTo('.section02__content__item-left', { x: -1000, opacity: 0 }, { x: 0, opacity: 1, duration: 5 })
            .to('.section01__running__grass', { scale: 0.9, bottom: -24, duration: 5 })
            .fromTo('.section02__content__item-middle', { opacity: 0 }, { opacity: 1, duration: 5 })
            .to('.section01__running__grass', { scale: 0.7, bottom: -1, duration: 5 })
            .fromTo('.section02__content__item-right', { x: 2000, opacity: 0 }, { x: 0, opacity: 1, duration: 5 })
            .to('.section01__running__grass', { scale: 0, bottom: -1, duration: 5 })
            // .to('.section02',{css:{zIndex:-1,opacity:0},duration: 5})
            .to('.section02', { opacity: 0, duration: 5 })
            .to('.section01__running__road', { width: 1175, duration: 5 })
            .to('.section01__running__item', { scale: 1, duration: 5 })
    })

    return (
        <div className="home" ref={ref}>
            <SideBar />
            <Float />
            <Section01 />
            <section className='scrollBlock'></section>
            <Section02 />
        </div>
    )
}
export default Home;