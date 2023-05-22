import { Link } from "react-router-dom";

function Header(){
  return(
    <header className="header_container">
      <button className="menu_btn">
        <span className="top_line"></span>
        <span className="mid_line"></span>
        <span className="bot_line"></span>
      </button>
      <h1 className="logo">
        <Link to={'/'} className="logo_btn">
          <img src='/img/main_logo.png' alt="포트폴리오 네스트호텔" />
        </Link>
      </h1>
      <div className="gnb_bar">
        <Link to={'/'}>로그인</Link>
        <Link to={'/'}>회원가입</Link>
        <Link to={'/'}>예약하기</Link>
        <Link to={'/'}>예약확인</Link>
      </div>
    </header>
  )
}

export default Header;