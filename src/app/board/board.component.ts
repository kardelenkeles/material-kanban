import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import {Task} from "../models/task";
import {TaskService} from "../services/task.service";
import {MatTableDataSource} from "@angular/material/table";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {BoardService} from "../services/board.service";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavbarComponent} from "../navbar/navbar.component";
import {filter} from "rxjs";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  addForm!: FormGroup;
  tasks!: Task[];
  backlog: Task  [] = [];
  task: Task  [] = [];
  inProgress: Task  [] = [];
  done: Task  [] = [];

  color:any ;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
              private _fb: FormBuilder,
              private _addTaskService: TaskService,
              private service: BoardService,
              private router: Router,
              private _dialogRef: MatDialogRef<NavbarComponent>,
              private tService: TaskService,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addForm = this._fb.group({
      item: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.getTaskList();
    this.addForm.patchValue(this.data);
  }

  addTask() {
    this.backlog.push({
      header: this.addForm.value.item,
      content: this.addForm.value.item,
      color: this.addForm.value.item
    })
  }

  // openAddTask() {
  //   const dialogRef = this._dialog.open(AddTodoComponent);
  //   dialogRef.afterClosed().subscribe({
  //     next: (val) => {
  //       if (val) {
  //         this.getTaskList();
  //       }
  //     },
  //   });
  // }


  getTaskList() {
    this.tService.getTask(this.data)
      .subscribe((data: any) => {
          this.backlog = data.filter((i: any) => i.status === 'backlog');
          this.task = data.filter((i:any) => i.status === 'task');
          this.inProgress = data.filter((i:any) => i.status === 'inProgress');
          this.done = data.filter((i:any) => i.status === 'done');
        console.log(data)
        }
      )
  }

  deleteTask(id: number
  ) {
    this.tService.deleteTask(id).subscribe({
      next: (res) => {
        alert('Board deleted!');
        this.getTaskList();
      },
      error: console.log,
    });
  }


  onFormSubmit() {
    this._addTaskService.addTask(this.addForm.value)
      .subscribe({
        next: (val: any) => {
          alert("Task added.");
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        }
      });
  }

  drop(event
         :
         CdkDragDrop<Task[]>
  ) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
