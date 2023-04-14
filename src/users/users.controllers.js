const Users = require('../models/users.models')
const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')

const createNewUser = async(userObject) => {
  const newUser = {
    id: uuid.v4(),
    firstName: userObject.firstName,
    lastName: userObject.lastName,
    email: userObject.email,
    password: hashPassword(userObject.password),
    birthday: userObject.birthday,
    phone: userObject.phone
  }
  const data = await Users.create(newUser)
  return data
}