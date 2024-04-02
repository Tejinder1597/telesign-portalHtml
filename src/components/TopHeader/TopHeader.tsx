import './TopHeader.css';
import React from 'react';

const TopHeader: React.FC = () => {

    const date = new Date();

    return (
        <div className="header-scroll">
            <div className="header-scroll-box">
                <span className="information-header">Hi, Jane 👋🏾</span>
                <span className="information-tag">{date.toDateString()}</span>
            </div>
            <div className="header-scroll-box">
                <span className="information-header">Organization Name</span>
                <span className="information-tag">StreamBatch</span>
            </div>
            <div className="header-scroll-box">
                <span className="information-header">Geolocation</span>
                <span className="information-tag">USA</span>
            </div>
            <div className="header-scroll-box">
                <span className="information-header">Primary Account</span>
                <span className="information-tag">neilk@streamo.inc</span>
            </div>
            <div className="header-scroll-box">
                <span className="information-header">Contact Info</span>
                <a className='information-tag-link' href='https://netflix.com'>StreamBatch</a>
            </div>
            <div className="header-scroll-box">
                <span className="information-header">Status</span>
                <span className="information-tag">Onboarding</span>
            </div>
        </div>
    )
}

export default TopHeader;