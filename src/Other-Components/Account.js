import React from 'react'
import Table from 'react-bootstrap/Table'

export default function Account(props) {

    return (
        <div>
            <Table className="account-table w-50" striped bordered hover>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{props.user.firstName} {props.user.lastName}</td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td>{props.user.userName}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{props.user.email}</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td>
                        <td>{props.user.phone}</td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td>{props.user.dateOfBirth}</td>
                    </tr>
                    <tr>
                        <td>Account #</td>
                        <td>{props.user.accountId}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

