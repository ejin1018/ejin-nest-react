import { useState } from "react";
import { Link } from "react-router-dom";


function Main(props:{nowState:boolean}){

  let [hotelOpen,setHotelOpen] = useState(false);
  let [promoOpen,setPromoOpen] = useState(false);
  let [roomOpen,setRoomOpen] = useState(false);
  let [diningOpen,setDiningOpen] = useState(false);
  let [eventOpen,setEventOpen] = useState(false);

  // dispatch 함수를 호출 할 때는 전달되는 액션 객체의 형태가 리듀서 함수에서 처리하는 액션의 형식과 일치해야한다
  // action.type = "Hotel" 이면 hotelOpen 이 true 상태여야 on class 가 붙게끔 되어있음
  // 어떻게 제어할 것인가 일단 useState 는 사용하지 않는다
  // 대메뉴를 눌렀을 때 dispatch 로 type과 open 이 전달되면 action.open 이 true 일 때 class 가 붙도록 한다?

  // useReducer(reducer함수이름, 초기값{type:false, isValid:true}) 이면
  // reducer 함수 내부에서 리턴해주는 값도 return {type:true, isValid:false} ... 
  
  let largeHotelClick = ()=>{
    setHotelOpen(!hotelOpen);
    setPromoOpen(false);
    setRoomOpen(false);
    setDiningOpen(false);
    setEventOpen(false);
  }
  let largePromoClick = ()=>{
    setHotelOpen(false);
    setPromoOpen(!promoOpen);
    setRoomOpen(false);
    setDiningOpen(false);
    setEventOpen(false);
  }
  let largeRoomClick = ()=>{
    setHotelOpen(false);
    setPromoOpen(false);
    setRoomOpen(!roomOpen);
    setDiningOpen(false);
    setEventOpen(false);
  }
  let largeDiningClick = ()=>{
    setHotelOpen(false);
    setPromoOpen(false);
    setRoomOpen(false);
    setDiningOpen(!diningOpen);
    setEventOpen(false);
  }
  let largeEventClick = ()=>{
    setHotelOpen(false);
    setPromoOpen(false);
    setRoomOpen(false);
    setDiningOpen(false);
    setEventOpen(!eventOpen);
  }

  return(
    <section className="main_wrap" id="main">
      {props.nowState?
        <div className="menu_container">
          <ul className="large_menu_list">
            <li>
              <Link to={'/'} className="large_menu" onClick={largeHotelClick}>네스트 호텔<span>ABOUT</span></Link>
            </li>
            <li>
              <Link to={'/'} className="large_menu">예약하기<span>RESERVATION</span></Link>
            </li>
            <li>
              <Link to={'/'} className="large_menu" onClick={largePromoClick}>프로모션<span>PROMOTION</span></Link>
            </li>
            <li>
              <Link to={'/'} className="large_menu" onClick={largeRoomClick}>객실 종류<span>ACCOMMODATION</span></Link>
            </li>
            <li>
              <Link to={'/'} className="large_menu" onClick={largeDiningClick}>식사<span>DINING</span></Link>
            </li>
            <li>
              <Link to={'/'} className="large_menu" onClick={largeEventClick}>웨딩&이벤트<span>WEDDING&EVENT</span></Link>
            </li>
          </ul>
          <ul className="small_menu_area">
            <li>
              <ul className={hotelOpen? "small_menu_list small_menu_list_on":"small_menu_list"} id="small_hotel">
                <li>
                  <Link to={'/'} className="small_menu">호텔 전경<span>HOTEL OVERVIEW</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">주요 시설<span>FACT SHEET</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">위치<span>LOCATION</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">네스트 비하인드<span>NEST BEHIND</span></Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className={promoOpen? "small_menu_list small_menu_list_on":"small_menu_list"} id="small_promo">
                <li>
                  <Link to={'/'} className="small_menu">패키지<span>PACKAGES</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">다이닝 이벤트<span>DINING EVENT</span></Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className={roomOpen? "small_menu_list small_menu_list_on":"small_menu_list"} id="small_room">
                <li>
                  <Link to={'/'} className="small_menu">스탠다드<span>STANDRAD</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">디럭스<span>DELUXE</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">스튜디오 스위트<span>STUDIO SUITE</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">리드 스위트<span>REED SUITE</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">파티오 스위트<span>PATIO SUITE</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">파노라마 스위트<span>PANORAMA SUITE</span></Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className={diningOpen? "small_menu_list small_menu_list_on":"small_menu_list"} id="small_dining">
                <li>
                  <Link to={'/'} className="small_menu">플라츠<span>PLATZ</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">쿤스트 라운지<span>KUNST LOUNGE</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">루프트 더 바<span>LUFT THE BAR</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">룸서비스<span>ROOM SERVICE</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">조식<span>BREAKFAST</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">네스트 델리<span>NEST DELI</span></Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className={eventOpen? "small_menu_list small_menu_list_on":"small_menu_list"} id="small_event">
                <li>
                  <Link to={'/'} className="small_menu">바움 홀<span>BAUM HALL</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">스테인 홀<span>STEIN HALL</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">가든<span>GARDEN</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">웨딩<span>WEDDING</span></Link>
                </li>
                <li>
                  <Link to={'/'} className="small_menu">첫 돌<span>THE FIRST BIRTHDAY</span></Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="other_menu_list">
            <li>
              <Link to={'/'} className="other_menu">문의하기</Link>
            </li>
            <li>
              <Link to={'/'} className="other_menu">고객의 소리</Link>
            </li>
            <li>
              <Link to={'/'} className="other_menu">분실물 찾기</Link>
            </li>
          </ul>
          <div className="contact_us">
            <p className="contact_us_title">CONTACT US</p>
            <ul className="contact_us_list">
              <li>
                <p className="contact_where">대표전화</p>
                <Link to={'/'} className="contact_number">032 123 01234</Link>
              </li>
              <li>
                <p className="contact_where">팩스</p>
                <Link to={'/'} className="contact_number">032 123 01234</Link>
              </li>
              <li>
                <p className="contact_where">플라츠 (레스토랑)</p>
                <Link to={'/'} className="contact_number">032 123 01234</Link>
              </li>
              <li>
                <p className="contact_where">쿤스트라운지 (바)</p>
                <Link to={'/'} className="contact_number">032 123 01234</Link>
              </li>
              <li>
                <p className="contact_where">디오디토리움 (연회/미팅)</p>
                <Link to={'/'} className="contact_number">032 123 01234</Link>
              </li>
              <li>
                <p className="contact_where">인피니티풀 스트란트 (수영장)</p>
                <Link to={'/'} className="contact_number">032 123 01234</Link>
              </li>
            </ul>
          </div>
        </div>
      :``}
      <div className="welcome_container">
        <h2 className="welcome_en">Your Own Hideout</h2>
        <p className="welcome_ko">당신만의 은신처, 네스트 호텔</p>
        <div className="count_container">
          <div className="count_choice_box count_room">
            <div className="count_line">
              <p className="count_title">성인</p>
              <div id="result_adult" className="result_number">0</div>
              <div className="count_button_container">
                <input type="button" value="" className="count_button minus_button" />
                <input type="button" value="" className="count_button plus_button" />
              </div>
            </div>
            <p className="count_guide">* 20세 이상</p>
            <div className="count_line">
              <p className="count_title">청소년</p>
              <div id="result_student" className="result_number">0</div>
              <div className="count_button_container">
                <input type="button" value="" className="count_button minus_button" />
                <input type="button" value="" className="count_button plus_button" />
              </div>
            </div>
            <p className="count_guide">* 14 ~ 19세 (중 + 고등학생)</p>
            <div className="count_line">
              <p className="count_title">어린이</p>
              <div id="result_kids" className="result_number">0</div>
              <div className="count_button_container">
                <input type="button" value="" className="count_button minus_button" />
                <input type="button" value="" className="count_button plus_button" />
              </div>
            </div>
            <p className="count_guide">* 0 ~ 13세 (영아 + 유아 + 초등학생)</p>
            <p className="more_guide">다객실 예약 문의 032-743-9000</p>
          </div>
          <div className="count_choice_box count_restaurant">
            <div className="count_line">
              <p className="count_title">성인</p>
              <div id="result_adult_rst" className="result_number">0</div>
              <div className="count_button_container">
                <input type="button" value="" className="count_button minus_button" />
                <input type="button" value="" className="count_button plus_button" />
              </div>
            </div>
            <p className="count_guide">* 18세 이상 성인 인원 수로 적용됩니다</p>
            <div className="count_line">
              <p className="count_title">어린이</p>
              <div id="result_student_rst" className="result_number">0</div>
              <div className="count_button_container">
                <input type="button" value="" className="count_button minus_button" />
                <input type="button" value="" className="count_button plus_button" />
              </div>
            </div>
            <p className="count_guide">* 초등학교 1학년 ~ 6학년</p>
            <div className="count_line">
              <p className="count_title">미취학 어린이</p>
              <div id="result_kids_rst" className="result_number">0</div>
              <div className="count_button_container">
                <input type="button" value="" className="count_button minus_button" />
                <input type="button" value="" className="count_button plus_button" />
              </div>
            </div>
            <p className="count_guide">* 48 개월 ~ 초등학교 입학 전</p>
            <div className="count_line">
              <p className="count_title">영유아</p>
              <div id="result_baby_rst" className="result_number">0</div>
              <div className="count_button_container">
                <input type="button" value="" className="count_button minus_button" />
                <input type="button" value="" className="count_button plus_button" />
              </div>
            </div>
            <p className="count_guide">* 0 ~ 47 개월 이하</p>
          </div>
        </div>
        <div className="reserv_bar">
          <select id="reserv_type">
            <option value="rvRoom">객실 예약</option>
            <option value="rvRstr">레스토랑 예약</option>
            <option value="rvRsvc">룸서비스 예약</option>
          </select>
          <div className="reserv_box">
            <div className="reserv_room reserv_box_item reserv_box_on">
              <div className="room_date">
                <p className="check_type">체크인/아웃</p>
                <input type="button" name="daterange" value="" className="check_date" id="check_room_date" />
                <span className="vertical_line"></span>
              </div>
              <div className="room_people count_people">
                <p className="check_type">성인</p>
                <p id="result_adult_final" className="check_result">0</p>
                <p className="check_type">청소년</p>
                <p id="result_student_final" className="check_result">0</p>
                <p className="check_type">어린이</p>
                <p id="result_kids_final" className="check_result">0</p>
              </div>
            </div>
            <Link to={'/'} className="reserv_dining reserv_box_item">
              <div className="dining_date">
                <p className="check_type">이용 일자</p>
                <input type="button" name="daterange" value="" className="check_date" id="check_dining_date" />
                <span className="vertical_line"></span>
              </div>
              <div className="dining_people count_people">
                <p className="check_type">성인</p>
                <p id="result_adult_final_rst" className="check_result">0</p>
                <p className="check_type">어린이</p>
                <p id="result_student_final_rst" className="check_result">0</p>
                <p className="check_type">미취학 어린이</p>
                <p id="result_kids_final_rst" className="check_result">0</p>
                <p className="check_type">영유아</p>
                <p id="result_baby_final_rst" className="check_result">0</p>
              </div>
            </Link>
            <Link to={'/'} className="reserv_roomservice reserv_box_item">
              <div className="roomservice_date">
                <p className="check_type">체크인 날짜</p>
                <input type="button" name="daterange" value="" className="check_date" id="check_rservice_date1" />
                <span className="horizontal_line"></span>
                <p className="check_type">서비스 이용 날짜</p>
                <input type="button" name="daterange" value="" className="check_date" id="check_rservice_date2" />
                <p className="check_type">2인 기준 단일 메뉴</p>
              </div>
            </Link>
          </div>
          <button className="reservation_btn">예약하기</button>
        </div>
      </div>
      <div className="scroll_down"></div>
      <div className="scroll_top"></div>
    </section>
  )
}

export default Main;