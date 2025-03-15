import { TestBed } from '@angular/core/testing';

import { KanbanStateService } from './kanban-state.service';

describe('KanbanStateService', () => {
  let service: KanbanStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanbanStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
