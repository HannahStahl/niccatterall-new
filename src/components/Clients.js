import React from 'react';
import config from '../config';
import content from '../content.json';

const clients = content.clients.players.sort((a, b) => {
  if (a.lastName < b.lastName) return -1;
  if (b.lastName < a.lastName) return 1;
  return 0;
});

const currentClients = clients.filter((client) => client.active);
const pastClients = clients.filter((client) => !client.active);

const Client = ({ client }) => (
  <a
    href={client.itemLink.startsWith('http') ? client.itemLink : `https://${client.itemLink}`}
    target="_blank"
    rel="noopener noreferrer"
    className="item client-preview-container"
  >
    <img src={`${config.photosCloudfrontURL}/clients/${client.itemPhoto}`} alt={client.itemName} />
    <h4>{`${client.firstName} ${client.lastName}`}</h4>
  </a>
);

export default () => (
  <>
    <h3 className="clients-header">Players currently working with Nic:</h3>
    <div className="items">
      {currentClients.map((client) => <Client key={client.itemLink} client={client} />)}
    </div>
    <hr />
    <h3 className="clients-header">Players who have previously worked with Nic:</h3>
    <div className="items">
      {pastClients.map((client) => <Client key={client.itemLink} client={client} />)}
    </div>
  </>
);
