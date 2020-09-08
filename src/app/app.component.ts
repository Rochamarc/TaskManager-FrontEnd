import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gerenciador de Tarefas';

  task: Task = new Task(21, "Programar em Angular")
}

export class Task{
  public id: number;
  public title: string;

  // Crio um construtor
  // Ja estudei POO nao, se nao precisa de explicaçao pra isso
  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }
}

