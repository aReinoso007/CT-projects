type ButtonProps = {
  onClick: () => void;
  className: string;
  type: "button" | "submit";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
