import btn_joinHand from '../assets/img/btn/btn_joinHand.gif'
function Section03(){
    return(
        <section className="section03">
            <h2>本屆主題:互動式網頁設計</h2>
            <h5>以下兩個角色進行攜手合作</h5>
            <ul className="section03__ul">
                <li className="section03__ul__li">
                    <img className='section03__ul__li__hand' src={btn_joinHand} alt="" />
                    <div className='section03__ul__li__btn'></div>
                    <h4>前端工程師</h4>
                </li>
                <li className="section03__ul__li">
                    <img className='section03__ul__li__hand' src={btn_joinHand} alt="" />
                    <div className='section03__ul__li__btn'></div>
                    <h4>UI設計師</h4>
                </li>
                <li className="section03__ul__li">
                    <img className='section03__ul__li__hand' src={btn_joinHand} alt="" />
                    <div className='section03__ul__li__btn'></div>
                    <h4>團體組(UI+前端)</h4>
                </li>
            </ul>
        </section>
    )
}
export default Section03