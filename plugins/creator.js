import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;𝗗𝗶𝗺𝘀\nNICKNAME:👑 𝐎𝐰𝐧𝐞𝐫 𝗠𝗶𝗸𝘂 𝗯𝗼𝘁\nORG:𝗗𝗶𝗺𝘀\nTITLE:soft\nitem1.TEL;waid=6283143092635:+62 831-4309-2635\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:-\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:-\nitem3.X-ABLabel:💌 Mail Owner 𝗠𝗶𝗸𝘂 𝗯𝗼𝘁\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 ?\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['🎀 Sapa Owner', 'Huuu']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
