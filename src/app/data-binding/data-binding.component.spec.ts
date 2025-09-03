import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingComponent } from './data-binding.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


// Test 2: Check default values
  it('should have initial num1, num2 and sum as 0', () => {
    expect(component.num1).toBe(0);
    expect(component.num2).toBe(0);
    expect(component.sum).toBe(0);
  });

  // Test 3: addition() should add num1 and num2 correctly
  it('should correctly add num1 and num2 when addition() is called', () => {
    component.num1 = 10;
    component.num2 = 20;
    component.addition();
    expect(component.sum).toBe(30);
  });

  // Test 4: should render sum correctly in template
  it('should render sum in h5 tag', () => {
    component.num1 = 5;
    component.num2 = 15;
    component.addition();
    fixture.detectChanges();
    const sumElement = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(sumElement.textContent).toContain('20');
  });

  // Test 5: Add button should be disabled if num1 or num2 is falsy (e.g. 0)
  it('should disable Add button when num1 or num2 is 0', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.disabled).toBeTrue();

    component.num1 = 10;
    component.num2 = 0;
    fixture.detectChanges();
    expect(button.disabled).toBeTrue();

    component.num2 = 5;
    fixture.detectChanges();
    expect(button.disabled).toBeFalse();
  });

  // Test 6: Button click should trigger addition()
  it('should call addition() when button is clicked', () => {
    spyOn(component, 'addition');
    component.num1 = 3;
    component.num2 = 2;
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(component.addition).toHaveBeenCalled();
  });

});
