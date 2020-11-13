# Vision
- The vision of this project is to provide mood-specific music for a user. The idea is that a user will submit a picture, captured by their webcam, for emotional analysis. Upon submittting they will recieve a playlist from Spotify that reflects their mood. The playlist will play in the app in a 'widget' supplied by Spotify and embbedded in the app. This should  be fun and beneficial to any lover of music!

# Scope
- in
  - The app will provide a user with music to match their mood.
  - The app will make use of a user's webcam to capture a still image to send to MS Azure for emotion evaluation.
  - The app will make use of a user's existing Spotify account.
- out
  - The app will not serve as a replacement for a user's favorite music streaming service.

# MVP
  - A user will submit a picture, captured by their webcam and recieve a playable playlist based on their mood.

# Stretch
  - allow a user to submit a picture from an outside source, ie upload from computer.
  - allow a user to recieve a playlist recommendation without logging into Spotify.
  - A toggle between 'Match my Mood, and 'Improve my Mood' modes.
  - change background color of app based on user mood.
  - Backend to save user playlists.

# Functional Requirements
1. A user will be able to capture an image of themselves.
2. a user will be able to 'retry' if they are not initially satisfied with image.
3. Upon submit, a user will recieve a playlist from Spotify based on mood, that's playable in app.

# Non-Functional Requirements
1. security
  - a user's picture will not be stored by the app or by MS Azure. It is to be used for emotion evaluation only.
  - a user's Spotify Login information will not be stored.
  - Access token from Spotify will be invalid after 24 hours
2. Usability
  - the app will have simple UI. The user will click a button to capture a picture, click another to submit picture and then simply will interface with Spotify's player widget which will be embedded and will contain recommended playlist.
  - The app will be Rendered in React for efficient page load.
# Data Flow
- A user will first be met with a login page
- the user will log in with their _SPOTIFY_ login information.
- the user will then capture a picture of themselves.
- the picture will be sent to MS Azure, as a blob, which will return and emotional analysis object.
- This object will be set to state and keywords from it, based on which emotions rate the highest will be sent a part of a query to Spotify.
- Spotify will return a playlist based on those query params which will then play in the embedded 'widget' player
- the user can then choose to listen to playlist, start again or log out.
