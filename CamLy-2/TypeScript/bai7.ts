import fetch from 'node-fetch';
async function log(){
    let url:string = "http://localhost:3000/employees";
    const response = await fetch(url).then((response) => {
        return response.json();
    });
    //onst employees = await response.json();
    console.log(response);
}

log();