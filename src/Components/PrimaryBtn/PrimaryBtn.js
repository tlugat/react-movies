import './PrimaryBtn.scss';

export default function PrimaryBtn(props) {
  const value = props.value;
  const handleType = props.handleType;
  const text = props.text;

  return (
    <button value={value} onClick={handleType}>{text}</button>
  )
}