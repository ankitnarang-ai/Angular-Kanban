import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideNgKanban } from '../../ng-kanban/src/lib/provide-ng-kanban';

bootstrapApplication(AppComponent, {
  providers: [
    provideNgKanban()
  ]
}).catch(err => console.error(err));