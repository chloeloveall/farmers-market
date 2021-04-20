import React from 'react';
import Summer from './Summer';

export default class Seasonal extends React.Component {
constructor(props) {
  super(props);
    this.state = {
      seasonOffersAvailable : true
    };
  }

  render() {
    let currentlyVisibleState = null;
    let today = new Date();
    let month = today.getMonth();
    if(this.state.seasonOffersAvailable && (/[0-3]/.test(month)) ) {
      currentlyVisibleState = <Summer />;

    } else {
      currentlyVisibleState = "test";
    }
    return(
      <>
      {currentlyVisibleState}
      </>
    );
  }
}