import { Sequelize } from "sequelize";

const db=new Sequelize('powermusic', 'root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db