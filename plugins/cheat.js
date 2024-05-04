let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        global.db.data.users[m.sender].koin = 999999999999998999999
        global.db.data.users[m.sender].limit = 99999999999999999999
        global.db.data.users[m.sender].exp = 9999
        m.reply(`Done Sayang`)
}
handler.command = /^(bagi-koin-sayang)$/i
handler.owner = true

export default handler