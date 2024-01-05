class QuanAo {
    id: number;
    ten: string;
    mau: string;

    constructor(id: number, ten: string, mau: string) {
        this.id = id;
        this.ten = ten;
        this.mau = mau;
    }
}


interface APIResponse {
    // Định nghĩa cấu trúc của dữ liệu từ API (tùy thuộc vào API cụ thể)
    data: any;
    status: number;
}

function callAPIbyPromise(url: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Giải quyết Promise với dữ liệu từ API và status
                resolve({ data, status: 200 });
            })
            .catch(error => {
                // Đẩy lỗi qua Promise để xử lý ở phần catch
                reject(error);
            });
    });
}

const callApiByAsysAwait = async (url : string) : Promise<APIResponse> => {
        const response = await fetch(url);
        const data = await response.json();
        return {data, status: 200}

}


// Sử dụng hàm callAPI
callApiByAsysAwait("http://localhost:3000/QuanAo")
    .then(result => {
        console.log("API data:", result.data);
        console.log("API status:", result.status);
    })
    .catch(error => {
        console.error("Error calling API:", error);
    });
