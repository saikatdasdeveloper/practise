import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgcolorchangeontypeComponent } from './bgcolorchangeontype.component';

describe('BgcolorchangeontypeComponent', () => {
  let component: BgcolorchangeontypeComponent;
  let fixture: ComponentFixture<BgcolorchangeontypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BgcolorchangeontypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BgcolorchangeontypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
