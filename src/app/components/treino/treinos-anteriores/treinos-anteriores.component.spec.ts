import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosAnterioresComponent } from './treinos-anteriores.component';

describe('TreinosAnterioresComponent', () => {
  let component: TreinosAnterioresComponent;
  let fixture: ComponentFixture<TreinosAnterioresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinosAnterioresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinosAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
