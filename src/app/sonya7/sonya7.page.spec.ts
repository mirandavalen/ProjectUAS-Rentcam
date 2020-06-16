import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sonya7Page } from './sonya7.page';

describe('Sonya7Page', () => {
  let component: Sonya7Page;
  let fixture: ComponentFixture<Sonya7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sonya7Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sonya7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
