import { Component, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'dialog-overview-example-dialog',
  template: '{{ data }}'
})
export class AlertDialogComponent {
  constructor( @Inject(MD_DIALOG_DATA) public data: any) { }
}