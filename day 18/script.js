      function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskValue = taskInput.value.trim();

      if (taskValue === '') {
        alert('Please enter a task!');
        return;
      }

      const li = document.createElement('li');
      li.innerHTML = `
        <span>${taskValue}</span>
        <div>
          <button class="done-btn" onclick="markDone(this)">Done</button>
          <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
      `;

      document.getElementById('taskList').appendChild(li);
      taskInput.value = '';
    }

    function deleteTask(button) {
      button.parentElement.parentElement.remove();
    }

    function markDone(button) {
      const taskText = button.parentElement.parentElement.querySelector('span');
      taskText.classList.toggle('done');
    }
  