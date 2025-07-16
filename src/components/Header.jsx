import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../util/firebase';
import { addUserInfo, removeUserInfo } from '../util/userInfoSlice';
import { LOGO } from '../util/constants';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userInfo = useSelector((item) => item.userInfo);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			// console.log("User state changed:", user)
			if (user) {
				navigate('/browse');
				const { uid, displayName, email, photoURL } = user;
				dispatch(addUserInfo({ uid: uid, displayName: displayName, email: email, photoURL: photoURL }));
			} else {
				navigate('/');
				dispatch(removeUserInfo());
			}
		});

		// Cleanup function to unsubscribe from auth state changes
		return () => unsubscribe();
	}, []);

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				console.log('User signed out successfully');
			})
			.catch((error) => {
				console.log('Error signing out:', error);
			});
	};

	return (
		<div className="absolute px-12 py-2 bg-gradient-to-b from-black w-screen flex justify-between items-center z-50">
			<img src={LOGO} alt="logo" className="w-52" />
			{userInfo && (
				<div className="flex gap-2 items-center">
					<img src={userInfo.photoURL} alt="user-logo" className="w-12 h-12 " />
					<button
						className="border border-red-500 bg-red-600 text-white px-2 py-1 rounded-md h-10"
						onClick={handleLogout}
					>
						Log Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
