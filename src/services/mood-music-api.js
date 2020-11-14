/* eslint-disable max-len */

export const makeRequest = async(body) => {
  const res = await fetch('https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_03&returnRecognitionModel=false', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Ocp-Apim-Subscription-Key': '607bb282837f4747b2d4acde5c3b7526'
    },
    body
  });
  const json = await res.json();
  const emotion = json[0].faceAttributes.emotion;
  return emotion;

};

// happiness: emotions.happiness,
// anger: emotions.anger,
// contempt: emotions.contempt,
// disgust: emotions.disgust,
// fear: emotions.fear,
// neutral: emotions.neutral,
// sadness: emotions.sadness,
// suprise: emotions.suprise
