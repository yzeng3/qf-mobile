import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreDesignPage } from './more-design.page';

describe('MoreDesignPage', () => {
  let component: MoreDesignPage;
  let fixture: ComponentFixture<MoreDesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreDesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
