import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '../../../shared/heavy-loaders/heavy-loaders-slow.component copy';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'defer-views',
  standalone: true,
  imports: [HeavyLoadersSlowComponent, TitleComponent],
  templateUrl: './defer-views.component.html',
  styles: ``,
})
export default class DeferViewsComponent {}
