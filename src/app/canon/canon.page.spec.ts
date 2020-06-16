import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanonPage } from './canon.page';

describe('CanonPage', () => {
  let component: CanonPage;
  let fixture: ComponentFixture<CanonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
