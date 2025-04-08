import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCoordinatorDialogComponent } from './assign-coordinator-dialog.component';

describe('AssignCoordinatorDialogComponent', () => {
  let component: AssignCoordinatorDialogComponent;
  let fixture: ComponentFixture<AssignCoordinatorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignCoordinatorDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignCoordinatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
