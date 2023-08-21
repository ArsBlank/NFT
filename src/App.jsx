import Button from "./components/UI/Button.jsx";
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
        <Background />
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
