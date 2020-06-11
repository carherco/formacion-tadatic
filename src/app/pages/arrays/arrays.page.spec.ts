import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArraysPage } from './arrays.page';

describe('ArraysPage', () => {
  let component: ArraysPage;
  let fixture: ComponentFixture<ArraysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArraysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
