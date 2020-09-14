import React, { useState, useEffect } from 'react';
import moment from 'moment';
import config from '../config';

export default ({ match, items }) => {
  const [article, setArticle] = useState(undefined);

  useEffect(() => {
    const blogTitle = unescape(match.params.blogTitle).replace(/_/g, ' ');
    const itemDetails = items.find((itemInList) => (
      itemInList.itemName.toLowerCase() === blogTitle.toLowerCase()
    ));
    setArticle(itemDetails);
  }, [match.params.blogTitle, items]);

  return article ? (
    <div className="article">
      <h1>{article.itemName}</h1>
      <div className="items">
        {article.itemPhotos.map((photo) => (
          <div className="blog-preview-container" key={photo.photoName}>
            <img
              src={`${config.cloudfrontURL}/${photo.photoName}`}
              alt={article.itemName}
            />
            <div className="blog-preview">
              <h3>{article.itemName}</h3>
              <p>{moment(article.datePublished).format('MMMM D, YYYY')}</p>
              <div dangerouslySetInnerHTML={{ __html: article.itemHtml }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : <div />;
};
