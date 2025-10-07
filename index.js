const save = document.querySelector(".save");
const increment = document.querySelector(".increment");
const result = document.querySelector(".result");

const log = document.querySelector("#log");
let count = 0;
increment.addEventListener("click", countThePass);
function countThePass () {
    count ++;
    result.textContent = count;
}

save.addEventListener("click", () => {
    log.textContent += count+" - ";
    result.textContent = 0;
    count = 0;
});

