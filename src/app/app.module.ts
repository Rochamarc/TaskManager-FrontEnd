import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
