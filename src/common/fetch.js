import isomorphicFetch from 'isomorphic-fetch';

const local = 'http://localhost:8000/';

function ensureAbsoluteUrl(input) {
  if (typeof input !== 'string') return input;
  if (input.indexOf('http') !== -1) return input;
  return local + input;
}

function ensureApiUrl(input) {
  return 'api/1' + input;
}

// Wrapper over isomorphicFetch making relative urls absolute. We don't want
// hardcode fetch urls since they are different when app is deployed or not.
export default function fetch(input, init) {
  input = ensureAbsoluteUrl(ensureApiUrl(input));
  return isomorphicFetch(input, init);
}

