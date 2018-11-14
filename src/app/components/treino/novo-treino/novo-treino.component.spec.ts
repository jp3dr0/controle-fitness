import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTreinoComponent } from './novo-treino.component';

describe('NovoTreinoComponent', () => {
  let component: NovoTreinoComponent;
  let fixture: ComponentFixture<NovoTreinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoTreinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
