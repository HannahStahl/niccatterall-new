import React from 'react';
import config from '../config';
import content from '../content.json';

export default ({ pageKey, items }) => {
  const { title, intro } = content[pageKey];
  return (
    <div>
      <div className="banner" style={{ backgroundImage: 'url(home.jpg)' }}>
        <div className="banner-text"><h1>{title}</h1></div>
      </div>
      <div className="content">
        <p className="intro">{intro}</p>
        <div className="items">
          {items.map((item) => (
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
