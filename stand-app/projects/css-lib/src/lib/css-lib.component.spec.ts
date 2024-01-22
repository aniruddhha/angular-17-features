import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssLibComponent } from './css-lib.component';

describe('CssLibComponent', () => {
  let component: CssLibComponent;
  let fixture: ComponentFixture<CssLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
