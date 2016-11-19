import { Component } from '@angular/core';
import { MediaQueries } from "../../../lib/media-query/media-queries";

@Component({
  selector: 'demo-responsive-row-column',
  styleUrls : [
    '../demo-app/material2.css'
  ],
  template: `
    <md-card class="card-demo" >
      <md-card-title>Multiple Responsive Columns</md-card-title>
      <md-card-subtitle>Simple row with nested layout containers. Note: the 1st column is responsive.</md-card-subtitle>
      <md-card-content>
        <div class="containerX">
            
            <div class="colorNested box" fx-layout="row" *ngIf="isVisible">
              <div  [fx-layout]="firstCol" 
                    [fx-layout.xs]="firstColXs" 
                    [fx-layout.md]="firstColMd" 
                    [fx-layout.lg]="firstColLg"  
                    [fx-layout.gt-lg]="firstColGtLg" 
                    fx-flex="50%" 
                    fx-flex.gt-sm="25"
                    fx-show="true"
                    fx-show.md="false" 
                    (click)="toggleLayoutFor(1)" >
                <div fx-flex>Col #1: First item in row</div>
                <div fx-flex>Col #1: Second item in row</div>
              </div>
              <div [fx-layout]="secondCol" fx-flex (click)="toggleLayoutFor(2)">
                <div fx-flex>Col #2: First item in column</div>
                <div fx-flex>Col #2: Second item in column</div>
              </div>
            </div>
        </div>
      </md-card-content>
      <!--<md-card-actions fx-layout="row" fx-layout-align="center">-->
        <!--<button md-raised-button (click)="isVisible = !isVisible">{{ isVisible ? 'Remove' : 'Show' }}</button>-->
      <!--</md-card-actions>-->
      <md-card-footer style="width:95%">
         <div fx-layout="row" class="hint" fx-layout-align="space-around" > 
            <div>&lt;div fx-layout="{{ firstCol }}" fx-flex="50%" fx-flex.gt-sm="25%" fx-show.md="false" &gt;</div>
            <div fx-flex></div>
            <div>&lt;div  fx-layout="{{ secondCol }}" fx-flex &gt;</div>
         </div>
      </md-card-footer>
    </md-card>
  `
})
export class DemoResponsiveRows {
  firstCol = "row";
  firstColXs = 'column';
  firstColMd = 'column';
  firstColLg = 'invalid';
  firstColGtLg = "column";

  secondCol = "column";

  isVisible = true;

  constructor( public $mdMedia : MediaQueries ) {
  }

  toggleLayoutFor(col) {
    switch( col ) {
      case 1:
        let bp = this.$mdMedia.active;
        
        col = `firstCol${bp ? bp.suffix : ""}`;
        this[col] = (this[col] === "column") ? "row" : "column";
        break;

      case 2:
        col = "secondCol";
        this[col] = (this[col] == "row") ? "column" : "row";
        break;
    }
  }
}
