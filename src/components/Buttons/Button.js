import clsx from "clsx";

const Button = ({ children, variant, onClick }) => {
  const baseClasses =
    "rounded-custom px-7 py-2.5 text-sm font-medium w-full inline-block text-center transition";

  const variants = {
    outline:
      "bg-white shadow-custom-xs border border-bgray text-pgray hover:border-violet-500 hover:text-violet-500",
    primary:
      "bg-violet-500 hover:bg-violet-600 border border-violet-500 text-white hover:border-violet-600",
  };

  return (
    <button className={clsx(baseClasses, variants[variant])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
