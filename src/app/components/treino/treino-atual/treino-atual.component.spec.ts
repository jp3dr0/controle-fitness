import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoAtualComponent } from './treino-atual.component';

describe('TreinoAtualComponent', () => {
  let component: TreinoAtualComponent;
  let fixture: ComponentFixture<TreinoAtualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreinoAtualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreinoAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
