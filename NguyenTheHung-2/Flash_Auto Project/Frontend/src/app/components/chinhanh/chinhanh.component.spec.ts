import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhanhComponent } from './chinhanh.component';

describe('ChinhanhComponent', () => {
  let component: ChinhanhComponent;
  let fixture: ComponentFixture<ChinhanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChinhanhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChinhanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
