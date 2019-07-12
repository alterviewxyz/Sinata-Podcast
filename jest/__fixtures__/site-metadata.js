'use strict';

module.exports = {
  site: {
    siteMetadata: {
      url: 'http://localhost',
      title: 'Test title',
      subtitle: 'Test subtitle',
      copyright: 'Test copyright',
      disqusShortname: '',
      postsPerPage: 4,
      menu: [
        {
          label: 'Test label 1',
          path: '/test/1/'
        },
        {
          label: 'Test label 2',
          path: '/test/2/'
        },
        {
          label: 'Test label 3',
          path: '/test/3/'
        }
      ],
      author: {
        name: 'Test name',
        photo: '/test.jpg',
        bio: 'Test bio',
        contacts: {
          email: 'sina@sinatapodcast.com',
          telegram: 'sinatapodcast',
          twitter: 'sinatapodcast',
          youtube: '#',
          googlepodcast: 'aHR0cHM6Ly9hbmNob3IuZm0vcy9hZjY2Yzg4L3BvZGNhc3QvcnNz',
          applepodcast: '#',
          spotify: '2HQWCqQlAyjk04IGWj0xRo',
          castbox: '2148037',
          sticher: 'anchor-podcasts/sinata',
          rss: 'https://anchor.fm/s/af66c88/podcast/rss',
        }
      }
    }
  }
};
