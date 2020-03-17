import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupplierModalPage } from './supplier-modal.page';

describe('SupplierModalPage', () => {
  let component: SupplierModalPage;
  let fixture: ComponentFixture<SupplierModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupplierModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
