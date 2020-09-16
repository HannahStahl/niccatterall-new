import React from 'react';
import config from '../config';
import content from '../content.json';

const Footer = () => (
  <div className="footer">
    <div className="affiliates">
      {content.affiliates.map(({ image, alt, href }) => (
        <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
          <img src={`${config.photosCloudfrontURL}/affiliates/${image}`} alt={alt} />
        </a>
      ))}
    </div>
    <p>
      {`© ${config.businessName}, ${(new Date()).getFullYear()}. All Rights Reserved.`}
    </p>
    <a href="https://websitesbyhannah.com" target="_blank" rel="noopener noreferrer">
      <p>Websites By Hannah</p>
    </a>
  </div>
);

export default Footer;
