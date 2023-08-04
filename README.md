# vTuberFanPageProject

The vTuberFanPageProject is a curated fan page dedicated to vTuber talents. It aims to provide a carefully selected and limited list of vTubers, along with details sourced from fans. Additionally, the platform showcases the vTubers' works directly from their authentic YouTube channels.

## Screenshots

*Screenshot of the Profile Page, showcasing vTuber talent profiles and details.*
![Profile Page](./public/screenshot1.jpg)
*Screenshot of the Video Page, displaying a collection of vTubers' videos.*
![Video Page](./public/screenshot2.jpg)
*Screenshot of the Video Player Overlay, providing controls for video playback.*
![Video Player Overlay](./public/screenshot3.jpg)

## Technologies Used

- FrontEnd: [React App](https://create-react-app.dev/) and [Bootstarp CSS](https://getbootstrap.com/)
- Services used: [Google Cloud](https://cloud.google.com/)
- API Used: [Youtube Data API v3](https://developers.google.com/youtube/v3) and [Mediawiki API](https://www.mediawiki.org/wiki/API:Properties)
- API Testing: [Postman](https://www.postman.com/)
- Web Hosting: [Netlify](https://www.netlify.com/?attr=homepage-modal)

## Demo Site

[vTuber Fan Page Project](https://stately-speculoos-00b976.netlify.app/MikaVideoPage)

## Future Enhancements

- Move API data collection to backend to prevent hitting API quota.
- Collect and display more statistics like subscriber count, video view and like count.
- Modularize the FrontEnd to make it easier to scale and add more vTuber talents.

## References

  - [Anson the Developer](https://www.youtube.com/@ansonthedev/videos): Using Google Cloud environment and Youtube Data API v3 key management.
    - [Google OAuth 2.0 with Node.js, Express, and Passport #1](https://youtu.be/Q49gGXCCY_4)
    - [Search for YouTube Channels with YouTube Data API](https://www.youtube.com/watch?v=f7uy_KxOa7k)
  - [Mika Melatika Youtube Channel](https://www.youtube.com/@MikaMelatika): Make sure to subscribe :)
  - [Comment Picker](https://commentpicker.com/youtube-channel-id.php): For getting youtube ID
  - [Virtual YouTuber Wiki](https://virtualyoutuber.fandom.com/wiki/Virtual_YouTuber_Wiki): References of vTuber's backstories
  - [YouTube_Clone](https://github.com/Hariharan107/YouTube_Clone): Reference for Youtube Grid layout, video and card components

## Changelog
### 1 Aug 2023
1. Sign up and Create a Google Cloud Developer account.
   - Create a Google Cloud Project
   - Create a OAuth2.0 and API Key credentials
2. Test YouTube API Endpoints to get the necessary data using Postman
3. Created basic Page and Components
4. First attempt of Getting Data via YouTube API on React App
5. Attempted to use Material UI Box and Stack to make youtube layout
6. Created a "DataFetcher" component to modularize the GET of data

### 2 Aug 2023
1. Attempted to useState to GET multiple Youtube Endpoints, got into an infinite GET loop and used up 10000 GET quota for the project
2. Created new Google Project, scale back GET to just 1 Youtube Endpoint
3. Abandoned "DataFetcher" component
4. Abandoned Material UI
5. Abandoned Live page and Scheduled page
6. Use Bootstarp for Video Grid and Card instead
7. Test wikimedia API Endpoint to get the necessary data using Postman
8. Encountered [Cross-origin resource sharing error](https://www.mediawiki.org/wiki/API:Cross-site_requests) which somehow renders the data for Postman and common browser but not on the react app.
9. After several hours of troubleshooting, discovered a simple key value component for the wikimedia API from a random [StackOverFlow thread](https://stackoverflow.com/questions/23952045/wikipedia-api-cross-origin-requests)
10. Created "Profile Fetcher" component to fulfill lifting state.

### 3 Aug 2023
1. Had trouble parsing the data from wikimedia API using regex on a JSON.stringify data output.
2. After several hours of trouble shooting, discovered it was easier to leave it as wikitext format and parse that instead.
3. Completed Profile page
4. Completed Routing and MVP
5. Created an Overlay and embed a youtube link onto the Overlay
6. Remove Hyperlink from Video Card and move it to Video Player Overlay

### 4 Aug 2023
1. Completed ReadMe
