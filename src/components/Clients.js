import React from 'react';
import config from '../config';
import content from '../content.json';

const getClients = () => content.clients.players.sort((a, b) => {
  if (a.lastName < b.lastName) return -1;
  if (b.lastName < a.lastName) return 1;
  return 0;
});

export default () => (
  <div className="items">
    {getClients().map((client) => (
      <a
        key={client.itemLink}
        href={client.itemLink.startsWith('http') ? client.itemLink : `https://${client.itemLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="item client-preview-container"
      >
        <img src={`${config.photosCloudfrontURL}/clients/${client.itemPhoto}`} alt={client.itemName} />
        <h3>{`${client.firstName} ${client.lastName}`}</h3>
      </a>
    ))}
  </div>
);
