import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClueBoxComponent } from './clue-box.component';

describe('ClueBoxComponent', () => {
  let component: ClueBoxComponent;
  let fixture: ComponentFixture<ClueBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClueBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClueBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
