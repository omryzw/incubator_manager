import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { ActiveComponent } from './components/active/active.component';
import { ProjectComponent } from './components/project/project.component';
import { HistoryComponent } from './components/history/history.component';
import { StatsComponent } from './components/stats/stats.component';
import { HatchingComponent } from './components/hatching/hatching.component';
import { SinglehistoryComponent } from './components/singlehistory/singlehistory.component';
import { SinglehatchComponent } from './components/singlehatch/singlehatch.component';


@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, ActiveComponent, ProjectComponent, HistoryComponent, StatsComponent, HatchingComponent, SinglehistoryComponent, SinglehatchComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule]
})
export class SharedModule {}
