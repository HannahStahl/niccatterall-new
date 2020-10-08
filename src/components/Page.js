import React from 'react';
import Button from './Button';
import config from '../config';
import content from '../content.json';

export default ({ pageKey, Items }) => {
  const {
    title, photo, style, intro, cta,
  } = content[pageKey];

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.4)
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
