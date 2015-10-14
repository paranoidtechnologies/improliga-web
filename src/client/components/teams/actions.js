export const actions = create();
export const feature = 'teams';

export function create(api, dispatch, validate) {
  return {
    loadTeamsPage(eventId) {
      let params = {};

      api.fetch('/api/1/teams', feature, params, (err, res) => {
        if (err) {
          api.error(err);
        } else {
          dispatch(actions.loadTeamsPage, res.body);
        }
      });
    }
  };
}
