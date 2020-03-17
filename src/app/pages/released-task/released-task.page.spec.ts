import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReleasedTaskPage } from './released-task.page';

describe('ReleasedTaskPage', () => {
  let component: ReleasedTaskPage;
  let fixture: ComponentFixture<ReleasedTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasedTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReleasedTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
