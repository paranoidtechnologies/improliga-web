import Api from '../../../app/api';

export const actions = create();
export const feature = 'shows';

export function create(dispatch, validate) {
  return {
    loadEvents() {
      let params = {};

      params.perPage = 10;

      Api.fetch('/api/1/events/shows', feature, params, function(err, res) {
        dispatch(actions.loadEvents, {
          list: res.body.data
        });
      });
    }
  };
}
