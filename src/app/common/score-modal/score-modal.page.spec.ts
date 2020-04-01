import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScoreModalPage } from './score-modal.page';

describe('ScoreModalPage', () => {
  let component: ScoreModalPage;
  let fixture: ComponentFixture<ScoreModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
