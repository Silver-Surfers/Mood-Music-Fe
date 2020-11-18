import { 
  happinessArray, 
  sadnessArray, 
  fearArray,
  angerArray,
  disgustArray,
  contemptArray, 
  neutralArray,
  surpriseArray } from './assets';

export const emotionFunction = (emotion) => {
  const singleEmotion = Object.keys(emotion).reduce(
    (a, b) => emotion[a] > emotion[b] ? a : b);

  return singleEmotion;

};

const arrayMatch = (singleEmotion) => {
  switch(singleEmotion) {
    case 'anger':
      return angerArray;
    case 'contempt':
      return contemptArray;
    case 'disgust': 
      return disgustArray;
    case 'fear': 
      return fearArray;
    case 'happiness':
      return happinessArray;
    case 'neutral':
      return neutralArray;
    case 'sadness':
      return sadnessArray;
    case 'surprise':
      return surpriseArray;
    default: return neutralArray;
  }

};

export const twoEmotions = (singleEmotion) => {
  const emotionArray = arrayMatch(singleEmotion);
  const randomNumber = Math.ceil(Math.random() * emotionArray.length);
  const secondEmotion = emotionArray[randomNumber];

  return `${singleEmotion},${secondEmotion}`;

};




