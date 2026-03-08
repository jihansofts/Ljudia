function RoundedTwoCornerButton({
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={[
        "rounded-tr-4xl rounded-bl-4xl bg-[var(--pinkDark)] px-5 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--pinkLight)]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export default RoundedTwoCornerButton;
