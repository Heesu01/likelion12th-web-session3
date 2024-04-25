import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Capacity from './Capacity';
import InTheFuture from './InTheFuture';
import './introduction.css';

function Tab() {
    const [activeTab, setActiveTab] = useState('aboutMe'); // 기본적으로 보여줄 탭 설정

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="tabs">
            {activeTab === 'aboutMe' && <AboutMe />}
            {activeTab === 'capacity' && <Capacity />}
            {activeTab === 'future' && <InTheFuture />}
            <div className="btn">
                <label onClick={() => handleTabChange('aboutMe')} htmlFor="tab1"></label>
                <label onClick={() => handleTabChange('capacity')} htmlFor="tab2"></label>
                <label onClick={() => handleTabChange('future')} htmlFor="tab3"></label>
            </div>
        </div>
    );
}

export default Tab;
