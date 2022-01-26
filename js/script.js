console.log('Vue ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
	el: '#app',
	data: {
		hello: 'Hello ',
		userName: '',
		helloMark: '!',
		welcomeImage: 'https://picsum.photos/800/600'
	}
})