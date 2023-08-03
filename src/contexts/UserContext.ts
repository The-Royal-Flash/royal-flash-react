import React, { useContext } from 'react';

export interface User {
	id: string;
	email: string;
	nickname: string;
	name: string;
	avatarUrl: string;
}

export interface UserContextProps {
	readonly user: User | null;
	readonly setUser: (user: User | null) => void;
	readonly loadUser: () => Promise<void>;
	readonly logoutUser: () => void;
}

export const UserContext = React.createContext<UserContextProps>({
	user: null,
	setUser: () => null,
	loadUser: async () => {},
	logoutUser: () => null,
});

export function useUserContext() {
	return useContext(UserContext);
}
