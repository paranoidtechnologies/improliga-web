import Crossing from 'crossing';

export const map = {
  'cs:home': '/',
  'cs:about': '/o-improlize',
  'cs:blog': '/blog',
  'cs:blog:detail': '/blog/:blogItemId',
  'cs:contact': '/kontakt',
  'cs:shows': '/predstaveni',
  'cs:shows:archive': '/predstaveni/archiv/:month',
  'cs:shows:detail': '/predstaveni/:eventId',
  'cs:teams': '/skupiny',
  'cs:teams:detail': '/skupiny',
  'cs:workshops': '/workshopy',
  'cs:workshops:archive': '/workshopy/archiv/:month',
  'cs:workshops:detail': '/workshopy/:eventId',
};


export const urls = new Crossing(new RegExp(':([A-Za-z0-9-_%]{1,})'));
urls.load(map);
