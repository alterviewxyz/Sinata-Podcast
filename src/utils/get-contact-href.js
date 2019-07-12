// @flow
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'youtube':
      href = `https://youtube.com/${contact}`;
      break;
    case 'telegram':
      href = `https://t.me/${contact}`;
      break;
    case 'googlepodcast':
      href = `https://podcasts.google.com/?feed=${contact}`;
      break;
    case 'applepodcast':
      href = `https://podcasts.apple.com/us/podcast/${contact}`;
      break;
    case 'spotify':
      href = `https://open.spotify.com/show/${contact}`;
      break;
    case 'castbox':
      href = `https://castbox.fm/va/${contact}`;
      break;
    case 'sticher':
      href = `https://www.stitcher.com/podcast/${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
