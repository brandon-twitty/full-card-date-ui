import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyConnectionsPage } from './my-connections.page';

describe('MyConnectionsPage', () => {
  let component: MyConnectionsPage;
  let fixture: ComponentFixture<MyConnectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyConnectionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyConnectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
