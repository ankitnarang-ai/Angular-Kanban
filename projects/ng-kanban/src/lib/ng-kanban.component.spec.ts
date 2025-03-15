import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgKanbanComponent } from './ng-kanban.component';

describe('NgKanbanComponent', () => {
  let component: NgKanbanComponent;
  let fixture: ComponentFixture<NgKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgKanbanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
