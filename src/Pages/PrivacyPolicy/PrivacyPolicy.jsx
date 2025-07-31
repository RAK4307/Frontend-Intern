import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p className="privacy-intro">
          Your privacy is important to us. It is JS Infotech Pvt. Ltd.'s policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. We may collect information like your name, email address, and contact details when you use our contact forms or subscribe to our newsletter.
        </p>

        <h2>2. Use of Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users. We do not share any personally identifying information publicly or with third-parties, except when required to by law.
        </p>

        <p className="privacy-footer">
          Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;