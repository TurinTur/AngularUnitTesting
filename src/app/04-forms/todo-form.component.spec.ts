import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component  = new TodoFormComponent(new FormBuilder);
  });

  it('it should create a form witih 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('it should make the name control required', () => {
    const control =component.form.get('name')
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
