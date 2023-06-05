import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameCodesComponent } from './game-codes.component';

describe('GameCodesComponent', () => {
  let component: GameCodesComponent;
  let fixture: ComponentFixture<GameCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
