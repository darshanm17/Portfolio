// LeetCodeProfile.js
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-parallax';
import './LeetCodeProfile.css';

const LeetCodeProfile = () => {
  return (
    <div>
 
  <h1>MY CODING JOURNY</h1>
      <Parallax strength={200}>
        <div style={{ height: '500%', width:'100%' }} className='cont'>
          <div className="content">
            <div className="profile-container">
              <img src="/Images/logos/leetcode.png" alt="Profile" className="profile-image" />
              <div className="profile-info">
                <h2>Username: <span>darshanm17</span></h2>
              
                <a href="https://leetcode.com/darshanm17" target="_blank" rel="noopener noreferrer" className="profile-link">View My LeetCode Profile</a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="profile-container">
              <img src="/Images/logos/hacker.png" alt="Profile" className="profile-image" />
              <div className="profile-info">
                <h2>Username: <span>Darshan M (DM)</span></h2>
                <a href="https://www.hackerrank.com/profile/darshanmrd17" target="_blank" rel="noopener noreferrer" className="profile-link">View My Hacker-Rank Profile</a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="profile-container">
              <img src="/Images/logos/github.png" alt="Profile" className="profile-image" />
              <div className="profile-info">
                <h2>Username: <span>DARSHAN_M_RD</span></h2>
                <a href="https://github.com/darshanm17" target="_blank" rel="noopener noreferrer" className="profile-link">View My Git-Hub Profile</a>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

    </div>
  );
};

export default LeetCodeProfile;
