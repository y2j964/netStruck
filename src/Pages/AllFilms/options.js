import uuid from 'uuid';

const options = [
  {
    text: 'sort by:',
    value: 'sort',
    id: uuid.v4(),
  },
  {
    text: 'title',
    value: 'title',
    id: uuid.v4(),
  },
  {
    text: 'director',
    value: 'director',
    id: uuid.v4(),
  },
  {
    text: 'duration',
    value: 'duration',
    id: uuid.v4(),
  },
  {
    text: 'year',
    value: 'year',
    id: uuid.v4(),
  },
];

export default options;
