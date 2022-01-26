console.log('Vue ok', Vue);

Vue.config.devtools = true;

const app = new Vue({
	el: '#app',
	data: {
		hello: 'Hello ',
		userName: '',
		// welcomeMessage: data.hello + data.userName + '!',
	}
})