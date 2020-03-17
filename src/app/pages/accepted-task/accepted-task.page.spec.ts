import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptedTaskPage } from './accepted-task.page';

describe('AcceptedTaskPage', () => {
  let component: AcceptedTaskPage;
  let fixture: ComponentFixture<AcceptedTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptedTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
