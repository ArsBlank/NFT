import Background from "./components/Background.jsx";
import Copyright from "./components/Copyright.jsx";
import Form from "./components/Form.jsx";
import Logo from "./components/Logo.jsx";

function App() {
  return (
    <div className="sign-in">
      <div className="sign-in__info">
        <Logo />
        <Form />
        <Copyright />
      </div>
      <div className="sign-in__bg">
        <Background src="Bg.png" alt="alt" />
      </div>
    </div>
  );
}

export default App;
