import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidatorsPage } from './validators.page';

describe('ValidatorsPage', () => {
  let component: ValidatorsPage;
  let fixture: ComponentFixture<ValidatorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidatorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
