import React from 'react';

export default class UserNameAndPassword extends React.Component {
    render() {
        return (
            <div className="mb-3">
                <label className="form-label">Username</label>
                    <input type="username" className="form-control" id="usernameInput" placeholder="Username"></input>
                <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
            </div>
        );
    }
}

