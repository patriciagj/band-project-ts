import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/header/header.component';
import { AlbumList } from './components/album-list/album-list.component';
import { PlaylistPage } from './page/playlist-page';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const darkGrey = grey['900'];
const lightGrey = grey['600'];

const customTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: darkGrey,
    },
    secondary: {
      main: lightGrey,
    },
  },
  typography: {
    h5: { fontWeight: 'bold', textTransform: 'uppercase' },
    h6: {
      fontWeight: 'bold',
      fontSize: '20px',
      fontStyle: 'italic',
    },
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={customTheme}>
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
      </ThemeProvider>
    );
  }
}

export default App;
