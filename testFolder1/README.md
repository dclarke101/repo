# Playlist Manager

A full-stack CRUD web application for managing song playlists with Angular frontend and Spring Boot backend.

## Project Structure

```
├── backend/      - Spring Boot REST API
└── frontend/     - Angular web application
```

## Features

- Add, edit, and delete songs
- Sort songs by title or artist
- In-memory H2 database (no persistence between restarts)
- Clean, responsive UI with green and orange theme

## Prerequisites

- Java 17+ (for backend)
- Node.js 18+ (for frontend)
- Maven 3.6+ (for building backend)

## Running the Application

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Build and run the Spring Boot application:
```bash
mvn clean install
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

Backend endpoints:
- `GET /api/songs` - Get all songs
- `GET /api/songs?sort=title` - Get songs sorted by title
- `GET /api/songs?sort=artist` - Get songs sorted by artist
- `GET /api/songs/{id}` - Get a specific song
- `POST /api/songs` - Create a new song
- `PUT /api/songs/{id}` - Update a song
- `DELETE /api/songs/{id}` - Delete a song

### 2. Frontend Setup

In a new terminal, navigate to the frontend directory:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

The frontend will start on `http://localhost:4200`

## Usage

1. Open `http://localhost:4200` in your browser
2. Click "+ Add Song" to create a new song
3. Enter the song title and artist name
4. Use the sort dropdown to organize songs by title or artist
5. Click "Edit" to modify a song's details
6. Click "Delete" to remove a song

## Database

The application uses an in-memory H2 database which means:
- Data is stored during the current session
- Data is lost when the backend restarts
- To view the H2 console, visit `http://localhost:8080/h2-console` (username: sa, no password)

## API Response Example

### Create Song
```json
POST /api/songs
{
  "title": "Bohemian Rhapsody",
  "artist": "Queen"
}
```

Response:
```json
{
  "id": 1,
  "title": "Bohemian Rhapsody",
  "artist": "Queen"
}
```

## Stopping the Application

- **Backend**: Press `Ctrl+C` in the terminal running `mvn spring-boot:run`
- **Frontend**: Press `Ctrl+C` in the terminal running `npm start`
