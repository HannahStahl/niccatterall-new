import React from 'react';
import Button from './Button';
import config from '../config';
import content from '../content.json';

export default ({ pageKey, Items }) => {
  const {
    title, photo, style, intro, cta
  } = content[pageKey];
  const homePage = window.location.pathname === '/';

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: window.location.pathname === '/' ? `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.1)
          ), url(${config.photosCloudfrontURL}/${photo})` : `url(${config.photosCloudfrontURL}/${photo})`,
          ...(style || {}),
        }}
      >
        <div className="banner-text">
          <h1>{title}</h1>
          {cta && <Button {...cta} />}
        </div>
      </div>
      <div className={homePage ? undefined : "content"}>
        <div className={`intro ${homePage ? " padded-intro" : ""}`}>
          {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {Items}
      </div>
    </div>
  );
};
