/* eslint-disable max-len */

export const makeRequest = async(body) => {
  try { const res = await fetch(
    'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_03&returnRecognitionModel=false', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': `${process.env.AZURE_KEY}`
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

export const requestMusic = (emotion, accessToken) => {
  try { return fetch(
    `https://api.spotify.com./v1/search?q=${emotion}&type=playlist`,
    { 
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type' : 'application/json'
      },
    })
  
    .then(res => res.json())
    .then(json => json.playlists.items)
    .then(items => items.map(item => (
      item.id
    )));
  
  } catch(error) {
    console.log(error);
  }
};

// export const requestFollowPlaylist = async() => {
//   try { return fetch(`https://api.spotify.com/v1/playlists/${playlist}/followers`,
//     {
//       method: 'PUT',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type' : 'application/json'
//       },
//       body: {
//         'public': false
//       }
//     })
//     .then(res => res.json())
//     .then(json => json.playlists.requestFollowPlaylist)
//     .then(requestFollowPlaylist => (
//       requestFollowPlaylist.id
//     ));
//   } catch(error) {
//     console.log(error);
//   }

// };
