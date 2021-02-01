import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers'
import thunk from 'redux-thunk'
import { loadPageUnsplash } from './common/common'
loadPageUnsplash(1).then(result => {
  const store = createStore(reducer, { pics: { pics: result.response.results, loading: false, page: 1 } }, applyMiddleware(thunk));

  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
});

