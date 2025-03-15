import { Injectable } from '@angular/core';
import { KanbanBoard, KanbanCard, KanbanColumn } from './models/kanban.modal';

@Injectable({
  providedIn: 'root'
})
export class KanbanStateService {
  // Move a card from one column to another
  moveCard(board: KanbanBoard, cardId: string, sourceColumnId: string, targetColumnId: string): KanbanBoard {
    // Create a deep copy of the board to prevent direct mutation
    const updatedBoard = JSON.parse(JSON.stringify(board)) as KanbanBoard;
    
    // Find source and target columns
    const sourceColumn = updatedBoard.columns.find(col => col.id === sourceColumnId);
    const targetColumn = updatedBoard.columns.find(col => col.id === targetColumnId);
    
    if (!sourceColumn || !targetColumn) {
      return board; // Return original if columns not found
    }
    
    // Find and remove card from source column
    const cardIndex = sourceColumn.cards.findIndex(card => card.id === cardId);
    if (cardIndex === -1) {
      return board; // Return original if card not found
    }
    
    // Remove the card from source column and get a reference to it
    const [card] = sourceColumn.cards.splice(cardIndex, 1);
    
    // Add card to target column
    targetColumn.cards.push(card);
    
    return updatedBoard;
  }

  log(board: any) {
    console.log(board);
  }
  
}
