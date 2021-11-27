export const REACT_API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://pern-backend-ecommerce.herokuapp.com/'
    : 'http://localhost:5000/'
