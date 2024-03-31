import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaskboardComponent } from './daskboard.component';

describe('DaskboardComponent', () => {
  let component: DaskboardComponent;
  let fixture: ComponentFixture<DaskboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaskboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DaskboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
