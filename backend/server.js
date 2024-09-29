const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: ['https://user-address-app.netlify.app'],
    optionsSuccessStatus: 200
  };

app.use(cors());

// Setting up Sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false
});

// Models
const User = require('./models/User')(sequelize, DataTypes);
const Address = require('./models/Address')(sequelize, DataTypes);

// Relationships
User.hasMany(Address, { foreignKey: 'userId', onDelete: 'CASCADE' });
Address.belongsTo(User, { foreignKey: 'userId' });

// Sync Database
sequelize.sync()
    .then(() => {
        console.log('Database synced.');
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });


// Register Route
app.post('/api/register', async (req, res) => {
    const { name, address } = req.body;

    if (!name || !address) {
        return res.status(400).json({ error: 'Name and address are required.' });
    }

    try {
        // Create or find the user
        let user = await User.findOne({ where: { name } });
        if (!user) {
            user = await User.create({ name });
        }

        // Create the address
        const newAddress = await Address.create({
            address,
            userId: user.id
        });

        res.status(201).json({
            message: 'Registration successful.',
            user: {
                id: user.id,
                name: user.name
            },
            address: {
                id: newAddress.id,
                address: newAddress.address
            }
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});
