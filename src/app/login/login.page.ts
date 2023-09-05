import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private animationCtrl: AnimationController) {}

  fadeIn(element: HTMLElement) {
    const animation = this.animationCtrl.create()
      .addElement(element)
      .duration(1000)
      .fromTo('opacity', '0', '1');

    animation.play();
  }
}
