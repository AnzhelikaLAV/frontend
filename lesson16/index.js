//Этот код реализует простой список дел (todo list) на веб-странице с возможностью добавления новых элементов и удаления существующих.

//Код использует document.getElementById и document.getElementsByClassName для доступа к элементам DOM на странице и управления ими.


// Инициализация переменных и функций todoItems: Это массив, который содержит элементы списка дел.
// Каждый элемент представлен объектом с полями id(уникальный идентификатор), name(название дела) и isDone(флаг выполнения).

let todoItems = [
  // { id: '1', name: 'Купить молоко1', isDone: false },
  // { id: '2', name: 'Купить молоко2', isDone: false },
  // { id: '3', name: 'Купить молоко3', isDone: false },
];

// Рендеринг списка дел (showTodoItems())
// Эта функция выполняет следующие действия:

//     Получает элемент DOM с id todo-list-items (предположительно это контейнер для списка дел).
//     Очищает содержимое этого элемента.
//     Итерирует по массиву todoItems.
//     Для каждого элемента массива создает HTML-разметку с помощью шаблонной строки.
//     Добавляет созданный HTML-код в переменную divTodoHtml.
//     После завершения итераций, устанавливает содержимое контейнера todo-list-items равным divTodoHtml, тем самым обновляя отображение списка дел на странице.
const showTodoItems = () => {
  //отвечает за отображение задач на странице. Она вызывается каждый раз, когда нужно обновить отображение списка задач.

  //Вывод списка задач
  const todoItemsListHtml = document.getElementById("todo-list-items");
  todoItemsListHtml.innerHTML = ""; //получает элемент списка задач из DOM и очищает его содержимое

  //Перебор элементов массива todoItems и формирование HTML-разметки:
  // каждый элемент массива todoItems преобразуется в HTML-код, представляющий задачу, и добавляется к строке divTodoHtml.
  let divTodoHtml = "";

  for (let item of todoItems) {
    const todoItemHtml = `
                <div class="todo-item">
                    <p>${item.name}</p>
                    <button class="delete-todo-item" data-todo-id="${item.id}" >удалить</button>
                </div>
            `;

    // todoItemsListHtml.innerHTML = todoItemsListHtml.innerHTML + todoItemHtml;
    divTodoHtml += todoItemHtml;
  }
  //Установка HTML-разметки в элемент списка задач:
  //После того как вся HTML-разметка сформирована, она устанавливается в элемент списка задач.
  todoItemsListHtml.innerHTML = divTodoHtml;

  //Добавление обработчиков событий на кнопки удаления задач  на все кнопки удаления задач.
  //При нажатии на кнопку вызывается функция deleteTodoItem, чтобы удалить задачу, и затем вызывается showTodoItems
  //для обновления отображения списка задач.

  //     deleteTodoItem(id): Это функция, которая удаляет элемент из массива todoItems по его id.
  const deleteTodoButtons = document.getElementsByClassName("delete-todo-item");

  for (let btn of deleteTodoButtons) {
    btn.addEventListener("click", (e) => {
      todoItems = deleteTodoItem(e.target.dataset.todoId);
      showTodoItems();
    });
  }
};

// showTodoItems();

//    Для каждой кнопки "удалить" (класс delete-todo-item), добавляется слушатель события click.
//     При нажатии на кнопку "удалить", вызывается функция deleteTodoItem(id) для удаления соответствующего элемента из массива todoItems.
//     После удаления элемента вызывается showTodoItems(), чтобы обновить список дел на странице.

//функция удаляет задачу из массива todoItems, используя метод filter.
//Она принимает идентификатор задачи в качестве аргумента и возвращает новый массив без задачи с указанным идентификатором.
const deleteTodoItem = (id) => {
  const res = todoItems.filter((item) => item.id.toString() !== id);
  return res;
};

// --------------
// Добавление нового элемента

//     addTodo(): Эта функция вызывается при нажатии на кнопку "Добавить".
//     Создает новый объект newTodo с уникальным id, указанным именем todoName и флагом isDone равным false.
//     Добавляет новый объект в массив todoItems.
//     Затем вызывает showTodoItems(), чтобы отобразить обновленный список дел на странице.

// Обработчики событий для добавления нового элемента

//     Находит кнопку "Добавить" (addTodoBtn) и поле ввода (addTodoInput).
//     При нажатии на кнопку "Добавить" вызывается функция addTodo() с текстом, введенным в поле addTodoInput.

// добавить новый элемент todo функция добавляет новую задачу в массив todoItems,
//используя случайно сгенерированный идентификатор.Затем она вызывает showTodoItems для обновления отображения списка задач.


//     addTodo(): Эта функция добавляет новый элемент в массив todoItems.
const addTodo = (todoName = "") => {
  const newTodo = { id: Math.random(), name: todoName, isDone: false };
  console.log(newTodo);
  todoItems.push(newTodo);
  showTodoItems();
};

//Обработчик события для кнопки добавления задачи При нажатии на кнопку вызывается функция addTodo,
//которая добавляет новую задачу в список.

const addTodoBtn = document.getElementById("add-todo-btn");
const addTodoInput = document.getElementById("add-todo-input");
addTodoBtn.addEventListener("click", () => {
  const newTodoName = addTodoInput.value;
  addTodo(newTodoName);
});
