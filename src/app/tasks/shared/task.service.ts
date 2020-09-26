import { Injectable } from '@angular/core';

import { Task } from './task.model';

const TASKS: Array<Task> = [
  { id: 1, title: 'Fazer tarefa 1' },
  { id: 2, title: 'Fazer tarefa 2' },
  { id: 3, title: 'Fazer tarefa 3' },
  { id: 4, title: 'Fazer tarefa 4' },
  { id: 5, title: 'Fazer tarefa 5' },     
  { id: 6, title: 'Fazer tarefa 5' },
  { id: 7, title: 'Fazer tarefa 6' }
];

@Injectable()

export class TaskService {
  // Retorna uma promise de um array de tarefas
  public getTasks(): Promise<Task[]>{
    let promise = new Promise((resolve, reject) => {
      if(TASKS.length > 0){
      	resolve(TASKS); // retorno com sucesso
      }else{
	      let error = "Não há tarefas";
	      reject(error);
        }
    })

    return promise;
  }

  public getImportantTasks(): Promise<Task[]> {
    return Promise.resolve(TASKS.slice(0, 3));
  }
}

