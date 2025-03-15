import { Component, EventEmitter, Input, Output} from '@angular/core';
import { KanbanCard, KanbanColumn } from '../models/kanban.modal';
import { KanbanCardComponent } from '../kanban-card/kanban-card.component';
@Component({
  selector: 'lib-kanban-column',
  imports: [KanbanCardComponent],
  templateUrl: './kanban-column.component.html',
  styleUrl: './kanban-column.component.css'
})
export class KanbanColumnComponent {

  /** Column data: {
    id: string;
    title: string;
    cards: KanbanCard[];
  } */
  @Input() column!: KanbanColumn;

  /** Emit event when a card is clicked */
  @Output() cardClick = new EventEmitter<KanbanCard>();

  /** Emit event when a card is moved */
  @Output() cardMoved = new EventEmitter<{cardId: string, sourceColumnId: string, targetColumnId: string}>();
  
  /** Fires continuously while a card is being dragged over the column. */
  onDragOver(event: DragEvent) {

    /**
     * Prevents the default behavior (which blocks dropping).
     * Sets the dropEffect to 'move' to indicate that the card will be moved.
    **/
    event.preventDefault();

    if (event.dataTransfer) {
      // drop effect alwayse set to none by default we explicitly set it to move
      event.dataTransfer.dropEffect = 'move';
    }
  }
  
  /**
   * @param event Fires when a dragged card enters the column.
   * Adds a CSS class (drag-over) to the column's content area to provide visual feedback (e.g., highlighting the column).
   */
  onDragEnter(event: DragEvent) {
    
    if (event.target instanceof Element) {
      
      // Check for the class column-content exist in classList or not if exist add drag-over class
      if (event.target.classList.contains('column-content')) {
        event.target.classList.add('drag-over');
      }
    }
  }
  

  /**
   * @param event Fires when a dragged card leaves the column.
   * Removes the drag-over CSS class to reset the visual feedback.
   */
  onDragLeave(event: DragEvent) {

    if (event.target instanceof Element) {
      if (event.target.classList.contains('column-content')) {
        // Remove drag-over class
        event.target.classList.remove('drag-over');
      }
    }
  }

  /**
   * 
   * @param event Fires when a card is dropped on the column.
   * Prevents the default behavior.
   * Removes the drag-over styling.
   * Gets the cardId from the dataTransfer object.
   * Finds the sourceColumnId (the column the card is coming from).
   * Emits a cardMoved event to notify the parent component that the card has been moved.
   * @returns 
   */
  
  onDrop(event: DragEvent) {
    
    event.preventDefault();
    
    // Remove the drag-over styling
    if (event.target instanceof Element) {
      const columnContent = event.target.closest('.column-content');
      if (columnContent) {
        columnContent.classList.remove('drag-over');
      }
    }
    
    if (event.dataTransfer) {
      // Get the cardId
      const cardId = event.dataTransfer.getData('cardId');
      
      if (!cardId) return;
      
      // Find the source column (the column the card is coming from)
      let sourceColumnId = '';
      
      // Get All the columns
      const columnElements = document.querySelectorAll('.kanban-column');
      
      // Get all the cards
      columnElements.forEach(colEl => {
        const cards = colEl.querySelectorAll('.kanban-card');
        cards.forEach(card => {
          
          // Check if the cardId matches
          if (card.getAttribute('data-id') === cardId) {

            // If Card Id matches set the sourceColumnId
            // Get source column Id ( eg: in progress )
            sourceColumnId = colEl.getAttribute('data-id') || '';
          }
        });
      });
      
      if (sourceColumnId && sourceColumnId !== this.column.id) {
        // Emit an event to move the card
        this.cardMoved.emit({
          cardId,
          sourceColumnId,
          targetColumnId: this.column.id
        });
      }
    }
  }
}

