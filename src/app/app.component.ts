import { Component, Input } from '@angular/core';
//import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { appname } from 'src/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
[x: string]: any;
  title = appname;
  /* constructor(private offcanvasService: NgbOffcanvas) {}

	open() {
		const offcanvasRef = this.offcanvasService.open(NgbdOffcanvasContent);
		offcanvasRef.componentInstance.name = 'World';
	} */
}
@Component({
	selector: 'ngbd-offcanvas-content',
	standalone: true,
	template: `
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Offcanvas</h5>
			<!-- <button
				type="button"
				class="btn-close text-reset"
				aria-label="Close"
				(click)="activeOffcanvas.dismiss('Cross click')"
			></button> -->
		</div>
		<div class="offcanvas-body">
			<div>Hello {{ name }}</div>
			<!-- <button type="button" class="btn btn-outline-dark" (click)="activeOffcanvas.close('Close click')">Close</button> -->
		</div>
	`,
})
export class NgbdOffcanvasContent {
	@Input() name: any;

	//constructor(public activeOffcanvas: NgbActiveOffcanvas) {}
}
