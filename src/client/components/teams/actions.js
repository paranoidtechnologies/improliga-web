export const actions = create();
export const feature = 'teams';

export function create(api, dispatch, validate) {
  return {
    loadTeamsPage() {
      let params = {};

      api.fetch('/api/1/teams', feature, params, (err, res) => {
        if (err) {
          api.error(err);
        } else {
          dispatch(actions.loadTeamsPage, res.body);
        }
      });
    },


    loadTeamDetail(teamId) {
      let params = {};

      api.fetch('/api/1/teams/' + teamId, 'teamDetail', params, (err, res) => {
        if (err) {
          api.error(err);
        } else {
          dispatch(actions.loadTeamDetail, res.body);
        }
      });
    }
  };
}
