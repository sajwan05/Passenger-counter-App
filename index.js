const save = document.querySelector(".save");
const increment = document.querySelector(".increment");
const result = document.querySelector(".result");
let count = 0;
increment.addEventListener("click", countThePass);
function countThePass () {
    count ++;
    result.textContent = count;
}

