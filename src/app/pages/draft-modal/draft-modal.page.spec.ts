import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DraftModalPage } from './draft-modal.page';

describe('DraftModalPage', () => {
  let component: DraftModalPage;
  let fixture: ComponentFixture<DraftModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DraftModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
