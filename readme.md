# ClassCapture
A professional tool for capturing, organizing, and managing classroom lectures and digital notes.
##  About the Project 

Class-Capture is an intelligent EdTech platform designed to bridge the gap between static classroom whiteboard photos and active learning using Google Gemini AI. By leveraging advanced vision models, the system converts messy, unorganized lecture snapshots into structured digital notes and actionable summaries. Beyond simple digitization, it ensures material mastery by automatically generating interactive practice quizzes and flashcards directly from the captured content. All data is securely hosted on a centralized Firebase cloud workspace, transforming buried gallery images into a searchable and accessible academic knowledge base.
## Table of Content 
* [About the Project](#about-the-project)
* [Problem Statement](#problem-statement)
* [Our Solution](#our-solution)
* [Key Features](#key-features)
* [Technology Stack](#technology-stack)
* [System Architecture](#system-architecture)
* [Installation and Setup](#installation-and-setup)

## Problem Statement 
In today’s classrooms, it’s common for students to take photos of whiteboards and handwritten notes to keep up with fast-paced lectures. However, these photos often end up getting lost in a cluttered phone gallery, mixed in with personal pictures and screenshots. This creates a major problem when it comes time to study, as these images are difficult to find and impossible to search through. Because the information is trapped in a static image, students can’t easily copy text or formulas, and the lack of interaction with the material often means they forget what was on the board shortly after the class ends.
## Our Solution
ClassCapture is a simple yet powerful tool that turns your lecture photos into organized, digital study guides. Using the latest AI technology, our app reads your whiteboard photos including messy handwriting and complex math and converts them into clean, searchable text. To help you actually learn the material instead of just saving it, the app automatically creates personalized practice quizzes based on your notes. By moving your academic photos into a secure, organized space, ClassCapture ensures your lecture notes are always easy to find, easy to read, and ready to help you succeed.
## Key Features
* Intelligent Capture: High-fidelity OCR specifically tuned for classroom environments and diverse handwriting styles.
* AI Summarization: Instant extraction of key concepts using Gemini 1.5 Flash.
* Interactive Quizzes: Automated generation of practice questions to ensure material mastery.
* Cloud Workspace: Centralized storage hosted on Firebase for easy access.
## Technology Stack
* Frontend: React.js, Tailwind CSS, Framer Motion.
* Backend: Python, FastAPI, Axios.
* AI Engine: Google Gemini 1.5 Pro & Flash.
* Database: Firebase Authentication & Firestore.
## System Architecture 
The project uses a decoupled architecture where a React dashboard sends data via secure POST requests to a FastAPI gateway, which then queries Google Gemini models based on the current load.
## Installation and Setup
1 Prerequisites
* VS Code (Recommended Editor) 
* Python 3.9+ (For the Backend) 
* Node.js & npm (For the Frontend)
   
2 Clone the Repository
* code: git clone https://github.com/farahsayyed26/ClassCapture.git

   cd class-capture

3 Backend Setup(FastAPI)
* Open the project folder in VS Code.
* Open a new terminal in VS Code and navigate to the backend directory: (cd backend)
* Create a virtual environment: (python -m venv venv)
* Activate the virtual environment:

  (Windows: venv\Scripts\activate)

  (Mac/Linux: source venv/bin/activate)
* Install dependencies: (pip install -r requirements.txt)
* Start the backend server: (uvicorn main:app --reload)

4 Frontend Setup (React)
* Open a second terminal in VS Code (Keep the backend running).
* Navigate to the frontend directory: (cd my-app)
* Install the necessary packages: (npm install)
* Start the React development server: (npm run dev)

5 Usage
* Once both servers are running, open your browser to http://localhost:3000.
* Drag and drop a whiteboard photo into the "Drop Zone".
* Wait for the Gemini AI to process the notes and generate your quiz.


  
