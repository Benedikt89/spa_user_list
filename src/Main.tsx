import React, {Component} from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router";
import {connect} from "react-redux";
import UserList from "./components/UserList";
import {selectErrorByKey, selectFetchingByKey} from "./redux/app/selectors";
import {AppStateType} from "./redux/store";
import Header from "./components/Header/Header";
import {fetchUsers} from "./redux/users/actions";

interface I_props {
}

interface I_connectedProps {
  usersIds: string[]
  error: { message: string } | null
  isFetching: boolean
}

interface I_dispatchedProps {
  fetchUsers: () => void
}

interface I_MainProps extends I_props, I_connectedProps, I_dispatchedProps, RouteComponentProps<{}> {
}

interface I_MainState {
  mounted: boolean
}

class Main extends Component<I_MainProps, I_MainState> {
  constructor(props: I_MainProps) {
    super(props);
    this.state = {
      mounted: false
    }
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    let {usersIds} = this.props;
    return (
      <div className={"main-wrapper"}>
        <main>
          <Header/>
          <div className={"content-wrapper"}>
            <Switch>
              <Route exact path="/"
                     render={() => <Redirect to={"/users"}/>}/>

              <Route
                path="/users"
                component={() => (
                  <UserList userIds={usersIds}/>
                )}
              />

              <Route path="*" render={() => <div>Error 404</div>}/>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): I_connectedProps => {
  return {
    usersIds: state.users.usersIds,
    error: selectErrorByKey(state, 'fetchUsers'),
    isFetching: selectFetchingByKey(state, 'fetchUsers'),
  }
};

let ComposedComponent = connect(
  mapStateToProps, {fetchUsers}
)(Main);

export default withRouter(ComposedComponent);