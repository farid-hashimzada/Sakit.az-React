import "./bam.css";
export const Button = ({ text,id, workText }) => {
  return <button className={'btn'} id={id}>{text}{workText}</button>;
};
