// @flow
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'youtube':
      icon = ICONS.YOUTUBE;
      break;
    case 'telegram':
      icon = ICONS.TELEGRAM;
      break;
    case 'googlepodcast':
      icon = ICONS.GOOGLEPODCAST;
      break;
    case 'applepodcast':
      icon = ICONS.APPLEPODCAST;
      break;
    case 'spotify':
      icon = ICONS.SPOTIFY;
      break;
    case 'castbox':
      icon = ICONS.CASTBOX;
      break;
    case 'sticher':
      icon = ICONS.STICHER;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
