import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry }
from 'ngx-file-drop';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public files: NgxFileDropEntry[] = [];
  

  constructor() { }

  ngOnInit(): void {


  }

  




}
