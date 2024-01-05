async function callApi(url: string): Promise<any> {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  }

const data = await callApi("http://localhost:3000/todos/1");
console.log(data);
  
  
