import React from 'react';
import config from '../config';

const getPrograms = (items) => (
  items.filter((item) => item.cmsPageConfigId === config.programsConfigId)
);

export default ({ items }) => (
  <div className="items">
    {getPrograms(items).map((program) => (
      <a
        key={program.itemId}
        href={program.itemLink}
        target="_blank"
        rel="noopener noreferrer"
        className="item"
      >
        <img
          src={`${config.cloudfrontURL}/${program.itemPhotos[0].photoName}`}
          alt={program.itemName}
        />
        <div className="blog-preview">
          <h3>{program.itemName}</h3>
          <p>{program.itemDescription}</p>
        </div>
      </a>
    ))}
  </div>
);
