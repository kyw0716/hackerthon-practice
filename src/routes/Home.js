import { Link } from "react-router-dom";
import style from "./Home.module.css"

function Home() {

    return (
        <div className="Home">
            <div className={style.upBox}><button><Link to="/student">student</Link></button></div>
            <div className={style.downBox}><button><Link to="/teacher">teacher</Link></button></div>
            <div className={style.student}>
                <span>학생 / 학부모용</span>
                <span>~~~~~~~~~~~~~~</span>
                <button><Link to="/login">로그인 / 회원가입</Link></button>
            </div>
            <div className={style.teacher}>
                <span>교사 / 교직원용</span>
                <span>~~~~~~~~~~~~~~</span>
                <button><Link to="/login">로그인 / 회원가입</Link></button>
            </div>
        </div>
    );
}

export default Home;