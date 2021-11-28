exports.wait = () => {
    return `⏳ කරුණාකර මොහොතක් ඉන්න~`
}

exports.ok = () => {
    return `✅ Done. Ok~`
}

exports.err = () => {
    return `‼️දෝෂ විශේෂාංග‼️

⏳හිමිකරු-හයිපර් වෙත විශේෂාංග දෝෂයක් වාර්තා කිරීම⏳`
}

exports.wrongFormat = (prefix) => {
    return `වැරදි ආකෘතිය ️ කරුණාකර *${prefix}allmenu* හි භාවිතා කරන්නේ කෙසේදැයි පරීක්ෂා කරන්න.`
}

exports.emptyMess = () => {
    return `⚠️ කරුණාකර ඔබට පැවසීමට අවශ්‍ය පණිවිඩය ඇතුළු කරන්න! ⚠️`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ *${cmd}* විධානය *${prefix}allmenu හි ලැයිස්තුගත කර නොමැත❎`
}

exports.ownerOnly = () => {
    return `⚠️ මෙම විධානය විශේෂයෙන්ම අයිතිකරු සඳහා වේ!⚠️`
}

exports.doneOwner = () => {
    return `✔  ️Its done, Owner`
}

exports.groupOnly = () => {
    return `👥  මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් වශයෙන් පමණි!`
}

exports.adminOnly = () => {
    return `🙅  මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් පරිපාලකයින්ට පමණි!`
}

exports.nhFalse = () => {
    return `වලංගු නොවන කේතයක්!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Totally blocked: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ පරිශීලක පරිපාලකයෙක් නොවේ!❎`
}

exports.adminAlready = () => {
    return `⚠️️පරිපාලකයෙකු වන පරිශීලකයෙකු ප්‍රවර්ධනය කළ නොහැක!️⚠️ `
}

exports.botNotAdmin = () => {
    return `මුලින්ම bot එක admin කෙනෙක් කරන්න! 🙏`
}

exports.received = (pushname) => {
    return `
ආයුබෝවන් ${pushname}!
වාර්තා කිරීම ගැන ඔබට ස්තුතියි, ඔබගේ වාර්තාව අපට ඉක්මනින් ලැබෙනු ඇත.`
}

exports.videoLimit = () => {
    return `ගොනු ප්‍රමාණය ඉතා විශාලයි!`
}

exports.notNum = (q) => {
    return `"${q}", ඉලක්කම් නොවේ!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `
*ආරක්ෂිතයි ${salam} ${pushname} 😖*
*⌚Time Server : ${time}*
*📚 List-Menu Hyper Beta :*

🤖 *INFO*
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}donate
└──────

🧑 *OWNER*
├ > evaluate
├ $ exec
├ ${prefix}join link
├ ${prefix}setppbot (tag/send image)
└──────

⚙️ *GROUP*
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}group open/close
├ ${prefix}tagall text
├ ${prefix}hidetag text
└──────

😷 *WEEBS*
├ ${prefix}anime query
├ ${prefix}manga query
├ ${prefix}character query
└──────

🔍 *MISC*
├ ${prefix}film query
├ ${prefix}wattpad query
├ ${prefix}webtoons query
├ ${prefix}drakor query
├ ${prefix}pinterest query
└──────

🎞 *MEDIA*
├ ${prefix}toimg (tag sticker)
└──────

⬇️ *DOWNLOADER* 
├ ${prefix}tiktok link
├ ${prefix}ytdl link
├ ${prefix}ytmp3 link
├ ${prefix}ytmp4 link
├ ${prefix}ytdl link
├ ${prefix}facebook link
├ ${prefix}twitter link
├ ${prefix}instagram link
└──────

🙏 *THANKS*
├ supun
├ Baileys#multi-device
├ and all support
└──────

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. ස්පෑම් බොට් කරන්න එපා. ️ සම්බාධක: *⚠️ අනතුරු ඇඟවීම/මෘදු බ්ලොක්*

2. bots අමතන්න එපා. ️ සම්බාධක: *❎ SOFT Block*

3. බොට්ස් ගසාකන්න එපා.😖 සම්බාධක: *‼️ ස්ථිර අවහිරය ‼️️*

🗯️️ ප්‍රතිචාර දැක්වීමට ප්‍රමාද හෝ ප්‍රමාදද? ️ ජාලය, සංඥා, Whatsapp මගින් තහනම් කිරීම සහ අහඹු ලෙස බලපෑම් ඇති විය හැක. දිගටම නීති වලට අවනත වන්න‼️

🗯️ මට මේ bot එකෙන් script එක ගන්න පුළුවන් කොහෙන්ද? ️ මෙම ස්ක්‍රිප්ටය තවමත් පුද්ගලික වන අතර කිසිදා වෙළඳාම් කර නොමැත, වංචාකරුවන් දැනගැනීමේ බුද්ධිමත් වන්න.

🗯️ මට කණ්ඩායමට එකතු කළ හැකිද? ️ තත්ත්‍වය එක් කිරීමට බොට් තාවකාලිකව නොමිලේ.

🗯️ උපසර්ගය කුමක්ද? ️ මෙම බොට් බහු උපසර්ග භාවිතා කරයි. එයින් අදහස් වන්නේ ඔබට #, උපසර්ගය භාවිතා කළ හැකි බවයි. , සහ අනෙකුත් සාධාරණ උපසර්ග.

🗯️ සහෝදරිය, කතාබස් හිමිකරු ප්‍රතිචාර නොදක්වන්නේ කෙසේද? ️ හිමිකරු ප්‍රතිචාර දක්වන්නේ bots සහ Error ගැටලු පිළිබඳ ප්‍රශ්නවලට පමණි, හඳුනන අය සඳහා හෝ ස්ක්‍රිප්ට් හිඟාකෑමට නොවේ.


ඔබට නීති තේරෙන්නේ නම්, ආරම්භ කිරීමට කරුණාකර *${prefix}allmenu* ටයිප් කරන්න!

⚠️ hyperbot හි සියලුම ප්‍රතිපත්ති සහ ප්‍රතිපාදන හිමිකරු සතු වන අතර සියලුම ප්‍රතිපත්ති වෙනස් කිරීම්, ඕනෑම වේලාවක හිමිකරුට පරිශීලකයන් අවලංගු කිරීමට, අවහිර කිරීමට අයිතිය ඇත (*﹏*)

බොහොම ස්තූතියි! ඔබ සඳහා, මිත්‍රශීලී පරිශීලකයින් සහ හයිපර්-බොට් සෑදීමේ ව්‍යාපෘතියට උදව් කළ සමහර පුද්ගලයින් සඳහා 🙏


    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

ආයුබෝවන් 👋 
ඔබට මෙම බොට් එක යාවත්කාලීනව තබා ගැනීමට මට සහාය විය හැක: 🏧  767043432 (OVO/Dana/GoPay)

ඔබේ පරිත්‍යාගයේ ඕනෑම ප්‍රමාණයක් බොහෝ දේ අදහස් කරයි 👍

hyper mod!

හිමිකරු අමතන්න:
wa.me/${ownerNumber} (Owner)

    `
}
