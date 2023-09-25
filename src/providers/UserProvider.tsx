import React, { useEffect, useState } from 'react';
import { User, UserContext } from '../contexts/UserContext';
import { fetchProfile, logOut } from '../api';

interface UserProviderProps {
	children: React.ReactElement | React.ReactElement[];
}

function UserProvider({ children }: UserProviderProps) {
	const [user, setUser] = useState<User | null>(null);

	const loadUser = async () => {
		try {
			const response = await fetchProfile();

			if (!response.isSuccess) {
				setUser(null);
				logOut();
			} else {
				setUser(response.user);
			}
		} catch (err) {
			console.log(err);
		}
	};

	const logoutUser = () => {
		setUser(null);
		logOut();
	};

	useEffect(() => {
		loadUser();
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				loadUser,
				logoutUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserProvider;
