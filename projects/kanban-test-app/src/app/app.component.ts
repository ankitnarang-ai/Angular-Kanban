import { Component } from '@angular/core';
import {  KanbanBoardComponent, KanbanStateService } from 'ng-kanban';
import { KanbanBoard } from '../../../ng-kanban/src/lib/models/kanban.modal';

@Component({
  selector: 'app-root',
  imports: [ KanbanBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  board: KanbanBoard = {
    columns: [
      {
        id: 'todo',
        title: 'To Do',
        cards: [
          { id: 'card1', title: 'Create Kanban Board', description: 'Implement a simple drag and drop Kanban board' },
          { id: 'card2', title: 'Style Components', description: 'Add CSS styling to all components' },
          { id: 'card3', title: 'Add Drag-and-Drop Functionality', description: 'Implement drag-and-drop for cards and columns' },
          { id: 'card4', title: 'Write Unit Tests', description: 'Add unit tests for all components and services' }
        ]
      },
      {
        id: 'inProgress',
        title: 'In Progress',
        cards: [
          { id: 'card5', title: 'Research Angular Drag & Drop', description: 'Learn about drag and drop implementation' },
          { id: 'card6', title: 'Design User Interface', description: 'Create wireframes and design the UI' }
        ]
      },
      {
        id: 'done',
        title: 'Done',
        cards: [
          { id: 'card7', title: 'Setup Project', description: 'Initialize Angular project' },
          { id: 'card8', title: 'Install Dependencies', description: 'Install required npm packages' },
          { id: 'card9', title: 'Create Basic Components', description: 'Create components for board, column, and card' }
        ]
      },
      {
        id: 'review',
        title: 'Review',
        cards: [
          { id: 'card10', title: 'Code Review', description: 'Review code for quality and best practices' },
          { id: 'card11', title: 'Test User Experience', description: 'Test the app for usability and accessibility' }
        ]
      },
      {
        id: 'deployed',
        title: 'Deployed',
        cards: [
          { id: 'card12', title: 'Deploy to Production', description: 'Deploy the app to a live server' },
          { id: 'card13', title: 'Monitor Performance', description: 'Monitor app performance and fix issues' }
        ]
      }
    ]
  };
  
  constructor(private kanbanService: KanbanStateService) {}
  
  onCardClick(card: any) {
    console.log('Card clicked:', card);
    // You could show a modal or navigate to a details page
  }
  
  onCardMoved(event: any) {
    console.log('Card moved:', event);
    // Update the board data when a card is moved
    this.board = this.kanbanService.moveCard(
      this.board,
      event.cardId,
      event.sourceColumnId,
      event.targetColumnId
    );
  }
    
  
}