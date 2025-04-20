//Task_1
/**
 * Creates a customer object.
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} email
 * @param {string} password
 * @param {number} number
 * @param {string} adress
 * @returns {object}
 */
function Customer(firstName, lastName, email, password, number, adress) {
	this.firstName = firstName
	this.lastName = lastName
	this.email = email
	this.password = password
	this.number = number
	this.adress = adress
	this.getAdress = function () {
		return this.adress
	}
	this.changeNumber = function (newNumber) {
		this.number = newNumber
	}
}
/**
 * @returns {boolean}
 */
Customer.isMale = function () {
	const gender = prompt('Please write your gender true(male)/false(female)')
	if (gender === 'true') {
		return 'male'
	} else {
		return 'female'
	}
}

const CustomerCopy1 = { ...Customer }
const CustomerCopy2 = Object.assign({}, Customer)

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
const customerInfo = new Customer(
	'Jan',
	'Kowalski',
	'jankowalski1@gmail.com',
	'password123',
	'123456789',
	'Warszawa'
)
createCardCustomer(customerInfo)

delete Customer.adress
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
	return Date.now() - this.yearPublished
}

Book.prototype.createNewPrice = function (newPrice) {
	this.price = newPrice
}
