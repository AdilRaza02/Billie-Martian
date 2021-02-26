import { Col, Row } from "antd";
import Card from "../Card/Card";
import researchData from "../../dbstore/research.json";

function Research() {
  return (
    <Row gutter={16}>
      <Col span={24}>
        <h1 style={{ fontSize: "2rem" }}>{researchData.problem_title}</h1>
      </Col>

      {researchData.problems.map((problem, index) => (
        <Col key={index} xs={24} xl={4} md={6} style={{ marginTop: "0.5rem" }}>
          <Card content={problem} bordered={false} />
        </Col>
      ))}

      <Col span={24}>
        <h1 style={{ fontSize: "2rem", marginTop: "2rem" }}>
          {researchData.hmw_question}
        </h1>
      </Col>

      {researchData.solutions.map((problem, index) => (
        <Col key={index} xs={24} xl={6} md={6} style={{ marginTop: "0.5rem" }}>
          <Card content={problem} bordered={false} />
        </Col>
      ))}
    </Row>
  );
}

export default Research;
