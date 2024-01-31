import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhanhManagementComponent } from './chinhanh-management.component';

describe('ChinhanhManagementComponent', () => {
  let component: ChinhanhManagementComponent;
  let fixture: ComponentFixture<ChinhanhManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChinhanhManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChinhanhManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
