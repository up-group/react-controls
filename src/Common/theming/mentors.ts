export type MentorName =
  | 'glasses-orange'
  | 'glasses-brown'
  | 'mouth-straight-orange'
  | 'wink-grey'
  | 'happy-orange'
  | 'confused-orange'
  | 'sparkles'
  | 'cry'
  | 'mentor-surprised'
  | 'sorry-orange'
  | 'confused-grey'
  | 'mentor-happy';

export const MentorNames: MentorName[] = [
  'glasses-orange',
  'glasses-brown',
  'mouth-straight-orange',
  'wink-grey',
  'happy-orange',
  'confused-orange',
  'sparkles',
  'cry',
  'mentor-surprised',
  'sorry-orange',
  'confused-grey',
  'mentor-happy',
];

const dictionary = {};

for (let i = 0; i < MentorNames.length; i++) {
  const iconName = MentorNames[i];
  dictionary[iconName] = require('./icons/mentors/' + iconName + '.svg');
}

export default dictionary;
