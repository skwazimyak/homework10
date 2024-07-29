const number = prompt("Enter number of items in your list")
let list = []
for(let i = 0; i < number; i++){
    list.push(i)
    i % 2 === 1 ? document.write(`<span style="background-color: red;">${i}</span>`):document.write(`<p>${i}</p>`)
}