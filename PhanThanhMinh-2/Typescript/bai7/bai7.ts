import callAPI from './apiCaller.js';

callAPI()
  .then(data => console.log(data))
  .catch(error => console.log(error));