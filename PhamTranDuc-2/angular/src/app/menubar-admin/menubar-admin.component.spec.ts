import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarAdminComponent } from './menubar-admin.component';

describe('MenubarAdminComponent', () => {
  let component: MenubarAdminComponent;
  let fixture: ComponentFixture<MenubarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenubarAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenubarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});