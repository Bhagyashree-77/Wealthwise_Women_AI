import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  profileImage: String,
  occupation: String,
  monthlyIncome: Number,
  age: Number,
  panNumber: {
    type: String,
    match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
  },
  aadharNumber: {
    type: String,
    match: /^\d{12}$/
  },
  riskTolerance: {
    type: String,
    enum: ['low', 'medium', 'high']
  },
  bankAccounts: [{
    bankName: String,
    accountNumber: {
      type: String,
      required: true
    },
    ifscCode: {
      type: String,
      required: true,
      match: /^[A-Z]{4}0[A-Z0-9]{6}$/
    },
    branch: String,
    accountType: {
      type: String,
      enum: ['savings', 'current', 'salary', 'fd', 'rd']
    },
    balance: Number
  }],
  budgetCategories: [{
    name: String,
    limit: Number,
    spent: Number
  }],
  financialGoals: [{
    name: String,
    targetAmount: Number,
    currentAmount: Number,
    deadline: Date,
    category: String,
    priority: {
      type: String,
      enum: ['high', 'medium', 'low']
    }
  }]
}, {
  timestamps: true
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);
