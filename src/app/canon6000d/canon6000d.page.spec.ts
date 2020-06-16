import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Canon6000dPage } from './canon6000d.page';

describe('Canon6000dPage', () => {
  let component: Canon6000dPage;
  let fixture: ComponentFixture<Canon6000dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Canon6000dPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Canon6000dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
