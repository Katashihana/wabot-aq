let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Three [089626029135]
│ • three [089626029135]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [089626029135]
│ • -
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
