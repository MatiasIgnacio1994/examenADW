import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const RegistroModel = db.define('registrousers',
    {
        email: { type: DataTypes.STRING, unique: true, },
        password: { type: DataTypes.STRING }

    })

export default RegistroModel
