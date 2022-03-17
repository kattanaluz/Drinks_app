export default function Input({
  inputClassName,
  divClassName,
  onChange,
  onKeyUp,
  placeholder,
  list,
}) {
  return (
    <div className={divClassName}>
      <input
        type="text"
        className={inputClassName}
        onChange={onChange}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
        list={list}
      />
    </div>
  );
}
