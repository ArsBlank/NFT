import Background from "./components/Background.jsx";
import Copyright from "./components/Copyright.jsx";
import Form from "./components/Form.jsx";
import logo from "./components/Logo.jsx";

function App() {
  return (
    <div className="sign-in">
      <div className="sign-in__info">
        <logo />
        <form />
        <copyright />
      </div>
      <div className="sign-in__bg">
        <background />
      </div>
    </div>
  );
}

export default App;
