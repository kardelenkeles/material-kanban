import {Component, OnInit} from '@angular/core';
import {EditComponent} from "../edit/edit.component";
import {MatDialog} from "@angular/material/dialog";
import {BoardService} from "../services/board.service";
import {MatSort, MatSortModule} from "@angular/material/sort";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'boardName',
    'boardDescription',
    'action'
  ];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
              private _boardService: BoardService,
              private router: Router
  ) {
  }

  openAddBoard() {
    const dialogRef = this._dialog.open(EditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getBoardList();
        }
      },
    });
  }

  getBoardList() {
    this._boardService.getBoard().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    })
  }

  deleteBoard(id:number
  ) {
    this._boardService.deleteBoard(id).subscribe({
      next: (res) => {
        alert('Board deleted!');
        this.getBoardList();
      },
      error: console.log,
    });
  }

  editBoard(data: any) {
    const dialogRef = this._dialog.open(EditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getBoardList();
        }
      },
    });
  }

  navigateToKanban(id: number) {
    this.router.navigate(['/board', id])
  }

  ngOnInit()
    :
    void {
    this.getBoardList();
  }


}
