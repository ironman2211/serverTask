import { DataTypes } from 'sequelize';
import { sequelize } from '../postgsql.js';
const User = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: DataTypes.STRING,

})
// await User.sync({ force: true });
export default User;
