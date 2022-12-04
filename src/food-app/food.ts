import { Score } from "./score";
import { Foodable } from "./interfaces";

// foodインスタンスの処理はFoodで作る
export class Food implements Foodable {
  constructor(public element: HTMLDivElement) {
    // callback関数でthisを使う場合はアドレス値(this)を固定する
    element.addEventListener("click", this.clickEventHandler.bind(this));
  }

  clickEventHandler() {
    this.element.classList.toggle("food--active");
    const score = Score.getInstance();
    score.render();
  }
}
