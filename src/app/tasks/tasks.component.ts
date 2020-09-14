import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [
    TaskService 
  ]
})

export class TasksComponent implements OnInit {
  public tasks: Array<Task>;
  public selectedTask: Task; // Define o tipo de variavel
  // private taskService: TaskService; // Define uma depencia

  constructor(private taskService: TaskService) { 
    // this.taskService = taskService;
  }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  public onSelect(task: Task): void {
    this.selectedTask = task;
  }
}

