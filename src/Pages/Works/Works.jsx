import React from 'react';
import './Works.css';
import railwayImg1 from '../../assets/homes/train.jpg';
import railwayImg2 from '../../assets/services/cloud-main.jpg';
import exportImg from '../../assets/services/export.jpg';
import railwayVideo from '../../assets/services/train.mp4';


const project = {
  client: 'Indian Railways',
  title: 'Smart Real-Time Gate Position Monitoring & Auto PN Generation System',
  mainImage: railwayImg1,
  mainVideo: railwayVideo,
  galleryImage: railwayImg2,
  challenge: `At non-interlocked level crossing gates in Indian Railways, several incidents have occurred where gates were found open despite an approaching train. This recurring issue poses a critical safety risk for both railway operations and public commuters. The primary reason is miscommunication between the gatekeeper and the station master, as no automated system exists to ensure the gate is securely closed before the Passing Note (PN) is exchanged.`,
  solution: `To address this safety concern, JS Infotech developed an innovative, cloud-based solution. Our system automatically detects and updates the real-time status of the gate (open or closed) without relying on manual intervention. The station master receives instant updates, ensuring the gate is confirmed closed before a train is dispatched. This automated verification introduces a double layer of assurance, significantly reducing human error and enhancing operational safety.`,
  benefits: [
    'Significantly enhances safety by providing definitive, automatic assurance that the gate is physically closed and locked before a train can be dispatched, preventing catastrophic accidents.',
    'Removes the risk of human error by replacing manual, verbal communication with a reliable, automated status feed, ensuring the station master has accurate, real-time data.',
    'Creates a closed-loop, tamper-proof verification process where the Private Number (PN) required for train dispatch is only generated after the system confirms the gate is physically secured.',
    'Introduces a new, higher standard of safety and operational protocol for non-interlocked level crossings, leveraging modern cloud technology to solve a critical, long-standing infrastructure challenge.',
  ],
};

const Works = () => {
  return (
    <div className="works-page">
      <header className="works-header">
        <div className="works-header-content">
          <h1>Our Core Services</h1>
          <p>
            We deliver integrated solutions across electrical engineering, industrial automation, and IT to power your business's growth and efficiency.
          </p>
        </div>
      </header>


      <section className="train-section" id="case-study-indian-railways">
      <div className="works-layout">
        <h2 className="case-study-title">Case Study: Indian Railways Project</h2>
      {/* Top Section */}
      <div className="works-top" id="case-study-indian-railways">
        
        <video
          src={project.mainVideo}
          poster={project.mainImage}
          className="main-img"
          controls
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="works-info">
          <h2 className="client">{project.client}</h2>
          <h3 className="project-title">{project.title}</h3>
          <div className="section">            
            <p>{project.challenge}</p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="works-middle">
        <div className="solution">
          <h4>Proposed Solution</h4>
          <p>{project.solution}</p>
        </div>
        <img src={project.galleryImage} alt="Solution Visual" className="side-img" />
      </div>

      {/* Bottom Section */}
      <div className="works-bottom">
        <h4>Key Benefits & Impact</h4>
        <ul>
          {project.benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
    </section>

      <section className="trading-section" id="global-sourcing">
        <img src={exportImg} alt="Global sourcing and exports" className="trading-banner-img" />
        <h2 className="trading-title">Global Product Trading & Sourcing</h2>
        <p className="trading-intro">
          JS INFOTECH PVT LTD is a globally recognized supplier and trader of high-quality electrical and electronic components. With a vast network that spans across 195+ countries, we specialize in procurement, sourcing, and distribution of mission-critical products required for a wide range of industrial and engineering applications.
        </p>
        <p className="trading-intro">
          Whether you're an OEM, system integrator, or a service provider, we ensure timely delivery of certified components that power your innovation and operations.
        </p>

        <div className="trading-grid">
          <div className="trading-column">
            <h3>🔄 What We Trade</h3>
            <p>We deal in a wide variety of components and systems, including:</p>
            <ul className="trading-list">
              <li>🔹 High-Tension (HT) and Low-Tension (LT) Panels</li>
              <li>🔹 Power Transformers & Distribution Boards</li>
              <li>🔹 Switchgears, MCCs, PCCs, and Bus Ducts</li>
              <li>🔹 PLC, SCADA, HMI-based Automation Products</li>
              <li>🔹 Control Panels and Custom-Built Panels</li>
              <li>🔹 Wires, Cables, and Power Accessories</li>
              <li>🔹 Electrical Measuring Instruments</li>
              <li>🔹 Imported Spares and OEM Components</li>
            </ul>
          </div>
          <div className="trading-column">
            <h3>🌐 Global Reach, Local Expertise</h3>
            <p>Through strong collaborations with manufacturers, OEMs, and logistics networks worldwide, we offer:</p>
            <ul className="trading-list">
              <li>✅ End-to-end component sourcing</li>
              <li>✅ Competitive pricing for bulk and project orders</li>
              <li>✅ Genuine, high-performance components</li>
              <li>✅ Custom procurement solutions based on industry needs</li>
            </ul>
          </div>
        </div>

        <div className="trading-why-us">
          <h3>🏆 Why Choose Us for Product Trading?</h3>
          <ul className="why-us-pills">
            <li>✔ ISO-Certified Operations</li>
            <li>✔ Global Component Access</li>
            <li>✔ Skilled Technical Evaluation</li>
            <li>✔ On-Time International Deliveries</li>
            <li>✔ Transparent, Trackable Procurement</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default Works;