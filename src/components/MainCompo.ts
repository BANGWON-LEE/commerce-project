import Header from "@/components/Header";
import Component, { PropsType, StateType } from "@/core/Component";

export default class Main extends Component<PropsType, StateType> {
didMount(): void {
   const $header = this.target.querySelector("header");
   new Header($header as Element, { propTest: "mainprop" });
}

template() {
   return `
      <div class="event-slider-box">
         <div class="event-slider"/>
      </div>
      <div class="popular-goods-block">
         <div class="popular-goods-block_inner"> </div>   
      </div>
   `;
}
}