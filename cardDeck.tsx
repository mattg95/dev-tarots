import {ImageSourcePropType} from 'react-native';

export interface Card {
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const cardDeck: Card[] = [
  {
    title: 'Dev Tarots',
    description: '',
    image: require('./images/tarot-cards.jpg'),
  },
  {
    title: 'The Journey',
    description: 'Go for a walk',
    image: require('./images/journey.png'),
  },
  {
    title: 'The Companion',
    description: 'Talk to a friend',
    image: require('./images/companion.png'),
  },
  {
    title: 'The Beginner',
    description: 'Explain it to someone who has no tech knowledge',
    image: require('./images/beginner.png'),
  },
  {
    title: 'The Scribe',
    description: 'Write down the problem',
    image: require('./images/scribe.png'),
  },
  {
    title: 'The Juggler',
    description: 'Move on to a different project or problem',
    image: require('./images/juggler.jpg'),
  },
];

export default cardDeck;
