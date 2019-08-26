const db = require("../database/db.js");
const Sequelize = require("sequelize");

module.exports = db.sequelize.define(
  "user",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    sending_country: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    middle_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    marketing_preference: {
      type: Sequelize.STRING
    },
    dob: {
      type: Sequelize.DATE
    },
    gender: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
);
