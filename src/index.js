import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, withRouter, Route, Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Page from './components/Page';
import Article from './components/Article';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Articles from './components/Articles';
import Programs from './components/Programs';
import Podcast from './components/Podcast';
import Clients from './components/Clients';
import config from './config';

const Routes = ({ items }) => (
  <Switch>
    <Route path="/" exact render={() => <Home items={items} />} />
    <Route path="/about" exact render={() => <Page pageKey="about" />} />
    <Route path="/blog" exact render={() => <Page pageKey="blog" Items={<Articles items={items} />} />} />
    <Route path="/blog/:blogTitle" exact render={(props) => <Article match={props.match} items={items} />} />
    <Route path="/programs" exact render={() => <Page pageKey="programs" Items={<Programs items={items} />} />} />
    <Route path="/podcast" exact render={() => <Page pageKey="podcast" Items={<Podcast items={items} />} />} />
    <Route path="/clients" exact render={() => <Page pageKey="clients" Items={<Clients items={items} />} />} />
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
