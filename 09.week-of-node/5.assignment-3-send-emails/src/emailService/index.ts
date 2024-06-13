import mssql from 'mssql'
import ejs from 'ejs'
import { sqlConfig } from '../config'
import { User } from '../models/userModels'



export async function run(){
    try{
        // console.log('Running on a loop every 5 secs.. ')
        let pool = await mssql.connect(sqlConfig)
        let users = (await pool.request()
        .query("SELECT * FROM dbo.users"))
        .recordset as Array<User>

        console.log(users)
    } catch(error) {
        console.log(error)
    }
}