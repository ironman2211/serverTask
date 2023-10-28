
import { DataTypes } from 'sequelize';
import { sequelize } from '../postgsql.js';
const List = sequelize.define("List", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,    
        allowNull: false,
    },
    
});
// await List.sync({ force: true });
export default List;
