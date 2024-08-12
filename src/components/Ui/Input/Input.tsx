import "./style.scss";
interface InputProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
const Input = ({ name, onChange, disabled, onKeyDown }: InputProps) => {
  return (
    <div className="InputContainer">
      <input
        onChange={onChange}
        value={name}
        name={name}
        onKeyDown={onKeyDown}
        placeholder="What do you mind?"
        className="input"
        type="text"
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
