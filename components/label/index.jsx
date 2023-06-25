import classNames from "classnames";

export default function Label({ children, className, ...props }) {
  return (
    <label {...props} className="pt-4 pb-2">
      {children}
    </label>
  );
}
