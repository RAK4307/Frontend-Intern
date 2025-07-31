import React from 'react';
import './DoNotSell.css';

const DoNotSell = () => {
  return (
    <div className="donotsell-container">
      <div className="donotsell-content">
        <h1>Do Not Sell or Share My Personal Information</h1>
        <p className="donotsell-intro">
          Under the California Consumer Privacy Act (CCPA) and other privacy laws, you have the right to opt out of the "sale" or "sharing" of your personal information. JS Infotech Pvt. Ltd. is committed to protecting your privacy and providing you with control over your personal data.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to direct us not to sell or share your personal information. "Selling" and "sharing" are defined broadly under these laws and may include activities like allowing third parties to receive certain information, such as cookies, to deliver personalized advertising on our services or other services.
        </p>

        <h2>How to Opt-Out</h2>
        <p>
          To exercise your right to opt-out of the sale or sharing of your personal information, please contact us directly. You can submit your request via email. Please provide sufficient information to allow us to reasonably verify you are the person about whom we collected personal information.
        </p>
        <p>
          Email: <a href="mailto:privacy@jsinfotech.co">privacy@jsinfotech.co</a>
        </p>

        <p className="donotsell-footer">
          Once you make an opt-out request, we will wait at least twelve (12) months before asking you to reauthorize personal information sales or sharing.
        </p>
      </div>
    </div>
  );
};

export default DoNotSell;