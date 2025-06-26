let urutan = 0;

function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  // Ambil data lama, jika ada
  let tasks = JSON.parse(localStorage.getItem("array")) || [];

  // Tambahkan tugas baru ke array
  tasks.push(taskText);

  // Simpan kembali ke localStorage
  localStorage.setItem("array", JSON.stringify(tasks));

  if (taskText === "") return;

  const hasil = JSON.parse(localStorage.getItem("array")) || [];

  // tasks.forEach((task, index) => {
  //   const li = document.createElement("li");
  //   li.textContent = task;
  //   taskList.appendChild(li);
  // });

  console.log(hasil)

  const taskList = document.getElementById("toDo");
  taskList.innerHTML = "";

  hasil.forEach((task,index) => {
    const li = document.createElement("li");
    // console.log(task);
    li.innerHTML = `
        ${task}
        <div class="flex gap-15 pl-5">
        <button onclick="completeTask(this)" class="cursor-pointer "><i class="fa-duotone fa-solid fa-check"></i></button>
        <button onclick="deleteTask(this)" class="cursor-pointer "><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
    li.classList.add(
      "flex",
      "justify-between",
      "uppercase",
      "text-md",
      "text-white",
      "p-3",
      "bg-indigo-600",
      "rounded-lg"
    );

    document.getElementById("toDo").appendChild(li);
  })

 
  input.value = "";
}

function completeTask(btn) {
  const line = btn.closest("li");
  line.classList.toggle("line-through");
}

function deleteTask(btn) {
  const line = btn.closest("li");
  line.remove();
}
