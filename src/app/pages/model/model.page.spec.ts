import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelPage } from './model.page';

describe('ModelPage', () => {
  let component: ModelPage;
  let fixture: ComponentFixture<ModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
