/**
 * Base By Kai
 * Created On 22/2/2024 // kai & lipz
 * Contact Me on wa.me/6283852515748
*/ 

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '6283852515748'
global.nomerowner = ["6283852515748"]

//watermark 
global.packname = 'Created by'
global.author = 'Kai & Lipz'
global.foter1 = 'SIMPEL BOT'
global.foter2 = 'Created By Kai'
global.foter3 = 'Kai - Multidevice'
global.foter4 = 'Kai Terverifikasi Oleh WhatsApp'
global.idcennel = '120363230204107751@newsletter'
global.thumb = 'https://telegra.ph/file/bccc4fa0424f9c57c6259.jpg'

//database 
global.urldb = 'mongodb+srv://nawdev01:putu0@botwa.q6bwloy.mongodb.net/?retryWrites=true&w=majority'; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

//mess
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !*_',
    botAdmin: '_*❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !*_',
    owner: '_*❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !*_',
    group: '_*❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !*_',
    private: '_(❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_',
    wait: '_*⏳ Sedang Di Proses !*_',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})