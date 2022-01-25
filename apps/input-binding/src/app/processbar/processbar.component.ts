import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'input-binding-processbar',
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [`
    .progress-bar-container,
    .progress {
      height: 20px;
    }

    .progress-bar-container {
      width: 100%;
    }
  `]
})
export class ProcessbarComponent implements OnInit {

  @Input() backgroundColor!: string
  @Input() progressColor!: string
  // @Input() progress!: number

  private progress$ = 0;

  @Input() get progress(){
    return this.progress$
  }

  set progress(val){
    if(typeof val !== "number"){
      const epkieu = Number(val);
      if(isNaN(epkieu)){
        this.progress$ = 0
      }else{
        this.progress$ = epkieu;
      }
    }
    else
    {
      this.progress$ = val
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
