

function addTask() {
    let task = document.getElementById('taskInput').value;
    let box = document.getElementById('box');
    let miss = document.getElementById('error');
    if (task === "") {
        miss.innerText = "Please enter task";
    }
    else {
        let li = document.createElement('li');
        li.textContent = task;

        let pos = box.firstElementChild;

        let a = document.createElement('a');
        a.textContent = "X";
        a.href = "javascript:void(0)";
        a.className = "remove";
        li.appendChild(a);
        if (pos == null) {
            box.appendChild(li);
        } else {
            box.insertBefore(li, pos);
        }
    }
    document.getElementById('taskInput').value = "";
}

let btn = document.querySelector('ul');
btn.addEventListener('click', function (e) {
    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
})