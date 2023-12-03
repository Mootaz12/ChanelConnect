# Subscribers API

This API serves as a subscriber management system, offering endpoints to handle CRUD (Create, Read, Update, Delete) operations for subscribers.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up a MongoDB instance.
4. Create a `.env` file and add necessary environment variables (e.g., `DATABASE_URL`).
5. Run the server using `npm start`.

## Usage

### Endpoints

#### Get all subscribers

- `GET /subscribers`

#### Get a specific subscriber

- `GET /subscribers/:id`

#### Create a new subscriber

- `POST /subscribers`
  - Request Body: `{ "name": "Subscriber Name", "subscribedChanel": "Channel" }`

#### Update a subscriber

- `PATCH /subscribers/:id`
  - Request Body (optional): `{ "name": "New Name", "subscribedChanel": "New Channel" }`

#### Delete a subscriber

- `DELETE /subscribers/:id`

### Middleware

- `getSubscriber`: Fetches a subscriber by ID for specified routes.

## Contributing

Feel free to contribute by opening issues or submitting pull requests.
