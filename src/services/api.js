import axios from 'axios';




const api = axios.create({

  baseURL: 'http://quiz-arther.herokuapp.com'
});

export default api;