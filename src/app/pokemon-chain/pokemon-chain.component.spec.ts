import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonChainComponent } from './pokemon-chain.component';

describe('PokemonChainComponent', () => {
  let component: PokemonChainComponent;
  let fixture: ComponentFixture<PokemonChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonChainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
