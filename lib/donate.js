exports.donate = (id, RBSBOT, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *Donasi Ke ${RBSBOT}*
╠════════════════════
║├≽️⚜ *OVO*: _0896-5547-8810_
║├≽️⚜ *PULSA*: _0882-1578-8716_
║├≽️⚜ *GOPAY*: _0857-7185-3430_
╠════════════════════
║  *${RBSBOT}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwa}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${RBSBOT}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ *MADE BY RBSBOT*
╚════════════════════`
}

