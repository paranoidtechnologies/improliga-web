export const actions = create();
export const feature = 'shows';

export function create(api, dispatch, validate) {
  return {
    loadEvents(params = {}) {
      params.perPage = 6;

      api.fetch('/api/1/shows', feature, params, function(err, res) {
        if (err) {
          api.error(err, res);
        } else {
          dispatch(actions.loadEvents, {
            list: res.body.data
          });
        }
      });
    },


    loadCalendarEvents(month) {
      const params = {
        month: month
      };

      api.fetch('/api/1/shows', 'showsCalendar', params, function(err, res) {
        if (err) {
          api.error(err, res);
        } else {
          dispatch(actions.loadCalendarEvents, {
            list: res.body.data
          });
        }
      });
    }
  };
}
