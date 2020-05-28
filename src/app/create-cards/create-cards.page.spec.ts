import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCardsPage } from './create-cards.page';

describe('CreateCardsPage', () => {
  let component: CreateCardsPage;
  let fixture: ComponentFixture<CreateCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
