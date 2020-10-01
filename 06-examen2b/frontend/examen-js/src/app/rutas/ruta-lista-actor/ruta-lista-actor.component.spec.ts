import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaActorComponent } from './ruta-lista-actor.component';

describe('RutaListaActorComponent', () => {
  let component: RutaListaActorComponent;
  let fixture: ComponentFixture<RutaListaActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaListaActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
