const { createStudent } = require('../models/studentModel');
const UserModel = require('../models/userModel');
const UserPreferencesModel = require('../models/userPreferencesModel');

const UserService = {
  getUsers: async () => {
    return await UserModel.getAllUsers();
  },
  createUser: async (name, email) => {
    return await UserModel.createUser(name, email);
  },
  deleteUser: async (id) => {
    return await UserModel.deleteUser(id);
  },
  getUserPreferences: async (userId) => {
    return await UserPreferencesModel.getUserPreferences(userId);
  },
  createUserPreference: async (
    userId,
    languageCode,
    preferredCommunication
  ) => {
    return await UserPreferencesModel.createUserPreference(
      userId,
      languageCode,
      preferredCommunication
    );
  },

  createStudent: async (userId, departament, yearStudy, dateOfGraduation) => {
    return await createStudent(
      userId,
      departament,
      yearStudy,
      dateOfGraduation
    );
  },
};

module.exports = UserService;
