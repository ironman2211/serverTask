
import { DataTypes } from 'sequelize';
import { sequelize } from '../postgsql.js';
const Task = sequelize.define("Task", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    listId: {
        type: DataTypes.INTEGER,    
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,    
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,    
        defaultValue: true,
        allowNull: false,
    },
    
});
// await Task.sync({ force: true });
export default Task;
