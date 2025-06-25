const express = require('express');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers, getUserDetailsAdmin, updateUserRole, deleteUser} = require('../controllers/userController');
const router = express.Router();

const multer = require("multer");

// Use memory storage for buffer upload to Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/register", upload.single("avatar"), registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/logout').get(logout);
router.route('/me').get(isAuthenticatedUser, getUserDetails);
router.route('/password/update').put(isAuthenticatedUser, updatePassword);
router.route('/me/update').put(isAuthenticatedUser, updateProfile);

router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetailsAdmin);
router.route('/admin/user/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole);
router.route('/admin/user/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
module.exports = router;