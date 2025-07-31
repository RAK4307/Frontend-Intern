import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms and Conditions</h1>
        <p className="terms-intro">
          Welcome to JS Infotech Pvt. Ltd. These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full.
        </p>

        <h2>1. Intellectual Property Rights</h2>
        <p>
          Other than the content you own, under these Terms, JS Infotech Pvt. Ltd. and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website. You must not republish, sell, rent, or sub-license material from the website.
        </p>

        <h2>2. Disclaimer</h2>
        <p>
          Our services and all information on the website are provided "as is" without any express or implied warranty of any kind. While we strive for accuracy, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the website or the information, products, or services contained on the website for any purpose.
        </p>

        <p className="terms-footer">
          This is a summary of our terms. For full details regarding liability, user conduct, and governing law, please consult the complete Terms of Service documentation or contact our legal department.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;