import fetch from 'node-fetch';

async function callAPI(): Promise<any> {
  try {
    const response = await fetch('https://github.com/typicode/json-server)');
    const data = await response.json();
    return data;
  } catch (error : any) {
    throw new Error(error);
  }
}

export default callAPI;