import './main.scss';
import "babel-polyfill";
import objectFitImages from 'object-fit-images';
import { render } from 'react-dom';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import App from './js/app';

function renderApp(Component) {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );

  objectFitImages();
}

renderApp(App);

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept('./js/app', () => renderApp(App));
  }
}
