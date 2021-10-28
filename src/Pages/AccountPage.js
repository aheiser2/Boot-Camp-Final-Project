import React, { useState } from "react";
import Navigation from "../Other-Components/Navbar";
import { ACCOUNT_DATA } from "../AccountInformation";
import Account from "../Other-Components/Account";


export default function AccountPage(props) {
	const [users, setUsers] = useState(ACCOUNT_DATA)

    return (
        <React.Fragment>
			<div className="account-page">
			<Navigation />
				<h1>Account Information</h1>
				<div className="account-holder container">
					{users.map((user) => (
						<Account user={user} key={user.accountId} />
						))
					}
				</div>
			</div>
		</React.Fragment>
    )
    
}



        
    