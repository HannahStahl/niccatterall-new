import React from 'react';
import content from '../content.json';
import Button from './Button';
import config from '../config';

const { title, intro, cta } = content.home;

export default () => (
  <div>
    <div className="banner home-banner">
      <div className="banner-text">
        <h1>{title}</h1>
        <Button text={cta.text} href={cta.href} />
      </div>
    </div>
    <div>
      <div className="intro home-intro">
        {intro.map(({ image, header, text }) => (
          <div key={header} className="home-intro-section">
            <img src={`${config.photosCloudfrontURL}/${image}`} alt={header} />
            <h3>{header}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
