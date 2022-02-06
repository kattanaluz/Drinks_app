export default function Input({
  inputClassName,
  divClassName,
  onChange,
  onKeyUp,
  placeholder,
}) {
  return (
    <div className={divClassName}>
      <input
        type="text"
        className={inputClassName}
        onChange={onChange}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}
