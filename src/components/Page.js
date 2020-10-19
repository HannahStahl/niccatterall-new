import React from 'react';
import Button from './Button';
import config from '../config';
import content from '../content.json';

export default ({ pageKey, Items }) => {
  const {
    title, photo, style, className, intro, cta,
  } = content[pageKey];

  return (
    <div>
      <div
        className={`banner${className ? ` ${className}` : ''}`}
        style={{
          backgroundImage: `linear-gradient(
            to ${className === 'right-aligned' ? 'right' : 'left'},
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.6)
          ), url(${config.photosCloudfrontURL}/${photo})`,
          ...(style || {}),
        }}
      >
        <div className="banner-text">
          <h1>{title}</h1>
          {cta && <Button {...cta} />}
        </div>
      </div>
      <div className="content fade-in">
        <div className="intro">
          {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {Items || <></>}
      </div>
    </div>
  );
};
