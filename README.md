# MERN Bug Tracker (with Vite Frontend)

## Installation
- Clone repo: `git clone <your-repo>`
- Backend: `cd backend; npm install; npm run dev`
- Frontend: `cd frontend; npm install; npm run dev`
- MongoDB: Ensure running on localhost:27017.

## Running Tests
- Backend:   
    ```
    cd backend
    npm test
    ```
- Frontend: 
    ```
    cd frontend
    npm test
    ```

## Debugging Techniques
- Used console logs, Chrome DevTools for network/state, Node inspector.
- Introduced bugs like invalid req access and fixed via logs/inspector.
- Vite provides faster debugging with instant HMR.

## Testing Approach
- Backend: Unit tests for validation, integration for routes with mocks.
- Frontend: Unit for components, integration for API/UI using Jest + RTL.
- Coverage: Aim for >80% (check with -- --coverage).

## Error Handling
- Backend: Global middleware.
- Frontend: Error boundaries.