let a = 0;
let b = 1;
let count = 10;
console.log(a);
console.log(b);
for (let i=2;i<count;i++) {
    let next = a+b;
    console.log(next);
    a = b;
    b = next;
}