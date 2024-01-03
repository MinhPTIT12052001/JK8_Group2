// Bài tập buổi 1:
// Bài 1:
// Viết ctr cho phép nhập vào thông tin cá nhân bao gồm:
// Họ tên, tuổi, số điện thoại và sau đó in các thông tin này ra trên màn hình console
// Bài 2: viết chương trình cho phép nhập vào chiều cao chiều dài và chiều rộng của hình hộp chữ nhật,
// sau đó tính và in ra diện tích toàn phần (6 mặt) của hình hộp chữ nhật này.
// Bài 3: Trả lời câu hỏi
// – Có mấy kiểu nguyên thủy tất cả? Kể tên các kiểu nguyên thủy này.
// – Làm thế nào để xem được kiểu của một biến?
// – let với var khác nhau như thế nào?
// – khi nào thì dùng const?
// – kiểu object là kiểu tham chiếu hay tham trị?
// – number là kiểu tham chiếu hay tham trị?


function find_square_number(n){

    let flag = 0;
    let i = 0;
    while(i <= n){
        if( Math.pow( i, 2) == n ) {   
            flag = 1;
            break; 
        }
        i++;
    }
    return flag;
}
let n= prompt("Nhập số tự nhiên n: ");
let check = find_square_number(n);

if( check == 1 ) console.log(n + "là số chính phương");
else console.log(n + " không phải là số chính phương");
