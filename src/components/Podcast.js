import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import config from '../config';

export default () => {
  const [episodeURLs, setEpisodeURLs] = useState([]);

  useEffect(() => {
    fetch(config.podcastURL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json()).then((episodes) => {
      setEpisodeURLs(episodes.map((episode) => {
        const url = episode.audio_url.split('.mp3')[0];
        return `${url}?client_source=small_player&amp;iframe=true&amp;referrer=${url}.js?player=small`;
      }));
    });
  }, []);

  return (
    <div className="podcast-episodes">
      {episodeURLs.map((episodeURL) => (
        <Fade key={episodeURL}>
          <iframe
            src={episodeURL}
            className="podcast-episode"
            frameBorder="0"
            scrolling="no"
            title="Podcast"
          />
        </Fade>
      ))}
    </div>
  );
};
