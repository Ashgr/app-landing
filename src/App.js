import React from 'react';
import { Grid } from '@material-ui/core'
import Header from './components/Header'
import Intro from './components/Intro'
import Features from './components/Features';
import Download from './components/Download';
import FAQ from './components/FAQ';
import EmailForm from './components/Email';
import Footer from './components/Footer';


function App() {
  return (
    <React.Fragment>
      <Grid container direction="column">
        <Grid item id="back-to-top-anchor">
          <Header />
        </Grid>
        <Grid item>
          <Intro />
        </Grid>
        <Grid item>
          <Features />
        </Grid>
        <Grid item>
          <Download />
        </Grid>
        <Grid item>
          <FAQ />
        </Grid>
        <Grid item>
          <EmailForm />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
