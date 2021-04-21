import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { withAlert } from "react-alert";
import Card from "../card/Card"

const Products = (props) => {
  let [searchString, setSearchString] = useState('');
  let [searchArray, setSearchArray] = useState([]);

  useEffect(() => {
    setSearchArray(props.userDetails);
  }, []);

  function handle_search_change(value) {
    setSearchString(value);
    set_data_according_to_search(value);
  }

  function set_data_according_to_search(value) {
    let userDetails = props.userDetails;
    let array = [];
    for (let i = 0; i < userDetails.length; i++)
      if (userDetails[i].email.includes(value)) {
        array.push(userDetails[i]);
      }

    setSearchArray(array);
  }

  return <>
    <div className="checkout_button mt-4">
      <input
        type="text"
        className="input_search"
        placeholder="Search Email"
        value={searchString}
        onChange={(e) => handle_search_change(e.target.value)}
      />
    </div>
    <div>
      {(searchArray.length != 0)
        ?
        searchArray.map((user, index) => {
          return <Card {...user} index={index} />
        })
        :
        <h1 className="text-danger">No Result found with  <b>{searchString}</b>.</h1>
      }
    </div>
  </>;
}

const mapStateToProps = state => ({
  isFetchingUserDetails: state.user.isFetchingUserDetails,
  userDetails: state.user.userDetails,
});

const mapDispatchToProps = dispatch => ({
});
export default compose(
  withAlert(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Products);