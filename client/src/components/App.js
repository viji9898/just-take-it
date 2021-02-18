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
import UserPostShowPage from "./PostingConsole/UserPostShowPage"
import MessageShowPage from "./Messenger/MessageShowPage"
import headImage from "../../images/AdobeStock_182267207_Preview.jpeg"
import manStuffImage from "../../images/Freebie.png"
import coolblue from "../../images/AdobeStock_305126590.jpeg"

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue, } from "recoil"

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
      <RecoilRoot>
        <Layout style={{backgroundImage: `url(${manStuffImage})`}}>
          <Header style={{width:"100vw"}} style={{backgroundImage: `url(${coolblue})`}}>
          <TopBar user={currentUser} />
          </Header>
        <Layout>
        <Sider style={{backgroundImage: `url(${coolblue})`}}>
        {/* <img src={manStuffImage}/> */}
        </Sider>
        <Content id="parent">
          <img src={manStuffImage}/>
          
          <GoodFormModal currentUser={currentUser}/>
          <Switch>
            <Route exact path="/" component={MainShowPage} />        
            <Route exact path="/users/new" component={RegistrationForm} />
            <Route exact path="/user-sessions/new" component={SignInForm} />
          </Switch>
        </Content>
        <Sider style={{margin:100}}width={300} style={{backgroundImage: `url(${coolblue})`}} >
          <br/>
          <UserPostShowPage/>
          <br/>        
          <MessageShowPage/> 
        </Sider>
        </Layout>
          <Footer>DuckTech</Footer>
        </Layout>
      </RecoilRoot>
    </Router>

  );
};

export default hot(App);


