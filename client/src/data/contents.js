const home = {
	name: 'HOME',
	title: 'Welcome to my website',
	subsections: [
		{
			header: 'About me',
			paragraphs: ["I'm a research-based Master student in computer science at University of Waterloo, I'm current working at the scientific computing lab under the supervision of Professor Yuying Li and Professor Kimon Fountoulakis. My research focuses on optimization in graph clustering. Besides, I have a great interest in machine learning and software development."]
		},
		{
			header: 'About this site',
			paragraphs: ["Building my website with JavaScript is fulfilling and exciting, The difficult part for me was commencing the project and the motivation is to learn more about web application. This site is a React app written in ES6, the source code can be found in my GitHub repository."]
		}
	]
};

const teaching = {
	name: 'TEACHING',
	title: 'Teaching Experience',
	subtitle: "Teaching assistant is a role I love to play during my graduate study, Until now, I have TA'ed courses in computer science and statistics",
	subsections: [
		{
			header: "STAT 442, Data Visualization",
			paragraphs: ['Teaching Assistant, University of Waterloo, Fall 2017']
		},
		{
			header: "STAT 330, Mathematical Statistics",
			paragraphs: ["Teaching Assistant, University of Waterloo, Fall 2017"]
		},
		{
			header: "CS 370, Numerical Computation",
			paragraphs: ["Teaching Assistant, University of Waterloo, Winter 2017"]
		},
		{
			header: "CS 794, Optimization for Data Science",
			paragraphs: ["Teaching Assistant, University of Waterloo, Fall 2018"]
		}
	]
};


const projects = {
	name: 'PROJECTS',
	title: 'Selected Projects',
	subsections: [
		{
			header: 'Automated Media Platform',
			paragraphs:["In the summer of 2018, I worked as a software engineer intern in Microsoft STCA, where I involved in the development of a media application in NetEase Cloud Music. My project is to build a processor that can convert text to wav voice. I also integrated open source NLP models into my project in order to correct typos and pronunciation errors. The processor now can provide fully managed, I/O efficient media generation. The data processing speed of the processor is around 5ms/word. In this project, I aquired hands-on experience of industry projects and learned algorithms and data structures to build more efficient program."]
		},

		{
			header: 'Human Face Detection by Boosting Techniques',
			paragraphs: ["I implemented this algorithm during my graduate study. The object of this project is detecting human face by AdaBoost and RealBoost. The training set contains 11838 human face images and 45356 non face images. The images were first converted to integral image in order to reduce the time complexity of computing the predictions from hundreds of filters. The project is written in C++ and the source code can be found in my github repository."]
		},

		{
			header: 'Movie Database Application',
			paragraphs: ["I developed a database driven IMDB-like website. Right now, the website has input, browse and search pages that allow users to add, retrieve and search data by HTML forms. This project is originally written in php and I plan to integrate React into it and deploy it before the end of 2019."]
		}
	]
};

const contact = {
	name: 'CONTACT',
	title: 'Contact Information',
	subtitle: 'If you want to discuss anything, please feel free to email me',
	subsections: [
		{
			paragraphs: [
				'Email: c55hu at uwaterloo.ca',
				'Room 3594, Davis Centre',
				'David Cheriton School of Computer Science',
				'University of Waterloo, Ontario',
				'L3R 8M6'
			]
		}
	],
};

export { home, projects, teaching, contact };
