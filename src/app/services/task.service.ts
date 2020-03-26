import { Injectable } from "@angular/core";
import { Tasks } from "./interfaces";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  myTasks = [];

  constructor() {
    this.myTasks[0] = { name: "jorge", completed: false };
  }

  getTasks() {
    return this.myTasks;
  }

  addTask(task) {
    this.myTasks.push(task);
  }

  deleteTask(id:number) {
    this.myTasks.splice(id,1);
  }

  markAsCompleted(id, completed) {
    var task = this.myTasks[id];
    task.completed = completed;
    this.myTasks[id] = task;
  }

  editTask() {}
}
