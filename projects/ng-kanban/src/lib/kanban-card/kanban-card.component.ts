import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KanbanCard } from '../models/kanban.modal';

@Component({
  selector: 'lib-kanban-card',
  imports: [],
  templateUrl: './kanban-card.component.html',
  styleUrl: './kanban-card.component.css'
})
export class KanbanCardComponent {
  /** The card data */
  @Input() card!: KanbanCard;

  /** Whether the card is draggable (default: true) */
  @Input() draggable?: boolean = true;

  /** Whether to show the default title (default: true) */
  @Input() showTitle?: boolean = true;

  /** Whether to show the default description (default: true) */
  @Input() showDescription?: boolean = true;

  /** Custom CSS class for the card */
  @Input() customClass: string = '';

  /** Event emitter for card click */
  @Output() cardClick = new EventEmitter<KanbanCard>();

  /** Track if custom header/content is provided */
  hasCustomHeader = false;
  hasCustomBody = false;

  onDragStart(event: DragEvent) {
    if (this.draggable && event.dataTransfer && this.card) {
      // Store the card ID in the drag data
      event.dataTransfer.setData('cardId', this.card.id);
      event.dataTransfer.effectAllowed = 'move';
    }
  }
}