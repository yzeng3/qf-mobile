import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpiredTaskPage } from './expired-task.page';

describe('ExpiredTaskPage', () => {
  let component: ExpiredTaskPage;
  let fixture: ComponentFixture<ExpiredTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpiredTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
