import classNames from "classnames";

export default function Button({ children, className, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}
