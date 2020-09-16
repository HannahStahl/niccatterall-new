const dev = {
  apiURL: 'https://dlnum6f7kj.execute-api.us-east-1.amazonaws.com/dev',
  cloudfrontBaseURL: 'https://d1ljva6zkf6zjh.cloudfront.net',
  podcastURL: "https://mtmhzl2lje.execute-api.us-east-1.amazonaws.com/dev/episodes/get",
  userID: 'us-east-1:0c9864e8-7db2-45fc-9c5a-ed2c11e2d9cf',
  blogConfigId: '3',
  programsConfigId: '1',
};

const prod = {
  apiURL: 'https://lbe32id9hg.execute-api.us-east-1.amazonaws.com/prod',
  cloudfrontBaseURL: 'https://d1esxin5o90ebg.cloudfront.net',
  podcastURL: "https://btsrfouie1.execute-api.us-east-1.amazonaws.com/prod/episodes/get",
  userID: 'us-east-1:eb9f731c-e691-4bc2-a74c-ba3e0cfd4f6b',
  blogConfigId: '4',
  programsConfigId: '5',
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  cloudfrontURL: `${config.cloudfrontBaseURL}/${config.userID}`,
  photosCloudfrontURL: 'https://d2vff3mk7ylu21.cloudfront.net',
  businessName: 'Nic Catterall',
  ...config,
};
