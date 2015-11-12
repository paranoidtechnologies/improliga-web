export const LOAD_TEAMS_PAGE = 'LOAD_TEAMS_PAGE';
export const LOAD_TEAM_DETAIL = 'LOAD_TEAM_DETAIL';

export function loadTeamsPage(page=6) {
  let params = {
    page: page
  };

  return ({fetch}) => {
    console.log(']]', fetch, fetch.foo);

    return {
      type: [LOAD_TEAMS_PAGE],
      payload: {
        promise: fetch('/teams').then(response => response.json())
      }
    };
  };
};

export function loadTeamDetail(teamId) {
  let params = {};

  return ({fetch}) => ({
    type: [LOAD_TEAM_DETAIL],
    payload: {
      promise: fetch('/teams/' + teamId).then(response => response.json())
    }
  });
};
