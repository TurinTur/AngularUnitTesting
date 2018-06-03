import { TodosComponent } from './06-services/todos.component';
import { Component } from '@angular/core';
import { TodoService } from './06-services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'app';


    constructor (){
      let service: TodoService= new TodoService(null);   // no nos interesa implemetnar un service real para un test
      let compo : TodosComponent = new TodosComponent(service);
      compo.ngOnInit();
        console.log(compo.todos);

    }
}
