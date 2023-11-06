import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import todo from '../images/todo.png'
import img from '../images/forgot_img.png';
import { styled } from '@mui/material/styles';
import '../index.css'



const ForgotPassword = () => {
    const RedditTextField = styled((props) => (
        <TextField InputProps={{ disableUnderline: true }} {...props} />
    ))
        (({ theme }) => ({
            '& .MuiFilledInput-root': {
                overflow: 'hidden',
                borderRadius: 4,
                backgroundColor: 'transparent',
                border: '1px solid',
                width: '300px',
                '&:hover': {
                    backgroundColor: 'transparent',
                },
                '&.Mui-focused': {
                    backgroundColor: 'transparent',
                },
            },
        }));
    return (
        <div className="forgot_main">

            <div className="col">
                <div className="forgot_child">
                    <img src={todo} alt="" />
                </div>

                <div className="content">
                    <h1>Forgote Your Password?</h1><br />
                    <p>To reset your password, please enter the your email address of your todoist account.</p><br /><br />

                    <RedditTextField
                        label="Email"
                        defaultValue=""
                        placeholder="Enter Your Email..."
                        id="reddit-input"
                        variant="filled"
                        style={{
                            marginTop: 11,
                            width: 200
                        }}
                        InputLabelProps={{
                            style: { color: 'black' }
                        }}
                    />
                    <br /><br />

                    <Button style={{
                        borderRadius: 7,
                        backgroundColor: "#dc4c3e",
                        padding: "6px 30px",
                        fontSize: "16px",
                        width: '300px',
                        height:'50px'

                    }} variant="contained" disableElevation>
                        Reset my password
                    </Button> <br /><br />


                    <div className="forgot_end">
                        <hr className='forgotline' />
                        <a href="/Signin" className='loginlink'>Go to login</a>
                    </div>

                </div>
            </div>
            <div className="col2">
                <div className="forgot_img">
                    <img src={img} width="600px" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
