import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { By } from '@angular/platform-browser';

// Stub for the child component
@Component({
  selector: 'app-child',
  template: ''
})
class MockChildComponent {
  @Input() num1!: number;
  @Output() numEvent = new EventEmitter<number>();
}

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent , MockChildComponent
      ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default parent and child values', () => {
    expect(component.parent).toBe(0);
    expect(component.child).toBe(0);
  });

  it('should render "parent works!" text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('parent works!');
  });

  it('should bind input value to parent property using ngModel', async () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = '42';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.parent).toBe(42);
  });

  it('should display the child value in h3 tag', () => {
    component.child = 99;
    fixture.detectChanges();

    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toBe('99');
  });

  it('should update child when catch() is called with emitted value', () => {
    const mockValue = 123;
    component.catch(mockValue);
    expect(component.child).toBe(mockValue);
  });

  it('should receive numEvent from child and call catch()', () => {
    const childDebug = fixture.debugElement.query(By.directive(MockChildComponent));
    const childComponent = childDebug.componentInstance as MockChildComponent;

    const spy = spyOn(component, 'catch').and.callThrough();
    childComponent.numEvent.emit(55);

    expect(spy).toHaveBeenCalledWith(55);
    expect(component.child).toBe(55);
  });

  it('should pass parent value as input to child component', () => {
    component.parent = 77;
    fixture.detectChanges();

    const childDebug = fixture.debugElement.query(By.directive(MockChildComponent));
    const childComponent = childDebug.componentInstance as MockChildComponent;

    expect(childComponent.num1).toBe(77);
  });

  it('should initialize userDetails correctly', () => {
    expect(component.userDetails).toEqual({
      name: 'Dinesh',
      mobile: 9849808937,
      isIndian: true
    });
  });
});
