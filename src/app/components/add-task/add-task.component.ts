import { Component, OnInit } from "@angular/core";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"]
})
export class AddTaskComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  Add(task:string) {
    if (task.trim() != '') {
      this.taskService.addTask({ name: task, completed: false });
    }
  }

  onKeydown(event, task) {
    if (event.key === "Enter") {
      this.Add(task.value);
      task.value='';
    }
  }
}
