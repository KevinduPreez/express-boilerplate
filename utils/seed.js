const bcrypt = require('bcrypt');
const User = require('../models/User');

const seed = async () => {
  const adminUsername = 'admin';
  const adminPassword = 'admin123';

  // Hash the password
  const hashedPassword = await bcrypt.hash(adminPassword, 10); // 10 salt rounds

  const [user, created] = await User.findOrCreate({
    where: { username: adminUsername },
    defaults: {
      password: hashedPassword
    }
  });

  if (created) {
    console.log(`✅ Seeded admin user: ${adminUsername}`);
  } else {
    console.log(`ℹ️ Admin user "${adminUsername}" already exists`);
  }
};

module.exports = seed;