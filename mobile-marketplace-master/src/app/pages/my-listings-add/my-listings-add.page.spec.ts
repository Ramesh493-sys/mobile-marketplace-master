import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyListingsAddPage } from './my-listings-add.page';

describe('MyListingsAddPage', () => {
  let component: MyListingsAddPage;
  let fixture: ComponentFixture<MyListingsAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListingsAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyListingsAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
