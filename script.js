let tasks = [];
let new_task = document.getElementById('new_task');
let submit = document.getElementById('submit_btn');
let task_list = document.querySelector('.task_list');
let warning = document.getElementById('warning');
function display() {
    task_list.innerHTML = '';
    tasks.forEach((task, index) => {
        let list_item = document.createElement('li');
        list_item.classList.add('li_flex');
        let task_text = document.createElement('span');
        task_text.textContent = task.Name;
        let checker = document.createElement('input');
        checker.type = ('checkbox');
        let delete_btn = document.createElement('button');
        delete_btn.textContent = 'Delete';
        delete_btn.classList.add('btn')
        delete_btn.addEventListener('click', function () {
            tasks.splice(index, 1);
            display();
        });
        checker.addEventListener('change', () => {
            let checker_value = checker.checked;
            task.checker = checker_value;
            if (checker_value) {
                task_text.style.color = '#5f5f5fff';
            }
            else {
                task_text.style.color= '#ffff';
            }
        })
        list_item.append(checker, task_text, delete_btn);
        task_list.append(list_item);
    })
}
submit.addEventListener('click', function () {
    if (new_task.value == '') {
        warning.innerHTML = 'Empty Field';
    }
    else {
        warning.innerHTML = '';
        tasks.push({ Name: new_task.value, checker: false });
        new_task.value = '';
        display();
    }

})

