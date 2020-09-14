import React from 'react';
import config from '../config';
import content from '../content.json';

export default ({ pageKey, items }) => {
  const {
    title, photo, style, intro,
  } = content[pageKey];

  const sortItems = (a, b) => {
    if (a.datePublished > b.datePublished) return -1;
    if (b.datePublished > a.datePublished) return 1;
    return 0;
  };

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0.1)
          ), url(${photo})`,
          ...(style || {}),
        }}
      >
        <div className="banner-text"><h1>{title}</h1></div>
      </div>
      <div className="content">
        <div className="intro">{intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="items">
          {items.sort(sortItems).map((item) => (
            <a
              key={item.itemId}
              href={escape(`/blog/${item.itemName.replace(/ /g, '_').toLowerCase()}`)}
              className="item"
            >
              <img
                src={`${config.cloudfrontURL}/${item.itemPhotos[0].photoName}`}
                alt={item.itemName}
              />
              <h3>{item.itemName}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
