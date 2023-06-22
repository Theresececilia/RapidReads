import classNames from "classnames";

export default function Label({ children, className, ...props }) {
  return (
    <label {...props}>
      {children}
    </label>
  );
}
