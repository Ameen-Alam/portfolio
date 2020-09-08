import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux'
import { AuthAction, circleAction } from '../store/actions'
import history from '../Routes/History'


let mapDispatchToProps = (dispatch) => {
    return ({
        profile: (uid) => { dispatch(AuthAction.profile(uid)) },
        users: () => { dispatch(circleAction.users()) },
        Groups: (uid) => { dispatch(circleAction.Groups(uid)) },
    })
}

let mapStateToProps = (state) => {
    return ({

    })
}

class AuthProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: 0,
        };
    }

    componentDidMount() {
        let userToken = localStorage.getItem('userToken')
        console.log(userToken, ' X')
        if (userToken !== null) {
            console.log(userToken, ' XX')
            let converuser = JSON.parse(userToken)
            this.props.users()
            this.props.profile(converuser)
            this.props.Groups(converuser)
        }

        this.timer = setTimeout(() => this.progress(5), 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    progress(completed) {
        if (completed > 100) {
            this.setState({ completed: 100 });
            this._animated()
        } else {
            this.setState({ completed });
            const diff = Math.random() * 50;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }
    _animated() {
        history.push('/groups')
    }
    render() {
        return (
            <div>
                <CircularProgress
                    mode="determinate"
                    value={this.state.completed}
                    size={180}
                    thickness={5}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthProgress);