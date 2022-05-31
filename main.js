let courseName;

for (let i = 0; i < document.querySelectorAll('.item').length; i++) {
	document.querySelectorAll('.item')[i].addEventListener('click', () => {
		courseName = document.querySelectorAll('.item')[i].getAttribute('data-value')
		for (let j = 0; j < document.querySelectorAll('.item').length; j++) {
			document.querySelectorAll('.item')[j].classList.remove('active')
		}
		document.querySelectorAll('.item')[i].classList.add('active')
	})
}

document.querySelector('.back').addEventListener('click', () => {
	document.querySelector('.back').style.display = 'none'
	document.querySelector('.start-page').style.display = 'flex'
	document.querySelector('.course-page').style.display = 'none'
	index = undefined
	document.querySelector('.week1').innerHTML = ''
	document.querySelector('.week2').innerHTML = ''
	document.querySelector('.week3').innerHTML = ''
	document.querySelector('.week4').innerHTML = ''
	document.querySelector('.week5').innerHTML = ''
})

let names = {
	'pr1': '0613-1',
	'pr2': '0613-2',
	'pr3': '0613-3',
	'pr4': '0613-4',
	'tu1': '1015-1',
	'tu2': '1015-2',
	'tu3': '1015-3',
	'ha1': '0411-1',
	'ha2': '0411-2',
	'ha3': '0411-3',
	'gi1': '0721-1',
	'gi2': '0721-2',
	'gi3': '0721-3',
	'pa1': '0214-1',
	'pa2': '0214-2',
	'pa3': '0214-3',
	'xo1': '1013-1',
	'xo2': '1013-2',
	'xo3': '1013-3',
	'xo1t': '1013-1 տեխ',
	'xo2t': '1013-2 տեխ',
	'xo3t': '1013-3 տեխ',
}

let res;
fetch('/data/data.json')
	.then(data => data.json())
	.then(data => res = data['data'])
	// .then(() => start()) 
	.catch(err => console.log(err))



// function start() {
	document.querySelector('.course-btn').addEventListener('click', () => {
		let index;
		if (courseName) {
			// console.log(res[0]);
			for (let i = 0; i < res[0].length; i++) {
				if (res[0][i] === names[courseName]) {
					index = i
					show()
					document.querySelector('.start-page').style.display = 'none'
					document.querySelector('.back').style.display = 'inline-block'
					document.querySelector('.course-page').style.display = 'flex'
					return
				}
			}

		}
		function show() {
			for (let i = 1; i < 11; i++) {
				let newLesson = document.createElement('li')
				newLesson.innerHTML = res[i][index]
				document.querySelector('.week1').appendChild(newLesson)
			}
			for (let i = 11; i < 21; i++) {
				let newLesson = document.createElement('li')
				newLesson.innerHTML = res[i][index]
				document.querySelector('.week2').appendChild(newLesson)
			}
			for (let i = 21; i < 31; i++) {
				let newLesson = document.createElement('li')
				newLesson.innerHTML = res[i][index]
				document.querySelector('.week3').appendChild(newLesson)
			}
			for (let i = 31; i < 41; i++) {
				let newLesson = document.createElement('li')
				newLesson.innerHTML = res[i][index]
				document.querySelector('.week4').appendChild(newLesson)
			}
			for (let i = 41; i < 51; i++) {
				let newLesson = document.createElement('li')
				newLesson.innerHTML = res[i][index]
				document.querySelector('.week5').appendChild(newLesson)
			}
		}
	})

// }
