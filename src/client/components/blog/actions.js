export const actions = create();
export const feature = 'blog';

export function create(api, dispatch, validate) {
  return {
    loadBlogItemDetail(blogItemId) {
      let params = {};

      api.fetch('/news/' + blogItemId, feature, params, (err, res) => {
        if (err) {
          api.error(err);
        } else {
          dispatch(actions.loadBlogItemDetail, res.body.data);
        }
      });
    },

    loadBlog() {
      let params = {};

      params.perPage = 5;

      api.fetch('/news', feature, params, function(err, res) {
        if (err) {
          api.error(err);
        } else {
          dispatch(actions.loadBlog, {
            list: res.body.data
          });
        }
      });
    }
  };
}
