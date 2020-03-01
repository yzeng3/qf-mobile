import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FactoryPage } from './factory.page';

describe('FactoryPage', () => {
  let component: FactoryPage;
  let fixture: ComponentFixture<FactoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FactoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
