import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import canvafy from 'canvafy'
let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let { premium, level, limit, exp, daftar, umur, pasangan, koin, role } = global.db.data.users[m.sender]
    let name = db.data.users[m.sender].nama
    const image = await new canvafy.WelcomeLeave()
    .setAvatar(pp)
    .setBackground("image", "https://www.bhmpics.com/downloads/blue-sky-anime-Wallpapers/4.12cfdcbb2320824919f1f1b119591d39.jpg")
    .setTitle(name)
    .setDescription(`${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}`)
    .setBorder("#000000")
    .setAvatarBorder("#F0F8FF")
    .setOverlayOpacity(0.5)
    .build()
    let str = `
*Total Koin:* ${koin}
*Total Exp:* ${exp}
*Total Limit:* ${limit}
*Role Saat Ini:* ${role}
*Level Saat Ini:* ${level}
`.trim()
   await conn.sendMessage(who, { image: image, caption: str}, { quoted: m })
   conn.reply(m.chat, 'Profile Kamu Telah Di Kirim Lewat Chat Pribadi, Silahkan Lihat', m)
}
handler.help = ['profile']
handler.tags = ['user']
handler.command = /^(profile|limit|me)$/i
handler.daftar = true
export default handler