import React from 'react';
import './introduction.css';
import front3 from './images/front3.png'
import meeting from './images/meeting.png'
import lion from './images/likelion.jpg'

function InFuture() {
  return (
    <div className="tab">
      <div className="project-info future" data-text="03">
        <h3>03: <br />In The Future...</h3>
        <img className="lion" src={lion} alt="" />
        <li><b>지원동기</b></li>
        <p>
          학교에서 배우는 전공 과목만으로는 실전적인 웹 개발 경험을 충분히 쌓기 어려움을 느꼈습니다. 팀프로젝트를 경험하면서 팀을 이루어 프로젝트를 만들어보는 것이 도움이 많이 된다고 느꼈고, 이로 인해 혼자서 공부하는 것보다는 마음이 맞는 사람들과 함께 프로젝트를 진행하고 싶은 생각이 커졌습니다. 멋쟁이사자처럼 동아리에서의 활동은 저의 마음을 충족시켜줄 수 있다고 생각하여 지원하게 되었습니다.
          <br /><br />
          실제 현업에서 요구되는 기술과 역량을 향상시키기 위해서는 협업과 프로젝트 경험이 필수적입니다. 그렇기에 함께하는 동료들과의 협업을 통해 프로젝트를 계획하고 실행하는 과정에서 생길 수 있는 다양한 문제를 해결하고 성장하는 기회를 갖고 싶습니다.
          <br /><br />
          따라서, 멋쟁이사자처럼과 같은 동아리에 참여하여 함께 성장하는 공동체의 일원으로서 최선을 다해 노력하고 싶습니다. 함께하는 동료들과의 협업을 통해 서로의 능력을 발전시키고, 웹 개발 분야에서의 전문성을 더욱 향상시키고 싶습니다.
        </p>
      </div>
      <div className="future-right">
        <div className="goal">
          <h1>Goal <span>in 2024</span></h1>
          <div className="goal-photo">
            <div className="circle-container">
              <div className="circle-image">
                <img src={front3} alt="" />
              </div>
            </div>
            <div className="gcaption">
              <p>프론트엔드<br />역량 향상</p>
            </div>
          </div>
          <div className="goal-photo">
            <div className="circle-container">
              <div className="circle-image">
                <img src={meeting} alt="" />
              </div>
            </div>
            <div className="gcaption">
              <p>다양한 프로젝트 <br />경험 쌓기</p>
            </div>
          </div>
        </div>
        <div className="slogan">
          <p>" 성장하는 개발자가 되고 싶은 김희수입니다 "</p>
        </div>
      </div>
    </div>
  );
}

export default InFuture;
