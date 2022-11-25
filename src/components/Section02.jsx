import question_1 from '../assets/img/main/question_1.png'
import question_2 from '../assets/img/main/question_2.png'
import question_3 from '../assets/img/main/question_3.png'
function Section02() {
    return (
        <section className='section02'>
            <h2>你是否也有以下困擾?</h2>
            <div className='section02__content'>
                <div className='section02__content__item section02__content__item-left'>
                    <h4>羨慕別人的酷酷網頁動畫?</h4>
                    <img src={question_1} alt="" />
                </div>
                <div className='section02__content__item section02__content__item-middle'>
                    <h4>滿足不了同事的許願?</h4>
                    <img src={question_2} alt="" />
                </div>
                <div className='section02__content__item section02__content__item-right'>
                    <h4>動畫技能樹太雜無從下手?</h4>
                    <img src={question_3} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Section02