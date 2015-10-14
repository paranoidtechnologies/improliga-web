export const actions = create();
export const feature = 'teams';

export function create(api, dispatch, validate) {
  return {
    loadTeamsPage(eventId) {
      let params = {};

      api.fetch('/api/1/events/' + eventId, feature, params, (err, res) => {
        if (err) {
          api.error(err);
        } else {
          dispatch(actions.loadTeamsPage, res.body.data);
        }
      });
    }
  };
}
