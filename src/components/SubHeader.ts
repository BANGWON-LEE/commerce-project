import Component from "../core/Component";


interface HeaderProps {
propTest: string;
}
interface HeaderState {
stateTest: string;
}

export default class SubHeader extends Component<HeaderProps, HeaderState> {
  setup() {
      this.state = {
        stateTest: "state",
      };
  }
  didMount() {
      const { propTest }: HeaderProps = this.props;
      this.setState({ stateTest: this.state.stateTest + propTest });
  }
  template() {

      return `
      <div id="sub-header" class="sub-header">
         <a href="#" class="sub-menu">
            의류
         </a>
         <a href="#" class="sub-menu">
            전자제품
         </a>
         <a href="#" class="sub-menu">
            여행
         </a>
      </div>
      `;
  }

  //  setEvent() {
  //     this.addEvent("click", "#main", () => {
  //        router.push("/");
  //     });
  //     this.addEvent("click", "#sub", () => {
  //        router.push("/sub");
  //     });
  //  }
}