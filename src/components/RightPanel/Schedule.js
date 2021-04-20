import React from 'react';
// import Calendar from './Calendar';
// import { Form, Button } from 'react-bootstrap';
// import DatePicker from "react-datepicker";

export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        viewableSchedule : new Date().getDay
      };
      // console.log(this.state.viewableSchedule);

      // this.handleChange = this.handleChange.bind(this);
      // this.onFormSubmit = this.onFormSubmit.bind(this);
  
      // handleClick = () => {
      //   this.setState(prevState => ({
      //     viewableSchedule
      //   }))
      // }
  }

  // handleChange(date) {
  //   this.setState({
  //     viewableSchedule: date
  //   })
  // }

  // onFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.viewableSchedule)
  // }

  // render() {
  //   return (
  //     <Form onSubmit={ this.onFormSubmit }>
  //       <Form.Group>
  //         <DatePicker
  //           selected={ this.state.viewableSchedule }
  //           onChange={ this.handleChange }
  //           dateFormat="MM/dd/yyyy"
  //         />
  //       </Form.Group>
  //       <Button>Submit</Button>
  //     </Form>
  //   )




  render() {
    let currentlyVisibleState = null;
    let weekday = startDate.getDay();
    if(this.state.viewableSchedule && weekday === 2) {
      currentlyVisibleState = "Tuesday";
    } else {
      currentlyVisibleState = "broken for now";
    }

    return (
      <>
        {currentlyVisibleState}
      </>
    );
  }
}
