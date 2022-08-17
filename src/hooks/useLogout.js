import { useAuthContext } from './useAuthContext';
import { useBandsContext } from './useBandsContext';
// import { useGroupsContext } from './useGroupsContext';
// import { useTargetsContext } from './useTargetsContext';
import { useGigsContext } from './useGigsContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: gigsDispatch } = useGigsContext();
	const { dispatch: bandsDispatch } = useBandsContext();
	// const { dispatch: targetsDispatch } = useTargetsContext();
	// const { dispatch: groupsDispatch } = useGroupsContext();

	const logout = () => {
		// remove user from storage
		localStorage.removeItem('user');

		// dispatch a logout action - no payload needed
		dispatch({ type: 'LOGOUT' });
		// clears global workout state so we don't see flash of last user workouts
		gigsDispatch({ type: 'SET_GIGS', payload: null });
		bandsDispatch({ type: 'SET_BANDS', payload: null });
		// targetsDispatch({ type: 'SET_TARGETS', payload: null });
		// groupsDispatch({ type: 'SET_GROUPS', payload: null });
	};

	return { logout };
};
