import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
try {
	let url = `https://api.xyroinee.xyz/api/asupan/image/thailand?apikey=${global.xyro}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
	} catch (e) {
	m.reply(eror)
	}
}
handler.command = /^(thailand)$/i
handler.tags = ['cecan']
handler.help = ['thailand']
handler.premium = false
handler.limit = true

export default handler