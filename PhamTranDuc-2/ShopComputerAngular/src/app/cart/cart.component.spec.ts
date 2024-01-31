import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:PhanThanhMinh-2/cafe-springboot/Cafe_management_system/cafe_fontend/src/app/signup/signup.component.spec.ts
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
========
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartComponent);
>>>>>>>> 711f66f92ea7358148a8fc62c2dcb16dc60b2e5d:PhamTranDuc-2/ShopComputerAngular/src/app/cart/cart.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
