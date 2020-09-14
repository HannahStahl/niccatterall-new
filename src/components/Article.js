import React, { useState, useEffect } from 'react';
import config from '../config';

export default ({ match, items }) => {
  const [item, setItem] = useState(undefined);

  useEffect(() => {
    const blogTitle = unescape(match.params.blogTitle).replace(/_/g, ' ');
    const itemDetails = items.find((itemInList) => (
      itemInList.itemName.toLowerCase() === blogTitle.toLowerCase()
    ));
    setItem(itemDetails);
  }, [match.params.blogTitle, items]);

  return item ? (
    <div className="article">
      <h1>{item.itemName}</h1>
      <div className="items">
        {item.itemPhotos.map((photo) => (
          <div className="item" key={photo.photoName}>
            <img
              className="item-img"
              src={`${config.cloudfrontURL}/${photo.photoName}`}
              alt={item.itemName}
            />
          </div>
        ))}
      </div>
    </div>
  ) : <div />;
};
