export const actions = create();
export const feature = 'news';

export function create(api, dispatch, validate) {
  return {
    loadNewsItemDetail(newsItemId) {
      let params = {};

      api.fetch('/api/1/news/' + newsItemId, feature, params, (err, res) => {
        if (err) {
          api.error(err);
        } else {
          dispatch(actions.loadNewsItemDetail, res.body.data);
        }
      });
    },

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
