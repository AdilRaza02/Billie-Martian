import { Modal } from "antd";
import { useStoreActions } from "easy-peasy";
import BudgetForm from "../BudgetForm/BudgetForm";

function UpdateModal() {
  const toggle = useStoreActions((actions) => actions.toggle);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 7 },
  };
  const onCancelModal = () => {
    toggle();
  };

  return (
    <Modal
      {...layout}
      name="basic"
      title="Update Budget Form"
      visible={true}
      onCancel={onCancelModal}
      footer={null}
      forceRender
    >
      <BudgetForm />
    </Modal>
  );
}

export default UpdateModal;
