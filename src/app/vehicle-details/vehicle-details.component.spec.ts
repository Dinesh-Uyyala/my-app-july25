import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { VehicleDetailsComponent } from './vehicle-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('VehicleDetailsComponent', () => {
  let component: VehicleDetailsComponent;
  let fixture: ComponentFixture<VehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsComponent],
      imports:[RouterTestingModule,HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
