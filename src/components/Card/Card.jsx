import { Card as CardUI } from "antd";

function Card(props) {
  return (
    <CardUI style={{ height: 250 }}>
      <h2 style={{ fontWeight: "normal" }}>{props.content}</h2>
    </CardUI>
  );
}

export default Card;
