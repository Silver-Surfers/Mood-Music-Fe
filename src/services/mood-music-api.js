/* eslint-disable max-len */

export const makeRequest = async(body) => {
  try { const res = await fetch(
    'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_03&returnRecognitionModel=false', 
    {
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

  } catch(error) {
    console.log(error);
  }
};

export const requestMusic = async(emotions, accessToken) => {
  try { const res = await fetch(
    `https://api.spotify.com./v1/search?q=${emotions}&type=playlist`,
    { 
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
    });
  const json = await res.json()
    .then(console.log(json));
  } catch(error) {
    console.log(error);
  }
  
};
