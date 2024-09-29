module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true
    });

    return Address;
};
