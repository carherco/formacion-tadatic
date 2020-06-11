import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexedDBPage } from './indexed-db.page';

describe('IndexedDBPage', () => {
  let component: IndexedDBPage;
  let fixture: ComponentFixture<IndexedDBPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexedDBPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexedDBPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
