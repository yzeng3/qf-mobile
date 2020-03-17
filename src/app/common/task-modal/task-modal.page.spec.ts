import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskModalPage } from './task-modal.page';

describe('TaskModalPage', () => {
  let component: TaskModalPage;
  let fixture: ComponentFixture<TaskModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
