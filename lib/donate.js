exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `💲 -----[ *MENU DONASI ${BotName}* ]----- 💲
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

🍀 Silahkan donasi dibawah ini :
   
✨ *#PULSA*: 081329896085
✨ *#GOPAY*: 081329896085
✨ *#SAWERIA*: https://saweria.co/donate/bintangnurpradana

✅ Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

🌳 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
