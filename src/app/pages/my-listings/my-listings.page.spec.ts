import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyListingsPage } from './my-listings.page';

describe('MyListingsPage', () => {
  let component: MyListingsPage;
  let fixture: ComponentFixture<MyListingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyListingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
