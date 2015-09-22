import Api from '../../app/api';

export const actions = create();
export const feature = 'news';

export function create(dispatch, validate) {
  return {
    loadNews() {
      let params = {};

      params.perPage = 5;

      Api.fetch('/api/1/news', feature, params, function(err, res) {
        dispatch(actions.loadNews, {
          list: res.body.data
        });
      });
    }
  };
}
