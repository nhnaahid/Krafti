
# Krafti

Welcome to the Wood and Jute Craft Store website! Our platform is dedicated to showcasing exquisite handcrafted products made from wood and jute. Whether you're looking for unique home decor items, stylish accessories, or thoughtful gifts, we have something special for everyone.

## Demo

- [Live Link](https://krafti-a97d7.web.app/)
- [Server Side](https://github.com/nhnaahid/Krafti-server)


# Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following installed:
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## Installation

1. **Clone & Install client dependencies:**

    ```bash
    git clone https://github.com/nhnaahid/Krafti.git
    cd your-client-repository
    npm install
    ```

2. **Clone & Install server dependencies:**

    ```bash
    git clone https://github.com/nhnaahid/Krafti-server.git
    cd your-server-repository
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env.local` file in the `client` directory and add the following:

    ```env
    VITE_apiKey=your_firebase_api_key
    VITE_authDomain=your_firebase_auth_domain
    VITE_projectId=your_firebase_project_id
    VITE_storageBucket=your_firebase_storage_bucket
    VITE_messagingSenderId=your_firebase_messaging_sender_id
    VITE_appId=your_firebase_app_id
    ```

    Create a `.env` file in the `server` directory and add the following:

    ```env
    DB_USER=mongodb_uri_user
    DB_PASS=mongodb_uri_pass
    ```

5. **Run the server:**

    ```bash
    cd your-server-repository
    nodemon index.js
    ```

6. **Run the client:**

    Open a new terminal window/tab and run:

    ```bash
    cd your-client-repository
    npm run dev
    ```

## Usage

Once the server and client are running, open your web browser and go to `http://localhost:5173` to view the application.


## Key Features

1. **Wide Range of Products**: Explore a diverse collection of handcrafted items including home decor, furniture, accessories, and more, all made from high-quality wood and jute materials.

2. **Secure Online Shopping**: Enjoy a safe and seamless shopping experience with secure login/sign up to profile.

4. **Community Engagement**: Join our vibrant community of craft enthusiasts to share ideas, experiences, and inspiration, fostering connections and collaboration among like-minded individuals.

5. **Regular Updates**: Stay informed about new product releases, promotions, and events through our newsletter and social media channels, ensuring you never miss out on the latest offerings.

6. **Mobile-Friendly Design**: Access our website seamlessly from any device, including smartphones and tablets, with a responsive design optimized for smooth navigation and functionality on all screen sizes.


## Tech Stack

### Frontend

- **React.js**
- **Tailwind CSS**

### Backend

- **Node.js**
- **Express.js**

### Database

- **MongoDB**

### Authentication

- **Firebase Authentication**

### Additional Tools and Packages

- **React Awesome reveal**
- **Swiper slider**
- **React-icons**
- **React-toastify**




