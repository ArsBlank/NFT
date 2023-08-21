import { Googleicon } from "../../scss/components/icons/Googleicon";

export default function Form() {
  return (
    <form action="" className="form">
      <div className="form__title">NFT Access</div>
      <div className="form__desc">
        Please fill your detail to access your account.
      </div>
      <label className="forms">
        <span className="forms__title">Email</span>
        <input
          className="forms__input"
          type="email"
          name="email"
          placeholder="Your Email"
        />
      </label>
      <label className="forms">
        <span className="forms__title">Password</span>
        <input
          className="forms__input"
          type="password"
          name="password"
          placeholder="Your Password"
        />
      </label>
      <div className="row">
        <label className="chk">
          <input type="checkbox" />
          <span>Remember Me</span>
        </label>
        <a href="/">Forgot Password?</a>
      </div>
      <Button> Sign In </Button>
      <Googleicon />
      <Button> Sign in with Google </Button>
    </form>
  );
}
