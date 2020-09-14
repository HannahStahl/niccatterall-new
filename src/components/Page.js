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
      <div className="banner" style={{ backgroundImage: `url(${photo})`, ...(style || {}) }}>
        <div className="banner-text"><h1>{title}</h1></div>
      </div>
      <div className="content">
        <p className="intro">{intro}</p>
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
