import { KanbanStateService } from './kanban-state.service';

export function provideNgKanban() {
  return [
    KanbanStateService
  ];
}