import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class Carousel implements OnInit {

  moved: boolean;

  constructor(private changeDetection: ChangeDetectorRef) {
      this.moved = false;
  }

  ngOnInit(): void {
  }

  prevPage() {
      this.moved = false;
      this.changeDetection.detectChanges();
  }

  nextPage() {
      this.moved = true;
      this.changeDetection.detectChanges();
  }
}
