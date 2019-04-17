const shell = require('shelljs')
const moment = require('moment')
const path = require('path')
const { exec } = require('child_process')
const fs = require('fs')
const archive = require('archiver')('zip')
const config = require('../../config')

exports.backup = async (req, res, next) => {
    const datapath = path.resolve(__dirname, '../../../backup')
    // const ms = moment(Date.now()).format('YYYYMMDDHHmmss').toString()
    exec(`mongodump -h 127.0.0.1:27017 -d ${config.mongodb.database} -o ${datapath}`, (err, stdout, stderr) => {
        if (err) {
            res.json({
                success: false,
                message: '备份失败',
            })
            return
        }

        // 压缩
        const output = fs.createWriteStream(`${datapath}/${config.mongodb.database}.zip`)
        archive.pipe(output)
        archive.directory(`${datapath}/${config.mongodb.database}`, false)
        archive.finalize()
        output.on('close', () => {
            // 下载到本地
            res.download(`${datapath}/${config.mongodb.database}.zip`)
        })
    })
}
