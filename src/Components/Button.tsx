import React from "react";

type ButtonProps = {
  onClick?: any;
  btnText: string;
  type?: "button" | "submit";
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: any;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  btnText,
  type,
  isLoading,
  isDisabled,
  icon,
  className,
}) => {
    
  return (
    <div>
      <button
        className={className}
        onClick={onClick}
        type={type}
        disabled={isLoading || isDisabled}
      >
        {!isLoading && icon}
        {isLoading ? btnText : btnText}
      </button>
    </div>
  );
};

export default Button;