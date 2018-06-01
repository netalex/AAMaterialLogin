import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataResultDataSource } from './data-result-datasource';

@Component({
  selector: 'data-result',
  templateUrl: './data-result.component.html',
  styleUrls: ['./data-result.component.css']
})
export class DataResultComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataResultDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DataResultDataSource(this.paginator, this.sort);
  }
}
