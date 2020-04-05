import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParamModalPage } from './param-modal.page';

describe('ParamModalPage', () => {
  let component: ParamModalPage;
  let fixture: ComponentFixture<ParamModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParamModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
