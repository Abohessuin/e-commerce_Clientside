import "../../public/assets/css/index.css";
import "../../public/assets/css/styles.css";
import "../../public/assets/css/bootstrap.css";
import { wrapper } from "../../redux/store";
const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
export default wrapper.withRedux(MyApp);
