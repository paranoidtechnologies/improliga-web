export const actions = create();
export const feature = 'workshops';

export function create(api, dispatch, validate) {
  return {
    loadCalendarWorkshops(month) {
      const params = {
        month: month
      };

      api.fetch('/workshops', 'workshopsCalendar', params, function(err, res) {
        if (err) {
          api.error(err, res);
        } else {
          dispatch(actions.loadCalendarWorkshops, {
            list: res.body.data
          });
        }
      });
    }
  };
}
