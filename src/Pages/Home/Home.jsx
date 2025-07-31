import React, { useState, useEffect } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import homebg from '../../assets/homes/train.jpg'
import homebg2 from '../../assets/homes/cloud.jpg'
import homebg3 from '../../assets/homes/export.jpg'
import service1 from '../../assets/homes/indian-railway.jpg'
import service2 from '../../assets/services/cloud2.jpg'
import service3 from '../../assets/homes/exports.jpg'
import profile from '../../assets/profile.jpg'
import cmp1 from '../../assets/cmp-1.png'
import cmp2 from '../../assets/cmp-2.png'
import cmp3 from '../../assets/cmp-3.png'

const slidesData = [
  {
    img: homebg,
    title: 'Pioneering Safety in Industrial Automation',
    desc: 'Developing award-winning solutions, like our real-time monitoring system for Indian Railways, to enhance operational safety and efficiency.',
    link: '/works',
    ctaText: 'View Case Study',
  },
  {
    img: homebg2,
    title: 'Future-Ready Cloud & IT Infrastructure',
    desc: 'From custom cloud applications to comprehensive data center management, we build the robust IT backbone your business needs to scale.',
    link: '/works',
    ctaText: 'See Our Work',
  },
  {
    img: homebg3,
    title: 'Excellence in Global Product Sourcing',
    desc: 'We provide end-to-end procurement and supply of high-quality electrical components for industrial projects worldwide.',
    link: '/products',
    ctaText: 'Explore Our Products',
  },
];



const servicesData = [
  {
   name: 'Electrical Engineering',
  desc: 'Global sourcing and supply of high-quality electrical components for industrial and commercial projects.',
  details: 'We provide end-to-end procurement for HT/LT panels, power transformers, switchgears, and custom control panels, ensuring quality and timely delivery.',
  bg: service3, // Using exports.jpg
  link: '/products',
  ctaText: 'View Products',
  },
  {
    name: 'IT & Cloud Services',
    desc: 'Developing and deploying robust, scalable cloud applications and IT infrastructure.',
    details: 'From IoT-based monitoring systems, like our award-winning solution for Indian Railways, to complete data center management, we deliver future-ready IT services.',    
    bg: service2, // Using cloud2.jpg
    link: '/works',
    ctaText: 'See Our Work',
  },
  {
    name: 'Industrial Automation',
    desc: 'Designing and implementing intelligent automation systems to enhance safety and efficiency.',
    details: "Our expertise includes PLC, SCADA, and HMI-based solutions, such as our 'Auto PN Generation System' that eliminates human error in critical railway operations.",
    bg: service1, // Using indian-railway.jpg
    link: '/works',
    ctaText: 'View Case Study',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 4000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slider-wrapper" style={{ transform: `translateX(-${currentSlide * (100 / slidesData.length)}%)` }}>
          {slidesData.map((slide, index) => (
            <div
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              key={index}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="hero-content">
                <h1 className="hero-slogan">{slide.title}</h1>
                <p className="hero-desc">{slide.desc}</p>

                <button className="hero-cta" onClick={() => navigate(slide.link)}>
                  {slide.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-dots">
          {slidesData.map((_, index) => (
            <div key={index} className={`dot ${currentSlide === index ? 'active' : ''}`} onClick={() => setCurrentSlide(index)} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-images">
          <img src={profile} alt="About JS Infotech" />
          <p>CEO & Founder</p>
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            JS Infotech Pvt. Ltd., established in 2014, is a technology-driven company delivering expert solutions
            in software development, industrial automation, and IT infrastructure. With over 30 years of industry 
            experience in LV switchgear systems (Siemens & ABB) and 21+ man-years in cloud and data center technologies, 
            we offer standards-compliant, reliable solutions backed by deep domain expertise and global delivery excellence.
          </p>
          <div className="about-achievements-main">
            <h4>Key Milestones & Recognition</h4>
            <ul>
              <li><strong>Govt. of India Recognition:</strong> Recognized by the Ministry of Commerce & Industry for innovative safety solutions for Indian Railways.</li>
              <li><strong>UL Certified Quality:</strong> Successfully completed IP66 enclosure testing (IEC-60529) from UL India for a key client in the Middle East.</li>
              <li><strong>Proven Track Record:</strong> Over 100+ successful projects delivered to a growing global clientele.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Collaboration Companies */}
      <section className="home-collaborations">
        <h3>Our Collaboration Partners</h3>
        <br />
        <br />
        <br />
        <div className="home-collaborations__logos">
          <div 
            className="home-collaborations__track"
            style={{width: '150%', minWidth: '150%'}}
          >
            <img src={cmp1} alt="Company 1" />
            <img src={cmp2} alt="Company 2" />
            <img src={cmp3} alt="Company 3" />           
            {/* Duplicate for seamless loop */}
            <img src={cmp1} alt="Company 1" />            
            <img src={cmp2} alt="Company 2" />
            <img src={cmp3} alt="Company 3" />
            <img src={cmp1} alt="Company 1" />
            <img src={cmp2} alt="Company 2" />
            <img src={cmp3} alt="Company 3" />
                             
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="services-title">Our Services</h2>
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div className={`service-item ${index % 2 !== 0 ? 'reversed' : ''}`} key={service.name}>
              <div className="service-image">
                <img src={service.bg} alt={service.name} />
              </div>
              <div className="service-content">
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <p className="service-details">{service.details}</p>
                <button className="service-cta" onClick={() => navigate(service.link)}>
                  {service.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home