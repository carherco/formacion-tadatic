import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverContentComponent } from 'src/app/components/popover-content/popover-content.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverContentComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
