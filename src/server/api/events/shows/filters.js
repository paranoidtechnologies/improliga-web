export function getFilters(date) {
  var filters = [
    {
      attr: 'visibility',
      type: 'exact',
      exact: 4
    },
    {
      attr: 'type',
      type: 'exact',
      exact: [1, 2, 3, 4]
    }
  ];
  const dateFormat = 'YYYY-MM-DD';

  if (date) {
    if (date.isValid()) {
      filters.push({
        'type': 'or',
        'or': [
          {
            'type': 'and',
            'and': [
              {
                'attr':'start',
                'type':'gte',
                'gte': date.startOf('month').format(dateFormat)
              },
              {
                'attr':'start',
                'type':'lt',
                'lt': date.endOf('month').format(dateFormat)
              }
            ]
          },
          {
            'type': 'and',
            'and': [
              {
                'attr':'end',
                'type':'gte',
                'gte': date.startOf('month').format(dateFormat)
              },
              {
                'attr':'end',
                'type':'lt',
                'lt': date.endOf('month').format(dateFormat)
              }
            ]
          }
        ]
      });
    } else {
      throw new Error('invalid-date');
    }
  }


  return filters;
};
