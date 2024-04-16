/* 
// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘
*/
const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Eshtriel',
	imageBackground: false,
	openInNewTab: false,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '3bf7cc050272cb0828c047ea2c0bd7b7', // Write here your API Key
	weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '8.454236',
	defaultLongitude: '124.631897',

	// Autochange
	autoChangeTheme: false,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '17:45',
	hourDarkThemeInactive: '06:30',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Documents',
			icon: 'file-check',
			link: 'https://docs.google.com/document/u/0/',
		},
		{
			id: '2',
			name: 'Drive',
			icon: 'archive-restore',
			link: 'https://drive.google.com/drive/u/0/my-drive',
		},
		{
			id: '3',
			name: 'Spreadsheet',
			icon: 'file-spreadsheet',
			link: 'https://docs.google.com/spreadsheets/u/0/',
		},
		{
			id: '4',
			name: 'Twitter',
			icon: 'twitter',
			link: 'https://twitter.com/home',
		},
		{
			id: '5',
			name: 'Archive Of Our Own',
			icon: 'book-open',
			link: 'https://archiveofourown.org',
		},
		{
			id: '6',
			name: 'Libgen - Library',
			icon: 'library',
			link: 'http://libgen.is/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'graduation-cap',
			id: '1',
			links: [
				{
					name: 'Google Scholar',
					link: 'https://scholar.google.com',
				},
				{
					name: 'YouTube',
					link: 'https://www.youtube.com/',
				},
				{
					name: 'Canva',
					link: 'https://www.canva.com',
				},
				{
					name: 'Gmail',
					link: 'https://mail.google.com/mail/u/0/#inbox',
				},
			],
		},
		{
			icon: 'folder-heart',
			id: '2',
			links: [
				{
					name: 'Google Classroom',
					link: 'https://classroom.google.com',
				},
				{
					name: 'Facebook',
					link: 'https://www.facebook.com',
				},
				{
					name: 'PRISMS',
					link: 'https://prisms.ustp.edu.ph/',
				},
				{
					name: 'USTeP',
					link: 'https://ustep.ustp.edu.ph/my/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
