import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, from, empty, throwError } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service= new TodoService(null);   // no nos interesa implemetnar un service real para un test
    component = new TodosComponent(service);
  });

  it('should set todo properties with the items from the server', () => {  
    let todos= [1,2,3];
    spyOn(service, 'getTodos').and.callFake(() => {  //spyOn permite intereceptar y controlar cualquier metodo, callFake permite reemplazar un método
      return from([todos] );
   
    }); 

    component.ngOnInit();   // Hay que recordar que los eventos normales de lifecycle no ocurriran en tests
    console.log(component.todos);
    expect(component.todos).toBe(todos);    
  });

  it('shoudl call the server to save changes when a new item is added', () =>{
    let spy=spyOn(service, 'add').and.callFake(t => {  
      return empty(Observable.create());
    }); 
    component.add();

    expect(spy).toHaveBeenCalled(); // con esto sabemos que un método ha sido llamado

  })

  it('shoudl add the new todo to the server', () =>{
    let todo = {id:1}
    let spy=spyOn(service, 'add').and.returnValue( from([todo]) )
        
    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1); // con esto sabemos que un método ha sido llamado

  })

  it('should set the message prop if server adds an error', () =>{
    let errorMsg= "error";
    let spy=spyOn(service, 'add').and.returnValue( throwError(errorMsg) )
        
    component.add();

    expect(component.message).toBe(errorMsg); // con esto sabemos que un método ha sido llamado

  })

  it('should call the server to delete item after confirm', () =>{
      spyOn(window, 'confirm').and.returnValue(true);
      let obs=Observable.create();
      let empt = empty(null);
      console.log(obs);
      console.log(empt);
      let spy = spyOn(service, 'delete').and.returnValue(obs);

      component.delete(1);

      expect(spy).toHaveBeenCalledWith(1);
  })

  it('should NOT call the server if click cancel', () =>{
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(empty(Observable.create()));

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
})
});