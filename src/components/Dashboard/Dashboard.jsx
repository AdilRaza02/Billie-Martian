import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import AppSideMenu from "../AppSideMenu/AppSideMenu";
import AppFooter from "../AppFooter/AppFooter";
import CustomersList from "../CustomersList/CustomersList";
import Research from "../Research/Research";

function Dashboard() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <AppSideMenu />
        <Layout>
          <Layout.Content style={{ margin: "16px 5px" }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path="/">
                  <Research />
                </Route>
                <Route path="/customers">
                  <CustomersList />
                </Route>
              </Switch>
            </div>
          </Layout.Content>
          <AppFooter />
        </Layout>
      </Layout>
    </Router>
  );
}

export default Dashboard;
