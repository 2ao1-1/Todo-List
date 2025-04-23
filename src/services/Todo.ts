// import { Task, TodoList } from "../types/alltypes";
// import { getUserData, saveUserData } from "./localStorage";

// // get all todos
// export const getAllTodoLists = (email: string): TodoList[] => {
//   const userData = getUserData(email);
//   return userData?.todoLists || [];
// };

// // create todolist
// export const createTodoList = (
//   email: string,
//   text: string,
//   icon: string = "📝",
//   tasks: Task[] = []
// ): TodoList => {
//   const userData = getUserData(email);
//   if (!userData) throw new Error("User not found");

//   const newList: TodoList = {
//     id: Date.now().toString(),
//     text,
//     icon,
//     tasks: [...tasks],
//     completed: false,
//   };

//   console.log(userData);
//   userData.todoLists.push(newList);
//   saveUserData(userData);
//   console.log(userData);

//   return newList;
// };

// // update todolist
// export const updateTodoList = (
//   email: string,
//   listId: string,
//   updates: Partial<TodoList>
// ): TodoList => {
//   const userData = getUserData(email);
//   if (!userData) throw new Error("User not found");

//   const list = userData.todoLists.find((l) => l.id === listId);
//   if (!list) throw new Error("Todo list not found");

//   Object.assign(list, updates);
//   saveUserData(userData);

//   return list;
// };

// // delete todo list
// export const deleteTodoList = (email: string, listId: string): void => {
//   const userData = getUserData(email);
//   if (!userData) throw new Error("User not found");

//   userData.todoLists = userData.todoLists.filter((l) => l.id !== listId);
//   saveUserData(userData);
// };

// export const addTask = (
//   email: string,
//   listId: number,
//   taskText: string
// ): Task => {
//   const userData = getUserData(email);
//   if (!userData) throw new Error("User not found");

//   const list = userData.todoLists.find((l) => l.id === listId);
//   if (!list) throw new Error("Todo list not found");

//   const newTask: Task = {
//     id: `task_${Date.now()}`,
//     text: taskText,
//     completed: false,
//   };

//   list.tasks.push(newTask);
//   saveUserData(userData);

//   return newTask;
// };

// export const updateTask = (
//   email: string,
//   listId: number,
//   taskId: string,
//   updates: Partial<Task>
// ): Task => {
//   const userData = getUserData(email);
//   if (!userData) throw new Error("User not found");

//   const list = userData.todoLists.find((l) => l.id === listId);
//   if (!list) throw new Error("Todo list not found");

//   const task = list.tasks.find((t) => t.id === taskId);
//   if (!task) throw new Error("Task not found");

//   Object.assign(task, updates);
//   saveUserData(userData);

//   return task;
// };

// export const deleteTask = (
//   email: string,
//   listId: number,
//   taskId: string
// ): void => {
//   const userData = getUserData(email);
//   if (!userData) throw new Error("User not found");

//   const list = userData.todoLists.find((l) => l.id === listId);
//   if (!list) throw new Error("Todo list not found");

//   list.tasks = list.tasks.filter((t) => t.id !== taskId);
//   saveUserData(userData);
// };
