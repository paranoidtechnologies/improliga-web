import Api from '../../app/api';

export const actions = create();
export const feature = 'shows';

export function create(dispatch, validate) {
  return {
    loadEvents() {
      Api.fetch('/api/model/Impro.Event/browse', feature, {}, function(a, res) {
        dispatch(actions.loadEvents, res.body.data);
      });
    }
  };
}
