export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-3 border-t border-black/10 bg-stone-50 p-2 py-8 text-sm text-stone-700 md:flex-row md:items-center md:justify-between">
        <p className="font-semibold uppercase tracking-[0.14em] text-stone-900">
          Majid Al Futtaim
        </p>
        <p>Footer content displayed across the page.</p>
      </div>
    </footer>
  );
}
