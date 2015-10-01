export const actions = create();
export const feature = 'news';

export function create(api, dispatch, validate) {
  return {
    loadNews() {
      let params = {};

      params.perPage = 5;

      api.fetch('/api/1/news', feature, params, function(err, res) {
        if (err) {
          api.error(err);
        } else {
          dispatch(actions.loadNews, {
            list: res.body.data
          });
        }
      });
    }
  };
}
