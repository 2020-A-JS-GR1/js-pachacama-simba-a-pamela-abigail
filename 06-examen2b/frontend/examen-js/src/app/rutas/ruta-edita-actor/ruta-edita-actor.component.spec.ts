import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditaActorComponent } from './ruta-edita-actor.component';

describe('RutaEditaActorComponent', () => {
  let component: RutaEditaActorComponent;
  let fixture: ComponentFixture<RutaEditaActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaEditaActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
