# Web Application README

This web application consists of a login page (index.html) and a home page (home.html). Users can log in with the following credentials:

- **Email:** sample@gmail.com
  - **Password:** 1234

- **Email:** sample1@gmail.com
  - **Password:** 9876

## Features

### Login Page 

- Two input fields for user email and password.
- A login button that sends a request to the backend.
- User credentials are validated using a JSON file.

#### Sample JSON file data

```json
[
    {"email_id": "sample@gmail.com", "password": "1234"},
    {"email_id": "sample1@gmail.com", "password": "9876"}
]
