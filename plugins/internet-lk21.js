import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`
  let res = await fetch(`https://wibu-api.eu.org/api/lk21/search?title=${text}`)
  m.reply(wait)
  try {
  let json = await res.json()
  json = json.result.map((v) => `*Judul:* ${v.judul}\n*Link:* ${v.link}\n*Kategori:* ${v.kategori}\n*Download:* ${v.dl}\n`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  let loadd = [
 '▒▒▒▒▒▒▒▒▒▒▒▒▒ 0%',
 '██▒▒▒▒▒▒▒▒▒▒▒ 10%',
 '████▒▒▒▒▒▒▒▒▒ 30%',
 '███████▒▒▒▒▒▒ 50%',
 '██████████▒▒▒ 70%',
 '█████████████ 100%',
 `${json}`
 ]

let { key } = await conn.sendMessage(m.chat, {text: '_Bentar_'})

for (let i = 0; i < loadd.length; i++) {
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
  } catch (e) {
  m.reply(`Tidak Dapat Menemukan Apa Yang Kamu Cari`)
  }
}
handler.help = ['lk21search']
handler.tags = ['internet']
handler.command = /^(lk21search)$/i
handler.limit = true

export default handler