import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { withAlert } from "react-alert";
import Users from "./users/Users";
import {
  getUserData,
} from "../redux/actions/auth";
const Home = (props) => {
  let [update, setUpdate] = useState(0);
  let [page, setPage] = useState('products');

  useEffect(() => {
    props.getUserData();
  }, []);

  function changePage() {
    if (page == 'products') setPage('checkout');
    else setPage('products');
  }

  return <>
    {props.isFetchingUserDetails ?
      'Loading...'
      :
      <div>
        <div style={{ textAlign: 'center' }}>
            <Users /> 

        </div>
      </div>
    }
  </>;
}

const mapStateToProps = state => ({
  isFetchingUserDetails: state.user.isFetchingUserDetails,
  userDetails: state.user.userDetails,
});

const mapDispatchToProps = dispatch => ({
  getUserData: data => dispatch(getUserData(data)),
});
export default compose(
  withAlert(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);