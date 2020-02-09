import React, { Component } from "react";

import Modal from "../Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };

    componentWillMount() {
      this.reqinterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.reqinterceptor =  axios.interceptors.response.use(null, error => {
        this.setState({
          error: error
        });
      });
    }
    componentWillUnmount(){
      
      axios.interceptors.request.eject(this.reqinterceptor);
      axios.interceptors.response.eject(this.reqinterceptor);

    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <React.Fragment>
          <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
