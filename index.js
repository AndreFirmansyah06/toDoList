function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  let urutan = parseInt(localStorage.getItem("taskCounter")) || 0;

  urutan++;

  // Simpan kembali ke localStorage
  localStorage.setItem("taskCounter", urutan);
  localStorage.setItem(urutan, taskText);

  if (taskText === "") return;

  input.value = "";

  tampilkanTask();
}

function tampilkanTask() {
  // Ambil data urutan terakhir di LocalStorage
  const total = parseInt(localStorage.getItem("taskCounter")) || 0;
  const list = document.getElementById("toDo");
  list.innerHTML = "";

  // Perulangan Untuk Menampilkan Data
  for (let i = 1; i <= total; i++) {
    const task = localStorage.getItem(i);
    if (task) {
      const li = document.createElement("li");

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
    }
  }
}

function completeTask(btn) {
  const line = btn.closest("li");
  line.classList.toggle("line-through");
}

function deleteTask(btn) {
  // Ambil elemen <li> induknya dari tombol yang diklik
  const li = btn.closest("li");
  const taskText = li.firstChild.textContent.trim(); // ambil teks dari task

  const total = parseInt(localStorage.getItem("taskCounter")) || 0;

  // Loop cari key mana yang punya isi task tersebut
  for (let i = 1; i <= total; i++) {
    const task = localStorage.getItem(i);
    if (task === taskText) {
      localStorage.removeItem(i);
      break;
    }
  }

  tampilkanTask();
}

tampilkanTask();
