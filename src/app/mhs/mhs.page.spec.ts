import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MhsPage } from './mhs.page';

describe('MhsPage', () => {
  let component: MhsPage;
  let fixture: ComponentFixture<MhsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MhsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
