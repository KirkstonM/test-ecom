import { connect } from "react-redux";
import { compose } from "redux";
import { fetchStore } from "../../ducks/actions";
import { useEffect } from "react";
import  Spinner  from "../../components/Spinner";
import { Container} from "@mui/material";

const HomeHOC = (Component) => {
    const hocComponent = (props) => {
        const { fetchUsers, token } = props;

        useEffect(() => {
            fetchUsers()
        }, []);

        // if(!token) {
        //     return <Spinner />
        // }
        return (
            <Container>
                <Component {...props} />
            </Container>
        )
    }

    hocComponent.prototypes = {}
    return hocComponent
}

const mapStateToProps = state => ({
    products : state.store,
    token : state.auth.token
});

export const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchStore()), 
});

export default Comp => compose(connect(mapStateToProps, mapDispatchToProps)(HomeHOC(Comp)));