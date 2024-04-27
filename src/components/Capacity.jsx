import React from 'react';
import './introduction.css';
import study from './images/study.png'

function Capacity() {
  return (
    <div className="tab">
      <div className="project-info" data-text="02">
        <h3>02: <br />Capacity</h3>
        <div className="language">
          <li><b>사용가능언어</b></li>
          <p>python, C, java <br /> html, css, javascript</p>
        </div>
        <div className="project-li">
          <li><b>데이터분석 프로젝트</b></li>
          <p>서울시 인구데이터를 활용한 노인복지시설 입지 선정</p>
          <a className="view-project" href="project1.html" target="_blank">project01 </a>
          <li><b>캡스톤디자인1 프로젝트</b></li>
          <p>소상공인 업체들을 소개하는 웹 제작</p>
          <a className="view-project" href="project2.html" target="_blank">project02</a>
        </div>
      </div>
      <div className="right-photo">
        <img src={study} alt="" />
      </div>
    </div>
  );
}

export default Capacity;