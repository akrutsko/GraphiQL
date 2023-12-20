type TostifyMessageProps = {
  title: string;
  text: string;
};

const TostifyMessage = ({ title, text }: TostifyMessageProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default TostifyMessage;
