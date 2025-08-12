const users = [];
let new_task = document.getElementById('new_task');
let submit = document.getElementById('submit_btn');
let task_list = document.querySelector('.task_list');
let warning = document.getElementById('warning');

submit.addEventListener('click', function () {
    if (new_task.value == '') {
        warning.innerHTML = 'Empty Field';
    }
    else {
        warning.innerHTML = '';
        let list_item = document.createElement('li');
        list_item.classList.add('li_flex');
        let task_text = document.createElement('span');
        task_text.textContent = new_task.value;
        let checker = document.createElement('input');
        checker.type = ('checkbox');
        let delete_btn = document.createElement('button');
        delete_btn.textContent = 'Delete';
        delete_btn.classList.add('btn')
        delete_btn.addEventListener('click', function () {
            list_item.remove();
            users.pop();
        });
        list_item.append(checker, task_text, delete_btn);
        task_list.append(list_item);
        users.push({ task: new_task.value, checker: false });
        new_task.value = '';
    }
})