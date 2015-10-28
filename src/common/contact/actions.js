export const SET_SUBJECT = 'SET_SUBJECT';
export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';

export function sendContactForm(data) {
  const send = {
    data: data,
    key: 'contactForm',
    url: '/feedback',
  };

  return ({post}) => ({
    type: SEND_CONTACT_FORM,
    promise: post(send).then(response => response.json())
  });
}

export function setSubject(subject) {
  return {
    type: SET_SUBJECT,
    payload: subject
  };
}
