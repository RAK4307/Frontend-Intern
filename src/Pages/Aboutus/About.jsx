import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.jpg'
import cmp1 from '../../assets/clients/cargill.png'
import cmp2 from '../../assets/clients/chint.png'
import cmp3 from '../../assets/clients/green.png'
import cmp4 from '../../assets/clients/hatsun.png'
import cmp5 from '../../assets/clients/kof.png'
import cmp6 from '../../assets/clients/rkm.png'
import cmp7 from '../../assets/clients/vhpl.png'
import cmp8 from '../../assets/clients/syn.png'
import Img from '../../assets/img.jpg'
const ElectricalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="expertise-icon"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const AutomationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="expertise-icon"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2-2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="expertise-icon"><path d="M18 10h-1.26A8 8 0 1 0 4 16.25"></path><path d="M8 16h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H8z"></path></svg>
);

const WhyUsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a5298" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="why-us-icon">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

const AchievementIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="achievement-icon">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 22 12 17 17 22 15.79 13.88"></polyline>
    </svg>
);

const About = () => {
  return (
    <div className="about-us-page">
      <header className="about-header">
        <div className="about-header-content">
          <h1>Customer satisfaction is our growth strategy</h1>
          <p>
            Since 2014, JS Infotech has been a technology-driven partner, delivering expert solutions in software development, industrial automation, and IT infrastructure.
          </p>
        </div>
      </header>

      <section className="about-section">
        <div className="about-container">
          {/* Image + Badges */}
          <div className="about-image">
            <img src={aboutImg} alt="JS Infotech Team" />
            <div className="about-stats-overlay">
              <div className="stat-box">
                <h4>50+</h4>
                <p>Expert Team Members</p>
              </div>
              <div className="stat-box">
                <h4>150+</h4>
                <p>Projects Delivered</p>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="about-content">
            <p className="section-label">About Us</p>
              <h2 className="about-heading">
                Trusted Tech Experts <br /> With Proven Experience
              </h2>            
            <p className="about-desc">JS INFOTECH PVT LTD is a Bangalore-based engineering and IT solutions company, established in 2014 with a strong vision to deliver reliable, high-quality, and cost-effective services to clients across India and abroad. With decades of combined experience in electrical system design, project execution, and smart IT infrastructure</p>

            <div className="about-subsection">
              <h4>Our Vision</h4>
              <p>To be a global partner for future-ready technology across industries.</p>
            </div>
            <div className="about-subsection">
              <h4>Our Mission</h4>
              <p>To deliver innovative and reliable IT & automation solutions that drive client success.</p>
            </div>
        </div>
        </div>
      </section>
      
      <section className="why-choose-section">
      <div className="why-choose-container">
        {/* Left Side */}
        <div className="why-choose-content">
          <p className="section-label"> 🔵 WHY CHOOSE US</p>
          <h2 className="section-heading">
            We're the Best Choice for Your<br />Technology Needs
          </h2>
          <p className="section-desc">
            At JS Infotech, we understand the value of technology in your business, and we're committed
            to delivering reliable, scalable, and future-ready solutions. Here's why clients choose us:
          </p>
          <div className="why-us-grid">
          <div className="why-us-item">
            <WhyUsIcon />
            <div className="why-us-text">
              <h4>Proven Expertise</h4>
              <p>Decades of combined experience in both electrical and IT sectors.</p>
            </div>
          </div>
          <div className="why-us-item">
            <WhyUsIcon />
            <div className="why-us-text">
              <h4>Quality Assurance</h4>
              <p>A commitment to the highest standards of quality and service in every project.</p>
            </div>
          </div>
          <div className="why-us-item">
            <WhyUsIcon />
            <div className="why-us-text">
              <h4>Timely Delivery</h4>
              <p>A focus on versatile and timely execution to meet your deadlines.</p>
            </div>
          </div>          
          </div>                
        </div>

        {/* Right Side Image */}
        <div className="why-choose-image">
          <img src={Img} alt="Why Choose Us" />
          <div className="why-us-item img-under">
            <WhyUsIcon />
            <div className="why-us-text">
              <h4>Customer-Centric</h4>
              <p>A transparent and focused approach built on trust and long-term relationships.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-collaborations">
        <h3>Our Clients</h3>
        <p className="home-collaborations__subtitle">Trusted by leading companies across industries</p>
        <div className="home-collaborations__logos">
          {/* Track for scrolling effect */}
          <div 
            className="home-collaborations__track"
            style={{width: '150%', minWidth: '150%'}}
          > 
            <img src={cmp1} alt="Company 1" />
            <img src={cmp2} alt="Company 2" />
            <img src={cmp3} alt="Company 3" />           
            <img src={cmp4} alt="Company 4" />
            <img src={cmp5} alt="Company 5" />
            <img src={cmp6} alt="Company 6" />
            <img src={cmp7} alt="Company 7" />
            <img src={cmp8} alt="Company 8" />

             <img src={cmp1} alt="Company 1" />
            <img src={cmp2} alt="Company 2" />
            <img src={cmp3} alt="Company 3" />           
            <img src={cmp4} alt="Company 4" />
            <img src={cmp5} alt="Company 5" />
            <img src={cmp6} alt="Company 6" />
            <img src={cmp7} alt="Company 7" />
            <img src={cmp8} alt="Company 8" />
                             
          </div>
        </div>
      </section>

      <section className="about-achievements">
        <h2>Recognition & Milestones</h2>
        <p className="achievements-subtitle">We are proud of our accomplishments and the trust our partners place in us.</p>
        <div className="achievements-grid">
          <div className="achievement-item">
            <AchievementIcon />
            <div>
              <h4>National Recognition for Innovation</h4>
              <p>Honored by the Government of India's Ministry of Commerce & Industry for developing pioneering safety solutions that are transforming the Indian Railways network.</p>
            </div>
          </div>
          <div className="achievement-item">
            <AchievementIcon />
            <div>
              <h4>Global Quality & Compliance</h4>
              <p>Demonstrated our commitment to international standards by achieving UL certification for IP66 enclosures (IEC-60529), ensuring robust and reliable performance for our clients in the Middle East.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-approach">
        <h2>Our Closed Loop Approach (CLA)</h2>
        <p className="approach-subtitle">A systematic process ensuring quality and success from start to finish.</p>
        <div className="approach-steps">
          <div className="step"><span>1</span> Consulting & Analysis</div>
          <div className="step"><span>2</span> Project Management</div>
          <div className="step"><span>3</span> Implementation</div>
          <div className="step"><span>4</span> Service & Support</div>
        </div>
      </section>
      <section className="about-expertise">
        <h2>Areas of Expertise</h2>
        <div className="expertise-grid">
          <div className="expertise-item">
            <ElectricalIcon />
            <h4>Electrical Engineering & Consultancy</h4>
            <p>Complete turnkey solutions for HT/LT electrical systems, from design and layout planning to supply and installation of PCC, MCC, VCB, Transformers, and more.</p>
          </div>
          <div className="expertise-item">
            <AutomationIcon />
            <h4>Industrial Automation & Control</h4>
            <p>Integration with VFDs, Soft Starters, Intelligent Motor Controllers, and plant-wide control systems (DCS, PLC) to optimize industrial processes.</p>
          </div>
          <div className="expertise-item">
            <CloudIcon />
            <h4>IT & Cloud Services</h4>
            <p>Specialized services in Cloud Computing, Server & Storage Virtualization, and comprehensive IT infrastructure maintenance for modern data centers.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About