import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader"
import MainComp from "@/components/MainCompo";
import Component, { PropsType, StateType } from "../core/Component";

export default class Main extends Component<PropsType, StateType> {
didMount(): void {
   console.log('333', this.target)
   const $header = this.target.querySelector("header");
   new Header($header as Element, { propTest: "mainprop" });
   const $subHeader = this.target.querySelector("subheader")
   new SubHeader($subHeader as Element, {propTest : "mainprop"});
   const $mainComp = this.target.querySelector("maincomp")
   new MainComp($mainComp as Element, {propTest : "mainprop"});
}

template() {
   return `
   <div class="content-block">
      <Header></Header>
      <SubHeader></SubHeader>
      <MainComp></MainComp>
   </div>
   `;
}
}



// import Header from "@/components/Header";
// import Component, { PropsType, StateType } from "@/core/Component";

// export default class Main extends Component<PropsType, StateType> {
//   didMount(): void {
//     const $header = this.target.querySelector("header");
//     new Header($header as Element, { propTest: "mainprop" });
//   }

//   template() {
//     return `
//       <div class='main-page'>
//         <header></header>
//         MainPage
//       </div>
//     `;
//   }
// }







