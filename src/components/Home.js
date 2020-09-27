import React from 'react';
import Fade from 'react-reveal/Fade';
import moment from 'moment';
import content from '../content.json';
import Button from './Button';
import config from '../config';

const { title, intro, cta } = content.home;

const getFirstProgram = (items) => {
  const programs = items.filter((item) => item.cmsPageConfigId === config.programsConfigId);
  return programs[0];
};

const getFirstThreeArticles = (items) => {
  const articles = items.filter((item) => item.cmsPageConfigId === config.blogConfigId);
  const sortedArticles = articles.sort((a, b) => {
    if (a.datePublished > b.datePublished) return -1;
    if (b.datePublished > a.datePublished) return 1;
    return 0;
  });
  return sortedArticles.splice(0, 3);
};

export default ({ items }) => {
  const firstProgram = getFirstProgram(items);
  const firstThreeArticles = getFirstThreeArticles(items);
  return (
    <div>
      <div className="banner home-banner">
        <div className="banner-text">
          <h1>{title}</h1>
          <Button text={cta.text} href={cta.href} />
        </div>
      </div>
      <div className="intro home-intro">
        <div className="home-intro-sections">
          {intro.map(({ image, header, text }) => (
            <Fade>
              <div key={header} className="home-intro-section">
                <img src={`${config.photosCloudfrontURL}/${image}`} alt={header} />
                <h3>{header}</h3>
                <p>{text}</p>
              </div>
            </Fade>
          ))}
        </div>
        <Button text="LEARN MORE" href="/about" />
      </div>
      <div className="home-programs-preview">
        <Fade>
          <div className="home-programs-text">
            <h3 className="home-programs-header">TRAINING PROGRAMS</h3>
            <div className="items">
              {firstProgram && (
                <a
                  href={firstProgram.itemLink.startsWith('http') ? firstProgram.itemLink : `https://${firstProgram.itemLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="item program-preview-container"
                >
                  <div className="program-preview">
                    <img
                      src={`${config.cloudfrontURL}/${firstProgram.itemPhotos[0].photoName}`}
                      alt={firstProgram.itemName}
                    />
                    <div className="program-preview-text">
                      <h3>{`${firstProgram.itemName.trim()}: $${firstProgram.itemPrice}`}</h3>
                      <p>{firstProgram.itemDescription}</p>
                    </div>
                  </div>
                </a>
              )}
            </div>
            <Button text="VIEW ALL PROGRAMS" href="/programs" />
          </div>
        </Fade>
      </div>
      <div className="home-blog-preview">
        <h3 className="home-blog-preview-header">LATEST BLOG POSTS</h3>
        <div className="items">
          {firstThreeArticles.map((article) => (
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
        <Fade><Button text="VIEW ALL POSTS" href="/blog" /></Fade>
      </div>
    </div>
  );
};
