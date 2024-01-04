class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      return this.stack.push(item);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    peek() {
      return this.stack[this.length - 1];
    }
  
    get length() {
      return this.stack.length;
    }
  
    isEmpty() {
      return this.length === 0;
    }
}

let m2 = ['s', 'n', 'o', 'i', 't', 'c', 'e', 'n', 'n', 'o', 'c', ' ', 'f', 'o', ' ', 'l', 'l', 'u', 'f', ' ', 'o', 's', 'l', 'a', ' ', 's', 'i', ' ', 't', 'i', ' ', 't', 'u', 'b', ' ', ',', 's', 'e', 'c', 'n', 'e', 'd', 'i', 'c', 'n', 'i', 'o', 'c', ' ', 'f', 'o', ' ', 'l', 'l', 'u', 'f', ' ', 's', 'i', ' ', 'e', 's', 'r', 'e', 'v', 'i', 'n', 'u', ' ', 'e', 'h', 'T'];
var st = new Stack()
for(let i=0; i<m2.length; i++) {
    st.push(m2[i])
}

let temp = []

for(let i=0; i<m2.length; i++) {
    let t = st.pop();
    temp.push(t)
}

console.log(temp)