import { TestBed } from '@angular/core/testing';

import { NgKanbanService } from './ng-kanban.service';

describe('NgKanbanService', () => {
  let service: NgKanbanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgKanbanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
