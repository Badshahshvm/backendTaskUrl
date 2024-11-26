Solution: URL Shortener API Design:-
Below is a high-level implementation plan to create the URL shortener backend service, fulfilling the specified requirements.

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
│ └── url.js
├── models/
│ └── Url.js
├── routes/
│ └── url.js
├── middlewares/
│ ├── rateLimiter.js
├── utils/
│ └── validateUrl.js
├── .env
├── app.js
├── package.json
├── README.md

models(Database designe):
Url.js

1.  originalUrl: String
2.  shortId: String
3.  clicks: Number
4.  lastAccessed: Date

rateLiiter.js is a middlewares , it is used to handle the client request.

Deployment on Render:-

1. Push code to a GitHub repository.
2. Connect the repository to Render/Railway/Vercel.
3. Set environment variables:
4. MONGOURI (MongoDB connection string)
5. BASE_URL :"https://backendtaskurl.onrender.com"

API Documentation:-

shortId creation Api:- POST("https://backendtaskurl.onrender.com/api/v1/url/shorten")
input:- orginalUrl ( ex:"https://example.com ")

redirect to originalUrl:- GET ("https://backendtaskurl.onrender.com/api/v1/url/shortId")
This endpoint takes a shortId as a URL parameter and redirects the user to the original URL associated with the given shortId.

get all the stats for URL:- GET ("https://backendtaskurl.onrender.com/api/v1/url/stats/shortId")
