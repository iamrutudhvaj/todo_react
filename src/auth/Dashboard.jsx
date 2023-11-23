import React, { useState } from 'react';
import "./Dashboard.css";
import ViewListIcon from '@mui/icons-material/ViewList';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import FlagIcon from '@mui/icons-material/Flag';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search'; // Added import
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import axios from 'axios';


const Dashboard = () => {
	const [age, setAge] = useState('');
	const [showForm, setShowForm] = useState(false); // State to control form visibilit

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [response, setResponse] = useState(null);


	const addTodo = async (e) => {
		try {
			e.preventDefault();
			const url = "http://192.168.29.54:8000/insertTask";
			const reqdata = {
				title: title,
				description: description,
			};
			const token = localStorage.getItem("token")
			const responseData = await axios.post(url, reqdata, { headers: { authorization: token } });
			console.log(responseData);
		}
		catch (error) {
			setResponse(error);
			setResponse("error:", 'error');
		}

	};



	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	}
	const toggleForm = () => {
		setShowForm(!showForm); // Toggle the form visibility
	}
	const Search = styled('div')(({ theme }) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	}));
	const SearchIconWrapper = styled('div')(({ theme }) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));
	const StyledInputBase = styled(InputBase)(({ theme }) => ({
		color: 'inherit',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('md')]: {
				width: '20ch',
			},
		},
	}));
	const current = new Date();
	const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`
	return (
		<>
			<div className='nav'>
				<div className="msg">
					{response && <div>{response.message}</div>}
				</div>
				<div className="front">
					<MenuIcon style={{ height: "45px", width: "40px", marginLeft: "30px", color: "white", cursor: 'pointer' }} />
					<HomeIcon style={{ height: "45px", width: "40px", marginLeft: "15px", color: "white", cursor: 'pointer' }}></HomeIcon>
					<Search style={{ maxWidth: "230px", marginLeft: "135px", cursor: 'pointer' }}>
						<SearchIconWrapper >
							<SearchIcon style={{ marginLeft: "0px", color: "white", cursor: 'pointer' }} />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
							style={{
								display: "flex",
								marginLeft: "0px",
								marginTop: "-42px",
								color: 'white',
								height: '35px',
								cursor: 'pointer'
							}}
						/>
					</Search>
					<AddIcon style={{ marginLeft: "1340px", marginBottom: '30px', marginTop: '-32px', color: "white", width: "50px", fontSize: '32px', cursor: 'pointer' }} onClick={toggleForm} />
					<NotificationsNoneIcon style={{ marginLeft: "1400px", marginBottom: '45px', marginTop: '-80px', color: "white", width: "45px", fontSize: '32px', cursor: 'pointer' }}></NotificationsNoneIcon>
					<HelpOutlineIcon style={{ marginLeft: "1460px", marginBottom: '59px', marginTop: '-80px', color: "white", width: "45px", fontSize: '32px', cursor: 'pointer' }}></HelpOutlineIcon>
				</div>
			</div>
			<center>
				<div className='dashboad_main'>
					<div className="dashboard_child">
						<div className="title">
							<h2>Today</h2>
							<h4>{date}</h4>
							<div className="dashboard_view"><h4><ViewListIcon /></h4> <h3>view</h3></div>
						</div>
						<br />
						<hr />
						{!showForm && <div className="add_task" onClick={toggleForm} style={{ cursor: "pointer" }}>
							<AddIcon style={{ color: "red" }} /> Add Task
						</div>
						}
						{showForm && (
							<div className="dashboard_box" style={{ marginLeft: "2px" }}>
								<input type="text" className='task_name' placeholder='Task name' value={title} onChange={(e) => { setTitle(e.target.value) }} /><br /><br />
								<input type="text" className='task_description' placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} /><br /> <br />
								<div className="controls">
									<LocalizationProvider dateAdapter={AdapterDayjs}>
										<DatePicker sx={{ width: '180px', height: '20px' }} className="customDatePicker" />
									</LocalizationProvider>
									<FormControl sx={{ marginLeft: "15px", minWidth: 10, borderRadius: '15px' }} className='dropdown'>
										<Select
											value={age}
											onChange={handleChange}
											displayEmpty
											defaultValue='priority'
											inputProps={{ 'aria-label': 'Without label' }}
										>
											<MenuItem value="">
												<h3 style={{ fontWeight: "300", color: "grey" }} ><OutlinedFlagIcon style={{ height: "18px" }} /> Priority</h3>
											</MenuItem>
											<MenuItem value={10}><FlagIcon style={{ color: "red", height: "18px" }} /> Priority 1</MenuItem>
											<MenuItem value={20}><FlagIcon style={{ color: "orange", height: "18px" }} />  Priority 2</MenuItem>
											<MenuItem value={30}><FlagIcon style={{ color: "blue", height: "18px" }} />  Priority 3</MenuItem>
											<MenuItem value={40}><OutlinedFlagIcon style={{ height: "18px" }} />  Priority 4</MenuItem>
										</Select>
									</FormControl>
								</div>
								<hr className='line0' />
								<div className="last">
									<Button variant="contained" style={{ backgroundColor: "rgb(194, 193, 189)", color: "black" }} onClick={toggleForm}>Cancle</Button>
									<Button variant="contained" sx={{ marginLeft: "14px" }} style={{ backgroundColor: "#d1453b" }} className='btnadd' onClick={addTodo}>Add Task</Button>
								</div>
							</div>
						)}
					</div>
				</div>
			</center>
		</>
	);
}
export default Dashboard;

