import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const accountSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

// Pre-save hook to hash the password before saving the document
accountSchema.pre('save', async function(next) {
  const user = this

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next()
  }

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10)
    // Hash the password using the generated salt
    const hash = await bcrypt.hash(user.password, salt);
    // Override the plain text password with the hashed one
    user.password = hash
    next()
  } catch (error) {
    console.log(error);
    next()
  }
})

// Method to compare input password with the hashed password
accountSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.model('Account', accountSchema)
