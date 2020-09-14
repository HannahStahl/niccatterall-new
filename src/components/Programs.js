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
        href={program.itemLink.startsWith('http') ? program.itemLink : `https://${program.itemLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="item program-preview-container"
      >
        <div className="program-preview">
          <img
            src={`${config.cloudfrontURL}/${program.itemPhotos[0].photoName}`}
            alt={program.itemName}
          />
          <div className="program-preview-text">
            <h3>{`${program.itemName.trim()}: $${program.itemPrice}`}</h3>
            <p>{program.itemDescription}</p>
          </div>
        </div>
      </a>
    ))}
  </div>
);
