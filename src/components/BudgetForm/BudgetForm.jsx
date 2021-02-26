import { Form, Input, Button, message } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";

function BudgetForm() {
  const selectedRow = useStoreState((state) => state.selectedRow);
  const update = useStoreActions((actions) => actions.update);

  const [form] = Form.useForm();
  form.setFieldsValue({
    newBudget: selectedRow.budget,
  });

  const tailLayout = {
    wrapperCol: { offset: 20 },
  };

  const onFinish = (budget) => {
    update({ id: selectedRow.id, budget: budget.newBudget });
    message.success("Budget Successfully Updated!");
  };

  const onFinishFailed = () => {
    message.error("Something went wrong. Please Try Again!");
  };

  return (
    <div>
      <Form
        name="update_budget"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item style={{ textAlign: "center", textAlignVertical: "center" }}>
          <h3> {selectedRow.name}</h3>
        </Form.Item>

        <Form.Item
          label="Update Budget"
          name="newBudget"
          rules={[
            {
              required: true,
              message: "This field is mandatory!",
            },

            {
              validator(_, value) {
                if (parseFloat(value) >= selectedRow.budget_spent) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The value must not be less than the budget spent."
                );
              },
            },
          ]}
        >
          <Input type="number" suffix="€" placeholder="Enter New Budget" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default BudgetForm;
