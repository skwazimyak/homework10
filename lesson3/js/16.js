const number = prompt("Enter number of items in your list")
let list = []
for(let i = 0; i < number; i++){
    list.push(i)
}
document.write(list)