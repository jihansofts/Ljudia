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
        "rounded-full bg-[var(--pinkDark)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--pinkLight)]",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}

export default RoundedTwoCornerButton;
