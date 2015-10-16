export const actions = create();
export const feature = 'events';

export function create(api, dispatch, validate) {
  return {
    loadEventDetail(eventId) {
      let params = {};

      api.fetch('/events/' + eventId, feature, params, (err, res) => {
        if (err) {
          api.error(err);
        } else {
          dispatch(actions.loadEventDetail, res.body.data);
        }
      });
    }
  };
}
