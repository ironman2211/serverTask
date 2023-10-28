import { Sequelize } from "sequelize";
import { DataTypes } from 'sequelize';
export const sequelize = new Sequelize('taskApplication', 'postgres', 'Brahma#8984', {
    host: 'localhost',
    dialect: 'postgres'
});
export const setConnection = async () => {
    try {
        await sequelize.authenticate();
  
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
