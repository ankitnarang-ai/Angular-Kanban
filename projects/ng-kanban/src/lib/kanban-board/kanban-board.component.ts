import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KanbanBoard, KanbanCard } from '../models/kanban.modal';
import { KanbanColumnComponent } from '../kanban-column/kanban-column.component';

@Component({
  selector: 'lib-kanban-board',
  imports: [KanbanColumnComponent],
  templateUrl: './kanban-board.component.html',
  styleUrl: './kanban-board.component.css'
})
export class KanbanBoardComponent {
  @Input() board!: KanbanBoard;
  @Output() cardClick = new EventEmitter<KanbanCard>();
  @Output() cardMoved = new EventEmitter<{cardId: string, sourceColumnId: string, targetColumnId: string}>();
  
  onCardMoved(event: {cardId: string, sourceColumnId: string, targetColumnId: string}) {
    this.cardMoved.emit(event);
  }
}
