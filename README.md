MERN Stack Chat ApplicationA real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Socket.IO for real-time communication.
FeaturesReal-time messaging
User authentication (Login & Register)
Online/Offline status tracking
Group and one-on-one chats
Responsive UI
ScreenshotsLogin Page[Add Screenshot Here]
Register Page[Add Screenshot Here]
Home Page[Add Screenshot Here]
Installation GuidePrerequisitesMake sure you have the following installed:
Node.js (>= 16.x)
MongoDB
Git
Clone the Repositorygit clone https://github.com/your-username/mern-chat-app.git
cd mern-chat-appBackend Setupcd backend
npm installCreate a .env file in the backend directory with the following variables:MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000Run the backend server:
npm startFrontend Setupcd ../frontend
npm installCreate a .env file in the frontend directory with the following variable:REACT_APP_BACKEND_URL=http://localhost:5000Run the frontend server:
npm startRunning the ApplicationOnce both servers are running, open your browser and navigate to:
http://localhost:3000DeploymentFor deployment, you can use services like:
Frontend: Vercel, Netlify
Backend: Render, Heroku
Database: MongoDB Atlas
Tech StackFrontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Real-Time Communication: Socket.IO
Authentication: JWT, bcrypt
ContributingPull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
LicenseThis project is licensed under the MIT License.
