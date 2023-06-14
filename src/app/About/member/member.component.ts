
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
export interface Member{
  title:string;
  name:string;
  role:string;
  image:string|SafeUrl;
}
@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Input() member:Member;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
}
