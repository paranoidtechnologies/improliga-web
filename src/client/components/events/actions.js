import Api from '../../app/api';

export const actions = create();
export const feature = 'events';

export function create(dispatch, validate) {
  return {
    loadEventDetail(eventId) {
      let params = {};

      params.perPage = 1;

      Api.fetch('/api/1/events/' + eventId, feature, params, function(err, res) {
        dispatch(actions.loadEventDetail, res.body.data);
      });
    }
  };
}
