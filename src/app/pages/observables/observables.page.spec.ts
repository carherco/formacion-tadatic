import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservablesPage } from './observables.page';

describe('ObservablesPage', () => {
  let component: ObservablesPage;
  let fixture: ComponentFixture<ObservablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
