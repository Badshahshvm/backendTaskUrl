URL Shortener API :-
A simple backend service for shortening URLs, retrieving the original URLs, and tracking usage statistics. The service provides secure and unique short IDs for URLs and tracks their usage.

Technologies and Tools:-

1. Backend Framework: Node.js / Express.js
2. Database: MongoDB (via Mongoose)
3. Deployment: Render
4. Environment Management: dotenv
5. Validation: valid-url
6. Rate Limiting: express-rate-limit
7. nano ID Generation: nanoid (shortId is depricated)

Valid-url : The valid-url package is used to validate whether a given string is a valid URL. It provides a simple way to check if the URL is well-formed and adheres to URL standards.

nanoId : Use Case: Provides more secure, cryptographically safe unique IDs. It’s often used when a stronger guarantee of uniqueness and randomness is required. Suitable for use cases where the ID needs to be short and unique but also secure.

Folder Structure:-
url-shortener/
├── controller/
│ └── url.js # Contains business logic for URL endpoints
├── models/
│ └── Url.js # Mongoose schema for URL data
├── routes/
│ └── url.js # Defines API endpoints
├── middlewares/
│ └── rateLimiter.js # Handles request rate limiting
├── utils/
│ └── validateUrl.js # Utility to validate URLs
├── .env # Environment variables
├── app.js # Main entry point
├── package.json # Dependencies and scripts
├── README.md # Project documentation

models(Database designe):
Url.js

1.  originalUrl: String
2.  shortId: String
3.  clicks: Number
4.  lastAccessed: Date

rateLiiter.js is a middlewares , it is used to handle the client request.

1. Create Short URL
   Method: POST
   URL: "https://backendtaskurl.onrender.com/api/v1/url/shorten"
   Description: Accepts a long URL and returns a shortened URL.
   Request Body:
   json:

{
"originalUrl": "https://example.com"
}

response:
{
"success": true,
"message": "shortId created sucessfully",
"url": {
"originalUrl": "https://www.google.com/search?q=link+for+url+shortner&oq=link+for+url+shortner&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKABMgkIAhAhGAoYoAEyBwgDECEYnwUyBwgEECEYnwUyBwgFECEYnwUyBwgGECEYnwUyBwgHECEYnwUyBwgIECEYnwUyBwgJECEYnwXSAQk3NDI3ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF",
"shortId": "mSdxIHOL",
"clicks": 0,
"lastAccessed": null,
"\_id": "67461122c09f02d2a4596626",
"createdAt": "2024-11-26T18:19:14.203Z",
"updatedAt": "2024-11-26T18:19:14.203Z",
"\_\_v": 0
}
}

2. Redirect to Original URL
   Method: GET
   URL: "https://backendtaskurl.onrender.com/api/v1/url/:shortId"
   Description: Redirects the user to the original URL associated with the given shortId.

3. Get URL Stats
   Method: GET
   URL:"https://backendtaskurl.onrender.com/api/v1/url/stats/:shortId"
   Description: Returns usage statistics for a specific short URL.
   Example
   {
   "sucess": true,
   "message": "Url stats here",
   "url": {
   "\_id": "6745fd9abb21891ae62efa3c",
   "originalUrl": "https://mail.google.com/mail/u/0/#inbox",
   "shortId": "WqqvxoCL",
   "clicks": 5,
   "lastAccessed": "2024-11-26T16:59:18.785Z",
   "createdAt": "2024-11-26T16:55:54.638Z",
   "updatedAt": "2024-11-26T16:59:18.786Z",
   "\_\_v": 0
   }
   }

Run Commands :-

1. Install Dependencies:
   npm install

2. Start the Server:
   npm start

Deployment on Render:-

1. Push code to a GitHub repository.
2. Connect the repository to Render/Railway/Vercel.
3. Set environment variables:
4. MONGOURI (MongoDB connection string)
5. BASE_URL :"https://backendtaskurl.onrender.com"

Features:

1. Shorten any valid URL.
2. Redirect to the original URL using the short ID.
3. Track usage statistics, including:
4. Total clicks
5. Last access timestamp
