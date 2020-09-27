import React from 'react';
import Fade from 'react-reveal/Fade';
import moment from 'moment';
import config from '../config';

const getArticles = (items) => {
  const articles = items.filter((item) => item.cmsPageConfigId === config.blogConfigId);
  return articles.sort((a, b) => {
    if (a.datePublished > b.datePublished) return -1;
    if (b.datePublished > a.datePublished) return 1;
    return 0;
  });
};

export default ({ items }) => (
  <div className="items">
    {getArticles(items).map((article) => (
      <Fade key={article.itemId}>
        <a
          href={escape(`/blog/${article.itemName.replace(/ /g, '_').toLowerCase()}`)}
          className="item blog-preview-container"
        >
          <img
            src={`${config.cloudfrontURL}/${article.itemPhotos[0].photoName}`}
            alt={article.itemName}
          />
          <div className="blog-preview">
            <h3>{article.itemName}</h3>
            <p>{moment(article.datePublished).format('MMMM D, YYYY')}</p>
            <div dangerouslySetInnerHTML={{ __html: article.itemHtml }} />
          </div>
        </a>
      </Fade>
    ))}
  </div>
);
