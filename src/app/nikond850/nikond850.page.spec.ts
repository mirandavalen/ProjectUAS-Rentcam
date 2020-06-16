import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Nikond850Page } from './nikond850.page';

describe('Nikond850Page', () => {
  let component: Nikond850Page;
  let fixture: ComponentFixture<Nikond850Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nikond850Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Nikond850Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
