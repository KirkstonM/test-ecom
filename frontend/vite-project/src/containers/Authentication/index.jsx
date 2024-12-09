import { connect } from "react-redux";
import { compose } from "redux";
import {loginUser, registerUser} from "../../ducks/actions";


const AuthenticationHOC = (Component) => {
    
    const hocComponent = (props) => {

        return <Component {...props} />
    }

    hocComponent.prototypes = {}
    return hocComponent
}

const mapStateToProps = state => ({
    userRegistered : state.auth.isRegistered,
    userLoggedIn : state.auth.isLoggedIn,
    registerLoading : state.loading.auth
});

export const mapDispatchToProps = dispatch => ({
    registerUser: (data, callback) => dispatch(registerUser(data, callback)),
    loginUser : (data, callback) => dispatch(loginUser(data, callback))
});

export default Comp => compose(connect(mapStateToProps, mapDispatchToProps)(AuthenticationHOC(Comp)));