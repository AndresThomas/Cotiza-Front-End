import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizaDialogComponent } from './cotiza-dialog.component';

describe('CotizaDialogComponent', () => {
  let component: CotizaDialogComponent;
  let fixture: ComponentFixture<CotizaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
