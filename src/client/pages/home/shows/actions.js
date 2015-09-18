import Api from '../../../app/api';

export const actions = create();
export const feature = 'shows';

export function create(dispatch, validate) {
  return {
    loadEvents() {
      let params = {};

      params.per_page = 10;

      Api.fetch('/api/1/events/shows', feature, params, function(err, res) {
        console.log('actions', err, res);

        dispatch(actions.loadEvents, {
          list: res.body.data
        });
      });
    }
  };
}
