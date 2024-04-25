import React from 'react';
import './introduction.css';
import img1 from './images/24.jpg'
import trip from './images/trip.jpg'
import picture from './images/picture.jpg'
import festival from './images/festival.jpg'
import cafe from './images/cafe.jpg'
import dog from './images/dog.jpg'
import choco from './images/choco.jpg'
import positive from './images/positive.png'
import fire from './images/fire.png'
import runner from './images/runner.png'

function AboutMe() {
  return (
    <div className="tab">
      <div className="project-info" data-text="01">
        <h3>01:<br />About Me</h3>
        <div className="myphoto">
          <img className="img1" src={img1} alt="" />
        </div>
        <ul>
          <li><b>이름</b> : 김희수</li>
          <li><b>생년월일</b> : 2001.04.13</li>
          <li><b>학력</b> : 명지대학교 정보통신공학과 4학년</li>
          <li><b>전화번호</b> : 010-9873-0692</li>
          <li><b>이메일</b> : rulru0413@naver.com</li>
        </ul>
        <div className="sns">
          <p><b>SNS</b></p>
          <a href="https://www.instagram.com/heesu01/">인스타</a>
          <a href="https://blog.naver.com/rulru0692">블로그</a>
          <a href="https://github.com/Heesu01">깃허브</a>
        </div>
      </div>
      <div className="project-right">
        <h1>-----FAVORITE-----</h1>
        <div className="gallery">
          <div className="photome">
            <img src={trip} alt="" />
            <div className="caption">여행</div>
          </div>
          <div className="photome">
            <img src={picture} alt="" />
            <div className="caption">사진촬영</div>
          </div>
          <div className="photome">
            <img src={festival} alt="" />
            <div className="caption">페스티벌</div>
          </div>
          <div className="photome">
            <img src={cafe} alt="" />
            <div className="caption">카공</div>
          </div>
          <div className="photome">
            <img src={dog} alt="" />
            <div className="caption">귀여운 생명체</div>
          </div>
          <div className="photome">
            <img src={choco} alt="" />
            <div className="caption">군것질</div>
          </div>
        </div>
        <div className="detail">
          <h1>-----PERSONALITY-----</h1>
          <div>
            <img src={positive} alt="" />
            <span>긍정</span>
            <p>항상 긍정적인 태도</p>
          </div>
          <div>
            <img src={fire} alt="" />
            <span>열정</span>
            <p>주어진 일에 열정적으로 몰두</p>
          </div>
          <div>
            <img src={runner} alt="" />
            <span>성실</span>
            <p>맡은 일에 끝까지 책임감 있게 수행</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
