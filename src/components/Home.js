import React from 'react';
import config from '../config';
import content from '../content.json';

export default () => (
  <div className="home-page-previews">
    {content.home.previews.map(({
      text, photo, title, href, cta,
    }, index) => {
      const mobile = window.innerWidth <= 900;
      const leftAligned = index % 2 === 0;
      return (
        <div key={title} className={`home-page-preview ${leftAligned ? 'left-aligned' : 'right-aligned'}`}>
          <div className="home-page-preview-content">
            {(leftAligned || mobile) && <img src={`${config.photosCloudfrontURL}/${photo}`} alt={title} />}
            <div className="home-page-preview-text">
              <h2>{title}</h2>
              <p>{text}</p>
              <a href={href}>
                {cta}
                <i className="fas fa-arrow-right" />
              </a>
            </div>
            {!leftAligned && !mobile && <img src={`${config.photosCloudfrontURL}/${photo}`} alt={title} />}
          </div>
        </div>
      );
    })}
  </div>
);
