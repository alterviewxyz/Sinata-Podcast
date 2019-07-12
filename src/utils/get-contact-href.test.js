// @flow
import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('twitter', '#')).toBe('https://www.twitter.com/#');
  expect(getContactHref('email', '#')).toBe('mailto:#');
  expect(getContactHref('telegram', '#')).toBe('https://t.me/#');
  expect(getContactHref('rss', '#')).toBe('#');
});
