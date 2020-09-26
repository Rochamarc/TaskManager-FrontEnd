import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import "rxjs/add/operator/switchMap";

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit {
  public task: Task;

  public constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ){ }

  public ngOnInit() {
    // recupero os parametros da minha application
    this.route.params
      // Fazendo uma requisiçao para depois entrar no subscribe mantendo a ordem
      .switchMap((params: Params) => this.taskService.getTask(+params['id'])) // retorna uma Promise<Task> mas o switchmap pass pro subscribe como um observable Observable<Task>
      // Logo o subscribe recebe um task, ja que a maneira de acessar um observable é com o subscribe 
      .subscribe(task => this.task = task)    
  }
}
