import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Mau Cari Apa?`
  m.reply(wait)
  let anu = await fetch(`https://api.alyachan.pro/api/spotify?q=${text}&apikey=${global.alya}`)
  let res = await anu.json()
  res = res.data.map((v) => `*Title:* ${v.title}\n*Artist:* ${v.artist}\n*Duration:* ${v.duration}\n*Release:* ${v.release_date}\n*Link:* ${v.url}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat, res, m)
  } 
handler.help = ['spotify']
handler.tags = ['search']
handler.command = /^(spotify)$/i
handler.limit = true

export default handler