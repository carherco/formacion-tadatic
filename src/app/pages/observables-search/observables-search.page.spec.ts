import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObservablesSearchPage } from './observables-search.page';

describe('ObservablesSearchPage', () => {
  let component: ObservablesSearchPage;
  let fixture: ComponentFixture<ObservablesSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablesSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
