function Button({ children, className, ...props }) {
  return (
    <button className={`pixel ${className}`} {...props}>
      <p>{children}</p>
    </button>
  );
}

export default Button;
