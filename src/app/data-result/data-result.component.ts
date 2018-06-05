import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataResultDataSource } from './data-result-datasource';

@Component({
  selector: 'app-data-result',
  template:
    `
    <div class="mat-elevation-z8">
      <mat-table #table [dataSource]="dataSource" matSort aria-label="Elements">

        <!-- Id Column -->
        <ng-container matColumnDef="id">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>
          <mat-cell *matCellDef="let row">{{row.id}}</mat-cell>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>
          <mat-cell *matCellDef="let row">{{row.name}}</mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
      </mat-table>

      <mat-paginator #paginator
        [length]="dataSource.data.length"
        [pageIndex]="0"
        [pageSize]="50"
        [pageSizeOptions]="[25, 50, 100, 250]">
      </mat-paginator>
    </div>
    `
  ,
  styles: [``]
})
export class DataResultComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataResultDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    // this.dataSource = new DataResultDataSource(this.paginator, this.sort);
    this.dataSource = new DataResultDataSource();
    console.log(this.dataSource);
  }
}
