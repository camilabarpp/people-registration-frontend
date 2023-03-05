import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="w-full h-full">
          <mat-toolbar color="primary" class="h-[100px]">
              <span class="mat-subtitle-1 sm:pl-16 pl:4">Controle de cadastros de pessoas</span>
          </mat-toolbar>
        <router-outlet></router-outlet>
      </div>
  `,
})
export class AppComponent {
}
