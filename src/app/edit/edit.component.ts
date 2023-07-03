import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BoardService} from "../services/board.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  addForm: FormGroup;

  constructor(private _fb: FormBuilder,
              private _addBoardService: BoardService,
              private _dialogRef: MatDialogRef<EditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addForm = this._fb.group({
      boardName: '',
      boardDescription: ''
    });
  }

  onFormSubmit() {
    if (this.addForm.valid) {
      if (this.data) {
        this._addBoardService
          .updateBoard(this.data.id, this.addForm.value)
          .subscribe({
            next: (val: any) => {
              alert("Board updated.");
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            }
          });
      } else {
        this._addBoardService.addBoard(this.addForm.value)
          .subscribe({
            next: (val: any) => {
              alert("Board added.");
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            }
          });
      }
    }
  }

  ngOnInit(): void {
    this.addForm.patchValue(this.data);
  }
}
