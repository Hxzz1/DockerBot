import fs from 'fs'
let timeout = 120000
let poin = 499
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.game = conn.game ? conn.game : {}
    let id = 'asahotak-' + m.chat
    if (id in conn.game) return conn.reply(m.chat, 'Masih ada pertanyaan belum terjawab di chat ini', conn.game[id][0])
    let src = JSON.parse(fs.readFileSync('./database/asahotak.json', 'utf-8'))
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hotak untuk hotak
Bonus: ${poin} Koin
`.trim()
    conn.game[id] = [
        await m.reply(caption),
        json, poin,
        setTimeout(() => {
            if (conn.game[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.game[id][0])
            delete conn.game[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak$/i

export default handler