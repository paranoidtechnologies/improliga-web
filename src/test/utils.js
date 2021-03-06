import TestUtils from 'react-addons-test-utils';

// To console.log stringified and pretty printed JSON. Useful for shallow
// rendered component for example.
export function log(value) {
  const str = JSON.stringify(value, null, 2);
  console.log(str); // eslint-disable-line no-console
}

// Helper for React components shallow rendering.
// https://facebook.github.io/react/docs/test-utils.html#shallow-rendering
export function render(Component) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(Component);
  return shallowRenderer.getRenderOutput();
}


export function getInstance(Component) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(Component);
  return shallowRenderer._instance._instance;
}


export function mockApi(err, res) {
  return {
    delete: function(cfg) {
      cfg.callback(err, res);
    },

    fetch: function(url, feature, params, next) {
      next(err, res);
    },

    get: function(cfg) {
      cfg.callback(err, res);
    },

    post: function(cfg) {
      cfg.callback(err, res);
    },

    put: function(cfg) {
      cfg.callback(err, res);
    }
  };
}

export function getChildren(obj) {
  return obj.props.children;
}
