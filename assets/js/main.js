//Task_1
const customer = {
	firstName: 'Jan',
	lastName: 'Kowalski',
	email: 'john.doe@example.com',
	password: 'securePassword123',
	number: '123-456-789',
	adress: '123 Main Street, New York',

	getAdress: function () {
		return this.adress
	},

	changeNumber: function (newNumber) {
		this.number = newNumber
	},
}

console.log(customer.getAdress())
customer.changeNumber('987-654-321')
console.log(customer.number)
/**
 * @returns {boolean}
 */
customer.isMale = false
customer.getGender = function () {
	return this.isMale ? 'male' : 'female'
}
console.log(customer.getGender())

const customerCopy1 = { ...customer }
const customerCopy2 = Object.assign({}, customer)
console.log(customerCopy1)
console.log(customerCopy2)

/**
 * Creates a customer card element and appends it to the body.
 * @param {object} customer
 * @returns {HTMLElement}
 */
function createCardCustomer(customer) {
	const body = document.body

	const card = document.createElement('div')
	card.classList.add('card-customer')

	const fullName = document.createElement('h2')
	fullName.classList.add('card-customer__name')
	fullName.textContent = `${customer.firstName} ${customer.lastName}`

	const email = document.createElement('p')
	email.classList.add('card-customer__email')
	email.textContent = `Email: ${customer.email}`

	const password = document.createElement('p')
	password.classList.add('card-customer__password')
	password.textContent = `Password: ${customer.password}`

	const number = document.createElement('p')
	number.classList.add('card-customer__number')
	number.textContent = `Number: ${customer.number}`

	const adress = document.createElement('p')
	adress.classList.add('card-customer__adress')
	adress.textContent = `Adress: ${customer.adress}`

	card.appendChild(fullName)
	card.appendChild(email)
	card.appendChild(number)
	card.appendChild(password)
	card.appendChild(adress)
	body.appendChild(card)

	return card
}
createCardCustomer(customer)

delete customer.adress
console.log(customer)
//Task_2
const cat = {
	Name: 'Murka',
	color: 'balck',
	isMale: false,
	isFurnitureDemage: true,
}

for (key in cat) {
	console.log(key + ': ' + cat[key])
}

//Task_3
/**
 * Creates a book object.
 * @param {string} author
 * @param {string} title
 * @param {number} yearPublished
 * @param {string} publisher
 * @param {number} price
 * @returns {object}
 */
function Book(author, title, yearPublished, publisher, price) {
	this.author = author
	this.title = title
	this.yearPublished = yearPublished
	this.price = price

	if (typeof publisher === 'string') {
		this.publisher = { name: publisher, city: ' ' }
	} else if (typeof publisher === 'object' && publisher !== null) {
		this.publisher = {
			name: publisher.name || ' ',
			city: publisher.city || ' ',
		}
	} else {
		this.publisher = { name: ' ', city: ' ' }
	}
}

Book.prototype.year = function () {
	return new Date().getFullYear() - this.yearPublished
}

Book.prototype.createNewPrice = function (newPrice) {
	this.price = newPrice
}

const book1 = new Book(
	'George Orwell',
	'1984',
	1949,
	{ name: 'Secker & Warburg', city: 'London' },
	15.99
)
for (key in book1) {
	console.log(key + ':' + book1[key])
}

let years = book1.year()
console.log('years: ' + years)

book1.createNewPrice(20)
console.log(book1.price)
