import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreDesignPage } from './store-design.page';

describe('StoreDesignPage', () => {
  let component: StoreDesignPage;
  let fixture: ComponentFixture<StoreDesignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDesignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreDesignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
