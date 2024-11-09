# Trivia Time

Welcome to **Trivia Time** – an engaging, full-stack trivia quiz application designed to challenge your knowledge across multiple categories. Built with Django for the backend and Vue.js for the frontend, this app allows users to test their knowledge, track their progress, and receive insightful feedback on their quiz performances.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [File Structure](#file-structure)
- [Future Enhancements](#future-enhancements)
- [Acknowledgments](#acknowledgments)

## Features

- **User Authentication**: Secure user registration and login system.
- **Profile Statistics**: Personalized stats tracking user performance by quiz category.
- **Quiz Categories and Randomization**: Users can choose from various quiz categories, and questions are randomly generated to provide a unique experience each time.
- **OpenAI-Powered Feedback**: After each quiz, users receive AI-generated feedback, helping them understand their strengths and areas for improvement.
- **JSON-based Quiz Storage**: For this prototype, quiz questions are stored in JSON files on the server for simplicity and fast access.

## Tech Stack

- **Frontend**: Vue.js
- **Backend**: Django
- **Programming Languages**: Python, JavaScript
- **Machine Learning (Optional)**: OpenAI API for feedback analysis
- **Database**: To be determined in future versions (currently using JSON for data storage)

## Project Setup

To get started with *Trivia Time*, clone this repository and follow these steps:

1. **Backend Setup (Django)**:
    - Create a virtual environment and install dependencies:
      ```bash
      python3 -m venv env
      source env/bin/activate
      pip install -r requirements.txt
      ```
    - Run Django migrations:
      ```bash
      python manage.py migrate
      ```
    - Start the Django development server:
      ```bash
      python manage.py runserver
      ```

2. **Frontend Setup (Vue.js)**:
    - Navigate to the frontend directory and install dependencies:
      ```bash
      cd frontend
      npm install
      ```
    - Start the Vue development server:
      ```bash
      npm run dev
      ```

## Future Enhancements

- **Database Integration**: Implement a robust database solution to replace JSON-based storage.
- **Real-Time Leaderboard**: Track and display top players in real-time.
- **Enhanced UI/UX**: Add animations and a more dynamic user experience.
- **Multiplayer Mode**: Allow multiple users to compete in real-time.
- **Additional ML Features**: Expand AI-powered feedback to include more advanced analytics.

## Acknowledgments

This project was developed as a learning exercise in full-stack development, particularly with Django and Vue.js. It is also intended to serve as a foundation for an internship focused on building educational platforms.

---

Enjoy playing and learning with **Trivia Time**! If you have any questions, suggestions, or issues, feel free to open an issue or submit a pull request.

3. **Environment Variables**:
   - For the OpenAI feedback feature, set up an OpenAI API key in the environment variables.
