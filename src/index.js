import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, withRouter, Route, Switch,
} from 'react-router-dom';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Page from './components/Page';
import Article from './components/Article';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import config from './config';

const getArticles = (items) => {
  const articles = items.filter((item) => item.cmsPageConfigId === config.blogConfigId);
  return articles.sort((a, b) => {
    if (a.datePublished > b.datePublished) return -1;
    if (b.datePublished > a.datePublished) return 1;
    return 0;
  });
};

const Items = ({ items }) => (
  <div className="items">
    {getArticles(items).map((item) => (
      <a
        key={item.itemId}
        href={escape(`/blog/${item.itemName.replace(/ /g, '_').toLowerCase()}`)}
        className="item"
      >
        <img
          src={`${config.cloudfrontURL}/${item.itemPhotos[0].photoName}`}
          alt={item.itemName}
        />
        <div className="blog-preview">
          <h3>{item.itemName}</h3>
          <p>{moment(item.datePublished).format('MMMM D, YYYY')}</p>
          <div dangerouslySetInnerHTML={{ __html: item.itemHtml }} />
        </div>
      </a>
    ))}
  </div>
);

const Routes = ({ items }) => (
  <Switch>
    <Route path="/" exact render={() => <Page pageKey="home" Items={<Items items={items} />} />} />
    <Route path="/blog" exact render={() => <Page pageKey="blog" Items={<Items items={items} />} />} />
    <Route path="/blog/:itemName" exact render={(props) => <Article match={props.match} items={items} />} />
    <Route path="/programs" exact render={() => <Page pageKey="programs" Items={<Items items={items} />} />} />
    <Route path="/videos" exact render={() => <Page pageKey="videos" Items={<Items items={items} />} />} />
    <Route path="/podcast" exact render={() => <Page pageKey="podcast" Items={<Items items={items} />} />} />
    <Route path="/clients" exact render={() => <Page pageKey="clients" Items={<Items items={items} />} />} />
    <Route component={NotFound} />
  </Switch>
);

const App = withRouter(() => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch(`${config.apiURL}/publishedItems/${config.userID}`).then((res) => res.json()),
      fetch(`${config.apiURL}/itemsToPhotos/${config.userID}`).then((res) => res.json()),
      fetch(`${config.apiURL}/photos/${config.userID}`).then((res) => res.json()),
    ]).then((results) => {
      const [itemsList, itemsToPhotos, photos] = results;
      itemsList.forEach((item, index) => {
        const itemPhotoIds = itemsToPhotos
          .filter((row) => row.itemId === item.itemId)
          .map((row) => row.photoId);
        itemsList[index].itemPhotos = photos.filter(
          (photo) => itemPhotoIds.includes(photo.photoId),
        );
      });
      setItems(itemsList);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="page-content">
        <Routes items={items} />
      </div>
      <Footer />
    </>
  );
});

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
