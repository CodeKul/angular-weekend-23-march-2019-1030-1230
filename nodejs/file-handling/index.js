//const fs = require('fs');
import fs from 'fs'

export class FileHandling {
    renameFile() {
        fs.rename('./my.txt', './our.txt', err => {
            if (err) {
                console.error(err)
            }
            else console.log(`Operation completed successfully`)
        })
        console.log(`Async Opertaion in progress`)
    }

    renameFileSync() {
        try {
            console.log(`Sync Opertaion in progress`)
            fs.renameSync(`./our.txt`, `./my.txt`)
            console.log(`Operation completed successfully`)
        } catch (error) {
            console.log(error)
        }
    }

    writeFile(data) {
        fs.writeFile('./write.txt', data, err => {
            if (err) {
                console.log(err)
            } else {
                console.log(`File Written Successfully`)
            }
        })
    }
}

let fh = new FileHandling();
fh.renameFile()
fh.renameFileSync()
fh.writeFile(`I want to write the file`)




