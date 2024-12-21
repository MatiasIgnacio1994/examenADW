import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const ContactoModel=db.define('contactos',
    {
        nombre: {type:DataTypes.STRING},
        correo: {type:DataTypes.STRING},
        mensaje: {type:DataTypes.STRING}
    })

export default ContactoModel
