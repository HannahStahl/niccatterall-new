import React from 'react';
import { Parallax } from 'react-parallax';
import Button from './Button';
import config from '../config';
import content from '../content.json';

export default ({ pageKey, Items }) => {
  const {
    title, photo, className, intro, cta, style
  } = content[pageKey];

  return (
    <div>
      <Parallax
        bgImage={`${config.photosCloudfrontURL}/${photo}`}
        bgImageStyle={{
          objectFit: 'cover',
          objectPosition: 'top left',
          width: '100vw',
          height: '100%',
          top: 225,
          ...style,
        }}
        bgImageAlt="Training Programs"
        strength={500}
        className={`banner${className ? ` ${className}` : ''}`}
      >
        <div className="banner-text">
          <h1>{title}</h1>
          {cta && <Button {...cta} />}
        </div>
      </Parallax>
      <div className="content fade-in">
        <div className="intro">
          {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {Items || <></>}
      </div>
    </div>
  );
};
