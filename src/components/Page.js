import React from 'react';
import config from '../config';
import content from '../content.json';

export default ({ pageKey, Items }) => {
  const {
    title, photo, style, intro,
  } = content[pageKey];

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
        <div className="banner-text"><h1>{title}</h1></div>
      </div>
      <div className="content">
        <div className="intro">{intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        {Items}
      </div>
    </div>
  );
};
