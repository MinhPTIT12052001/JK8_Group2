import fetch from 'node-fetch';

interface User {
  id: number;
  name: string;
}

function callAPI(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
  });
}

// Gọi hàm callAPI và xử lý kết quả
callAPI()
    .then(data => console.log(data))
    .catch(error => console.log(error));
