import { Injectable } from "@angular/core";
import { Tasks } from "./interfaces";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  myTasks;

  constructor() {
    var local = localStorage.getItem('tasks');
    this.myTasks = local != null ? JSON.parse(local): [];
  }

  saveToLocal(){
    localStorage.setItem('tasks',JSON.stringify(this.myTasks))
  }

  addTask(task) {
    this.myTasks.push(task);
    this.saveToLocal();
  }

  deleteTask(id:number) {
    this.myTasks.splice(id,1);
    this.saveToLocal();
  }

  markAsCompleted(id, completed) {
    var task = this.myTasks[id];
    task.completed = completed;
    this.myTasks[id] = task;
    this.saveToLocal();
  }

  editTask() {}
}
