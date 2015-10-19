export const actions = create();
export const feature = 'contact';

export function create(api, dispatch, validate) {
  return {
    sendContactForm(data) {
      api.post({
        data: data,
        key: 'contactForm',
        url: '/contactForm',
        callback: (err, res) => {
          dispatch(actions.sendContactForm, {
            error: res.body ? res.body.message : 'unknown',
            result: !err && res.ok,
            status: res.status
          });
        }
      });
    },

    setSubject(subject) {
      dispatch(actions.setSubject, subject);
    }
  };
}
