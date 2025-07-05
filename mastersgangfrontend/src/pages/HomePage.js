import React from 'react';
import './Homepage.css'; 

const HomePage = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to MastersGang Forum</h1>
        <p>Connect. Learn. Collaborate.</p>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <h2>👨‍🎓 For Students</h2>
          <ul>
            <li>Ask and solve doubts</li>
            <li>Join discussion forums</li>
            <li>Access learning resources</li>
          </ul>
        </div>
        <div className="feature-card">
          <h2>👩‍🏫 For Teachers</h2>
          <ul>
            <li>Answer questions</li>
            <li>Share study material</li>
            <li>Guide student learning</li>
          </ul>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="discussions">
        <h2>📢 Recent Discussions</h2>
        <div className="discussion-item">💬 How to prepare for exams?</div>
        <div className="discussion-item">💬 Tips for improving writing skills</div>
        <div className="discussion-item">💬 Best YouTube channels for math?</div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 MastersGang Forum. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
