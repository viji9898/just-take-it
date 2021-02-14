import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import MainShowPage from "./MainShowPage"
import GoodFormModal from "./GoodFormModal"

import { Layout, Button } from 'antd';
import GoodForm from "./GoodForm";
const { Header, Footer, Sider, Content,} = Layout

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);


  return (
    <Router>
      <Layout>
        <Header style={{width:"100vw"}, {background:"#ffcccc"}}>
        <TopBar user={currentUser} />
        </Header>
      <Layout>
      <Sider style={{background:"#ffcccc"}}></Sider>
      <Content style={{background:"#ffcccc"}}>
        <GoodFormModal currentUser={currentUser}/>
        <Switch>
          <Route exact path="/" component={MainShowPage} />        
          <Route exact path="/users/new" component={RegistrationForm} />
          <Route exact path="/user-sessions/new" component={SignInForm} />
        </Switch>
      </Content>
      <Sider style={{background:"#ffcccc"}}>
      </Sider>
      </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Router>

  );
};

export default hot(App);


