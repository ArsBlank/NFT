import { Checkbox } from "./UI/Checkbox/Checkbox";
import { Input } from "./UI/input/Input";
import { GoogleIcon } from "./icons/GoogleIcon";

export default function Form() {
  return (
    <form action="" className="form">
      <div className="form__title">NFT Access</div>
      <div className="form__desc">
        Please fill your detail to access your account.
      </div>

      <Input title="Email" name="email" type="email" placeholder="Your Email" />
      <Input
        title="Password"
        name="password"
        type="password"
        placeholder="Your Password"
      />
      <div className="row">
        <Checkbox label="Remember me" />
        <a href="/">Forgot Password?</a>
      </div>
      <div className="form__btn">
        <button className="btn _primary"> Sign In </button>
        <button className="btn _secondary">
          <GoogleIcon />
          Sign in with Google
        </button>
      </div>
      <div className="row _center">
        Don’t have an account?
        <a href="/">Sign up</a>
      </div>
    </form>
  );
}
