import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputModalPage } from './input-modal.page';

describe('InputModalPage', () => {
  let component: InputModalPage;
  let fixture: ComponentFixture<InputModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
