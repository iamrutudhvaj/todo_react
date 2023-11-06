import React from 'react';
import todo from "../images/Todoist_logo.png";
// import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
// import GoogleIcon from '@mui/icons-material/Google';
import google from "../images/goo.png";
import facebook from "../images/face.png";
import apple from "../images/apple.png";
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import "./Signin.css";
import sipic from "../images/signin.png";

const Signup = () => {

	const RedditTextField = styled((props) => (
		<TextField InputProps={{ disableUnderline: true }} {...props} />
	))
		(({ theme }) => ({
			'& .MuiFilledInput-root': {
				overflow: 'hidden',
				borderRadius: 4,
				backgroundColor: 'transparent',
				border: '1px solid',
				width: '380px',
				'&:hover': {
					backgroundColor: 'transparent',
				},
				'&.Mui-focused': {
					backgroundColor: 'transparent',
				},
			},
		}));

	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	// const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
	// 	event.preventDefault();
	// }

	return (
		<>

			<div className="log_main">
				<div className="div_1">
					<div className="log_header">
						<img src={todo} alt="logo" height="40px" width="150px" />
					</div>
					<div className="log_child">
						<h1 className='chead'>Log in</h1>
					</div>
					<div className="form">
						<form action="">
							<div className="log_icon">

								<div className='log_google'>
									{/* <GoogleIcon /> Continue with Google */}
									<img src={google} alt="google image" height='30px' width='30px' /> <strong className='go' >  Continue with Google </strong>
								</div>
								<div className='log_google'>
									<img src={facebook} alt="facebook image" height='20px' width='20px' style={{ marginRight: '7px' }} /> <strong className='face'>  Continue with Facebook</strong>
								</div>
								<div className='log_google'>
									<img src={apple} alt="apple image" height='30px' width='30px' /><strong className='app'>  Continue with Apple</strong>
								</div><br />
								{/* <fieldset className='line' /> */}
								<hr className='log_line' /><br />
							</div>


							<div className="inp_data">

								<div>
									<RedditTextField
										label="Email"
										defaultValue=""
										placeholder="Enter Your Email..."
										id="reddit-input"
										variant="filled"
										style={{ marginTop: 11 }}
										InputLabelProps={{
											style: { color: 'black' }
										}}
									/>
								</div>
								<div>
									<RedditTextField
										label="Password"
										defaultValue=""
										placeholder="Enter Your Password..."
										id="reddit-input"
										variant="filled"
										type="password"
										style={{ marginTop: 11 }}
										InputLabelProps={{
											style: { color: 'black' }
										}}
									/>

								</div>
							</div>
							<div className='btn'>
								<Button style={{
									borderRadius: 7,
									backgroundColor: "#dc4c3e",
									padding: "6px 30px",
									fontSize: "16px",
									width: '380px',
									height: '52px',
									marginBottom: '13px',

								}} variant="contained" disableElevation>
									Log in
								</Button> <br /><br />
							</div>
							<div className="forget1">
								<a href="/ForgotPassword">Forget Your Password?</a>
							</div>
							<div className="pra1">
								<p>By continuing with Google, Apple, or Email
								, you agree to Todoist’s
								</p>
								<a href='Terms of Service'>Terms of Service</a> and <a href='Privacy Policy'>Privacy Policy</a><p>.</p><br />
								<hr className='line2' />

							</div>
							<div>
							</div>
							<div className='footer1'>
								<p>Don't have an account? <a href="/Signup" className='login'>Sign Up</a></p>
							</div>

						</form>
					</div>
				</div>
				<div className="div_21">
					<img src={sipic} alt="sign in img" height="230px" width="450px" />
				</div>
			</div>
		</>
	)
}

export default Signup;