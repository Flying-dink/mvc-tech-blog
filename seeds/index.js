const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./commment-seeds');

const sequelize = require( '../config/connection');

const seedAll = async () => {
    await sequelize.sync({force: true});
    const seedAll = async() =>
    console.log('\n-----DATADASE SYNCED-----\n');

    await seedUsers();
    console.log('\n--------USERS SEEDED-------\n');

    await seedPosts();
    console.log('\n--------POSTS SEEDED------\n');
    
    await seedComments();
    console.log('\n---------COMMENTS SEEDED----\n');

    process.exit(0);
    

};
seedAll();