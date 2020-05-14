import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormReactivePage } from './form-reactive.page';

describe('FormReactivePage', () => {
  let component: FormReactivePage;
  let fixture: ComponentFixture<FormReactivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormReactivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
