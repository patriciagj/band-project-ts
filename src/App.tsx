import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header/header.component';
import { AlbumList } from './components/album-list/album-list.component';
import { PlaylistPage } from './page/playlist-page';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/' exact>
            <AlbumList />
          </Route>
          <Route path='/:album'>
            <PlaylistPage />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
