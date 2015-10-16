export const actions = create();

export function create(api, dispatch, validate) {
  return {
    sendCalendarForm(data) {
      api.post('/workshops', 'contactForm', {}, function(err, res) {
        if (err) {
          api.error(err, res);
        } else {
          dispatch(actions.sendCalendarForm, {
            list: res.body.data
          });
        }
      });
    }
  };
}
