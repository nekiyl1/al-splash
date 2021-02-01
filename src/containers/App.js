import './App.css';
import { connect } from 'react-redux';
import { loadPage } from '../actions'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { authorization } from "../common/common";

const FeedPhotos = lazy(() => import('../components/feedPhotos'));
const FullPhoto = lazy(() => import('../components/fullPhoto'));

function App(props) {
  const { loadPage, addPage, store } = props;

  authorization();

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">al-splash</h1>
      </div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={(() => (<FeedPhotos pics={store.pics} loadPage={loadPage} addPage={addPage} />))} />
            <Route path="/photo/:id/" component={(() => (<FullPhoto pics={store.pics} />))} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { store: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPage: (page) => dispatch(loadPage(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);