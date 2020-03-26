import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  ngOnInit(): void {
  }

  markAsCompleted(e, id:number){
    this.taskService.markAsCompleted(id,e.target.checked);
    console.log(e.target.checked, id)
  }

  delete(id:number){
    this.taskService.deleteTask(id);
  }
}
