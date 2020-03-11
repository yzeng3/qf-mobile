import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DraftPage } from './draft.page';

describe('DraftPage', () => {
  let component: DraftPage;
  let fixture: ComponentFixture<DraftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
