import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
let pepe = await conn.resize(thumb, 150, 150)
conn.sendButtonDoc(m.chat, krtu, 'Minimal Intro 🗿','MENU','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/I0viemZ0aRUIpeUhgkVCE8",
    mediaType: "VIDEO",
    description: "https://chat.whatsapp.com/I0viemZ0aRUIpeUhgkVCE8", 
    title: 'Simple Bot WhatsApp By Diki',
    body: wm,
    thumbnail: pepe,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler
