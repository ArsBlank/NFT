import "./_button.scss";
export default function Button({ children, classname }) {
  return <button className={classname}> {children} </button>;
}
