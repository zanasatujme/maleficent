exports.default = {
   names: ['Tools'],
   tags: ['remini', 'hd'],
   command: ['remini', 'hd', 'hdr'],
   start: async (m, {
      conn,
      text,
      prefix,
      command,
      mime,
      quoted,
      Format
   }) => {
      if (/image/.test(mime) || m.mtype === 'imageMessage') {
         m.react('🕒');
         let content = await quoted.download();
         conn.adReply(m.chat, loading, cover, m);
         let data = await Format.HD(content);         
         conn.sendFile(m.chat, data, {
            caption: star + ' Berhasil Di Tingkatkan',
            quoted: m
         })
      } else {
        return m.reply(`Balas Atau Kirim image dengan caption ${prefix+command}`)
      }
   },
   limit: 10,//banyakin limitnya ke enakan usernya nanti kalo limit kecil kan bisa beli premium usernya ke elu :)
   premium: false,
   resgister: true,
   disable: false
};
