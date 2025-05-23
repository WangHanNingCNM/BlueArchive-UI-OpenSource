var target = "" // 目标
var random_string = false // 随机字符串
var speed = 6 // 速度
var anti_crasher = true // 拦截命令提示

var mode_1 = true // 加粗
var mode_2 = false // 斜体
var mode_3 = false //混乱

const msg = "\n\n\n\n\n\n\n"

const player_name_list = getPlayerNameList()
clientMessage(JSON.stringify(player_name_list))
const menu = ` {
    "type": "custom_form",
    "title": "自定义踢人",
    "content": [{
        "type": "toggle",
        "text": "随机字符串",
        "default": ` + random_string + `
    }, {
        "type": "toggle",
        "text": "加粗",
        "default": ` + mode_1 + `
    }, {
        "type": "toggle",
        "text": "斜体",
        "default": ` + mode_2 + `
    }, {
        "type": "toggle",
        "text": "混乱",
        "default": ` + mode_3 + `
    }, {
        "type": "dropdown",
        "text": "选择目标",
        "options": ` + JSON.stringify(player_name_list) + `
    }, {
        "type": "slider",
        "text": "刷屏速度",
        "min": 1,
        "max": 50,
        "step": 1,
        "default": ` + speed + `
    }, {
        "type": "toggle",
        "text": "反崩溃",
        "default": ` + anti_crasher + `
    }]
}`;

addForm(menu, function(m1, m2, m3, r, t, s, a) {
    mode_1 = m1
    mode_2 = m2
    mode_3 = m3
    target = player_name_list[t]
    random_string = r
    speed = s
    anti_crasher = a
})

function get_mode(mode_1, mode_2, mode_3) {
    var msg = ""
    if (mode_1) msg += "§l"
    if (mode_2) msg += "§o"
    if (mode_3) msg += "§k"
    return msg
}

function getPlayerNameList() {
    const list = getWorldPlayerList()
    var output = ["全部玩家"]
    for (i in list) output.push(list[i].name)
    return output
}

function spawn_string(bool, length) {
    if (bool) {
        var output = ""
        for (i = 0; i < length; i++) {
            switch (Math.round(Math.random())) {
                case 0:
                    output += "O";
                case 1:
                    output += "o"
            }
        }
        return output
    } else return ""
}

function onTickEvent() {
    if (target === "全部玩家") target = "@a[rm=0.1]"
    if (target !== "") {
        for (i = 0; i < speed; i++) executeCommand("/w " + target + " " + msg + spawn_string(random_string, 6))
    }
}

function onSendChatMessageEvent(message) {
    if (message == '退出') {
        clientMessage('§d聊天踢人已退出')
        exit()
        return true;
    }
}

function onCommandOutputEvent(type, args, value) {
    if (anti_crasher) return true
}
clientMessage("§b[BlueArchive]§e聊天踢人加载成功")
clientMessage("§b[BlueArchive]§e输入退出即可退出脚本")