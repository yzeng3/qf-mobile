import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColorModalPage } from './color-modal.page';

describe('ColorModalPage', () => {
  let component: ColorModalPage;
  let fixture: ComponentFixture<ColorModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
