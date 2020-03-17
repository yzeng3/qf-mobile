import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AwaitTaskPage } from './await-task.page';

describe('AwaitTaskPage', () => {
  let component: AwaitTaskPage;
  let fixture: ComponentFixture<AwaitTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AwaitTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
