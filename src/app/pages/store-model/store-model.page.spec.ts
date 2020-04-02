import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreModelPage } from './store-model.page';

describe('StoreModelPage', () => {
  let component: StoreModelPage;
  let fixture: ComponentFixture<StoreModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
