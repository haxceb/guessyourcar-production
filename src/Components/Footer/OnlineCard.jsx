import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';

import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

import CardHeader from '@material-ui/core/CardHeader';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import { red } from '@material-ui/core/colors';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 445
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	},
	alignment: {
		'text-align': 'center',
		marginTop: '2rem'
	},
	alignment_header: {
		'text-align': 'center',
		marginTop: '30px'
	}
}));

function OnlineCard() {
	const classes = useStyles();
	const [ expanded, setExpanded ] = useState(false);
	const [ hover1, sethover1 ] = useState(false);
	const [ hover2, sethover2 ] = useState(false);
	const [ hover3, sethover3 ] = useState(false);

	const handleHover1 = () => {
		sethover1(!hover1);
	};
	const handleHover2 = () => {
		sethover2(!hover2);
	};
	const handleHover3 = () => {
		sethover3(!hover3);
	};

	return (
		<div className="child m-2">
			<Card
				className={classes.root}
				style={{
					border: '2px solid lightgrey',
					borderRadius: '5px',
					margin: 'auto',
					marginBottom: '30px'
				}}
			>
				<CardHeader
					className={classes.alignment_header}
					title="Questions? We’re here to help"
					subheader="Available 9am–5pm CT, 7 days a week."
				/>

				<CardContent
					className=" mx-auto "
					style={{
						maxWidth: '90%',
						border: '2px solid lightgrey',
						borderRadius: '5px',
						marginRight: '10%',
						marginLeft: '10%',
						marginBottom: '30px'
					}}
				>
					<List>
						{/* <ListItem
							style={
								hover1 ? (
									{
										borderBottom: '1px solid lightgrey',
										borderRadius: '0px',
										marginTop: '-10px',
										transition: '1s',
										cursor: 'pointer'
									}
								) : (
									{ marginRight: '30px' }
								)
							}
							onMouseOver={handleHover1}
							onMouseOut={handleHover1}
						>
							<ListItemAvatar style={{ backgroundColor: 'white', color: 'white', marginRight: '5px' }}>
								<Avatar>
									<TextsmsOutlinedIcon color="#f7f5f4" />
								</Avatar>
							</ListItemAvatar>

							<ListItemText
								primary="Live Chat"
								secondary={window.navigator.onLine ? 'Online' : 'Offline'}
							/>
						</ListItem> */}
						<ListItem
							style={
								hover2 ? (
									{
										borderBottom: '1px solid lightgrey',
										borderRadius: '0px',
										marginTop: '-10px',
										marginRight: '30px',
										transition: '1s',
										cursor: 'pointer'
									}
								) : (
									{ marginRight: '30px' }
								)
							}
							onMouseOver={handleHover2}
							onMouseOut={handleHover2}
						>
							{/*here the second Item started */}
							<ListItemAvatar style={{ backgroundColor: 'white', color: 'white', marginRight: '5px' }}>
								<Avatar>
									<PhoneIphoneOutlinedIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Call" secondary="872-802-4119" />
						</ListItem>
						<ListItem
							style={
								hover3 ? (
									{
										borderBottom: '1px solid lightgrey',
										borderRadius: '0px',
										marginTop: '-10px',
										marginRight: '30px',
										transition: '1s',
										cursor: 'pointer'
									}
								) : (
									{ marginRight: '30px' }
								)
							}
							onMouseOver={handleHover3}
							onMouseOut={handleHover3}
						>
							<ListItemAvatar>
								<Avatar>
									<EmailOutlinedIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary="Email" secondary="support@interiordefine.com" />
						</ListItem>
					</List>
				</CardContent>
			</Card>
		</div>
	);
}

/*

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: '#aa12',
		'border-radius': '10px',
		margin: '100px'
		// theme.palette.background.paper
	}
}));

function OnlineCard(props) {
	const classes = useStyles();

	return (
		
		<List className={classes.root}>
			<ListItem>
				
				<ListItemAvatar>
					<Avatar>
						<ImageIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Photos" secondary="Jan 9, 2014" />
			</ListItem>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<WorkIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Work" secondary="Jan 7, 2014" />
			</ListItem>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<BeachAccessIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Vacation" secondary="July 20, 2014" />
			</ListItem>
		</List>
	);
}
*/
export default OnlineCard;
