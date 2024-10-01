export function Input({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="text-base font-semibold pl-3 pt-3 text-left">{label}</div>
      <input
        onChange={onChange}
        className="w-full px-2 py-1 border rounded border-slate-200 "
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
