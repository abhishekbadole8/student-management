# Student and Task Management API

This API provides functionalities for managing students and tasks. It allows administrators to create student profiles, assign tasks, and manage task status updates. Students can view their assigned tasks and update the status of tasks to "completed."

## Table of Contents

- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Error Responses](#error-responses)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To set up this API locally or deploy it, follow the instructions in the Installation Guide Below.

### Installation Guide

1. Clone this repository.
2. Install the required dependencies using `npm install`.
3. Configure your environment variables. Create a `.env` file and set the necessary variables (e.g., `PORT`, `MONGOOSE_CONNECTION`, `ACCESS_TOKEN_SECERT`).
4. Run the API using `npm start`.
5. The API will be available at `http://localhost:YOUR_PORT`.

## API Endpoints

### Student Management

- **Create Student**: Admins can add students with their name, email, department, and password.
- **Get Student Tasks**: Students can view tasks assigned to them and their current status.
- **Update Task Status**: Students have the ability to update the status of their tasks to "completed."

### Task Management

- **Assign Task**: Admins can assign tasks to students, specifying descriptions, due dates, and with department.
- **Get Task**: Students can access details of specific tasks by their IDs.

For a detailed list of API endpoints, see the [API Documentation](https://documenter.getpostman.com/view/26217443/2s9YRDyAHM#7535fd87-5793-4efb-827c-79aabe90233a).

## Authentication

To access most endpoints in this collection, you need to provide authentication. Admins and students have different levels of access:

- Admin Authentication: Some endpoints require admin-level authentication. For these endpoints, use an admin JWT token in the Authorization header.
- Student Authentication: Certain endpoints are designed for student-level actions. For these endpoints, use a student JWT token in the Authorization header.

## Error Responses

This API provides detailed error responses to guide users when issues occur. Common error responses include:
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

For a full list of error responses, see the [API Documentation](https://documenter.getpostman.com/view/26217443/2s9YRDyAHM#7535fd87-5793-4efb-827c-79aabe90233a).

## Usage

To use this API, follow these steps:

1. Choose an endpoint from the collection.
2. Set the appropriate headers, including Authorization for authentication.
3. Execute the request.
4. Review the response to confirm the outcome.

Important Notes:

- Keep your JWT tokens secure and do not share them publicly.
- Admin and student tokens are used for different levels of access, so be mindful of which token you're using.

## API Documentation

Detailed API documentation, including each endpoint's request, response, and error scenarios, is available in the [API Documentation](https://documenter.getpostman.com/view/26217443/2s9YRDyAHM#7535fd87-5793-4efb-827c-79aabe90233a) file.

