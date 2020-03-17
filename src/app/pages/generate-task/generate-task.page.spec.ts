import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerateTaskPage } from './generate-task.page';

describe('GenerateTaskPage', () => {
  let component: GenerateTaskPage;
  let fixture: ComponentFixture<GenerateTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
