  import Component from "../core/Component";
  import { router } from "@/core/BrowserRouter";
  import '../scss/total.scss'
  import ShoppingBasketIcon from "../assets/svg/shopping-basket-icon.svg";

  interface HeaderProps {
  propTest: string;
  }
  interface HeaderState {
  stateTest: string;
  }

  export default class Header extends Component<HeaderProps, HeaderState> {
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
        <header>
        <h2>You can Shopping </h2>
        <div class="goods-search-block">
          <input type="text" class="goods-search-input" />
          <button class="goods-search-btn">
              검색
          </button>
        </div>
        <div class="my-block">
          <div class="cart-block">
              <button class="cart-btn">
                <img src=${ShoppingBasketIcon} class="cart-img" />
              </button>
          </div>
          <!-- <button class="my-btn">
              이방원
          </button>
          님께서 접속하셨습니다. -->
          <a href="./html/login.html">
              로그인
          </a>
        </div>
      </header>
        `;
    }

    setEvent() {
      this.addEvent("click", "#main", () => {
        router.push("/");
      });
      this.addEvent("click", "#sub", () => {
        router.push("/sub");
      });
    }
  }