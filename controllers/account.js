import Account from "../models/account.js"

const createAccount = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const account = new Account({ email, password })
    await account.save()
    res.status(201).send({ msg: 'success' })

  } catch (error) {
    // console.log(error);
    res.send({ msg: 'fail' })
  }
}

const loginAccount = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const account = await Account.findOne({ email })
    if (!account) {
      throw 'failed'
    }
    res.send('test')
  } catch (error) {
    res.send({ msg: 'fail' })
  }
}

export { createAccount, loginAccount }