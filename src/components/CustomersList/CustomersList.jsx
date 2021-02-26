import { Table } from "antd";
import { useStoreState, useStoreActions } from "easy-peasy";
import utils from "../../utils/utils";
import UpdateModal from "../UpdateModal/UpdateModal";

function CustomersList() {
  const { customers, isModelOpen } = useStoreState((state) => ({
    customers: state.customers,
    isModelOpen: state.isModelOpen,
  }));
  const { toggle, selectRow } = useStoreActions((actions) => ({
    toggle: actions.toggle,
    selectRow: actions.selectRow,
  }));

  const onClickRow = (row) => {
    selectRow(row);
    toggle();
  };

  return (
    <div>
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Customers</h1>

      <Table
        dataSource={customers}
        pagination={false}
        rowKey={(record) => record.id}
        onRow={(row) => {
          return {
            onClick: () => onClickRow(row),
          };
        }}
      >
        <Table.Column title="Company Name" dataIndex="name" key="name" />
        <Table.Column
          title="Total Budget"
          key="budget"
          render={(row) => `${utils.formatGermanCurrency(row.budget)}`}
        />
        <Table.Column
          title="Budget Spent"
          key="budget_spent"
          render={(row) => `${utils.formatGermanCurrency(row.budget_spent)}`}
        />
        <Table.Column
          title="Budget Left"
          key="budget_left"
          render={(row) =>
            `${utils.formatGermanCurrency(row.budget - row.budget_spent)}`
          }
        />
        <Table.Column
          title="Date of a First Purchase"
          key="date_of_first_purchase"
          render={(row) =>
            `${utils.formatGermanDate(row.date_of_first_purchase)}`
          }
        />
      </Table>

      {isModelOpen && <UpdateModal />}
    </div>
  );
}

export default CustomersList;
