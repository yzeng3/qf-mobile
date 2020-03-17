import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OverdueTaskPage } from './overdue-task.page';

describe('OverdueTaskPage', () => {
  let component: OverdueTaskPage;
  let fixture: ComponentFixture<OverdueTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverdueTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OverdueTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
