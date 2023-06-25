import classNames from "classnames";

export default function Button({ children, className, ...props }) {
  return (
    <button {...props} className="bg-lightColor w-1/4">
      {children}
    </button>
  );
}
