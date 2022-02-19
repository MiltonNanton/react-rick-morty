import React from 'react';

//Components
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';

//React-Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

const Wrapper = (props) => {
  return (
    <>
      <Header />
      <div className="appContainer">
        <div className="appSideBarContainer">
          <SideBar />
        </div>
        <div className="appContentContainer">{props.children}</div>
      </div>
    </>
  );
};

export default Wrapper;
