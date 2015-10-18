export const actions = create();
export const feature = 'contact';

export function create(api, dispatch, validate) {
  return {
    sendContactForm(data) {
      api.post({
        key: 'contactForm',
        url: '/contactForm',
        callback: (err, res) => {
          dispatch(actions.sendContactForm, {
            error: res.body ? res.body.message:'unknown',
            result: res.ok,
            status: res.status
          });
        }
      });
    }
  };
}
