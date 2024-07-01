import { useState } from "react";
import { Login, Register } from "../api/User";
import { Navigate } from "react-router-dom";
import styles from './RegisterPage.module.css'

function RegisterPage({ setCurrentUser }) {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [mobile, setMobile] = useState();
	const [password, setPassword] = useState();
	const [showLoginRedirect, setShowLoginRedirect] = useState(false);

	const handleRegister = async () => {
		const response = await Register(name, email, mobile, password);
		if (response.status === 201) {
			const loginResponse = await Login(email, password);
			if (loginResponse.status === 200) {
				setCurrentUser(true);
				const { data } = loginResponse;
				const { token } = data;
				localStorage.setItem("token", token);
				setShowLoginRedirect(true);
			}
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.leftSide}>
			<h1 className={styles.header}>Create an account</h1>
			<p className={styles.subheader}>Your personal jobfinder is here</p>
			<input
				className={styles.inputbox}
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				className={styles.inputbox}
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className={styles.inputbox}
				type="number"
				placeholder="Mobile"
				value={mobile}
				onChange={(e) => setMobile(e.target.value)}
			/>
			<input
				className={styles.inputbox}
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<label className= {styles.label} >
				<input type="checkbox"></input>
				By creating an accpount, I agree to our terms of use and private policy.
			</label>
			<button className={styles.button} onClick={handleRegister}>Create Account</button>
				<div
				className={styles.signinredirect}
					onClick={() => (window.location.href = "/login")}
				>
					Already have an account? SignIn
				</div>
			
			{showLoginRedirect && <Navigate to="/" />}
			</div>
			<div className={styles.rightSide}>
				<h1 className={styles.rhtype}>Your personal job finder</h1>
			</div>
		</div>
		

	);
}

export default RegisterPage;