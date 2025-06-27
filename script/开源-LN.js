var self_id = getLocalPlayerUniqueID()
var self_pos = getEntityPos(self_id)
var self_motion = getEntityMotion(self_id)
var self_rot = getEntityRot(self_id)

var Config = {}


//杀戮光环
regFun("LN_KillAura")
var KillAura = false
Config.KillAura_Range = 4.0
Config.KillAura_FOV = 90
Config.KillAura_CPS = 10
Config.KillAura_AttackPlayers = true
Config.KillAura_AttackMobs = true
Config.KillAura_LastAttack = 0
Config.KillAura_MaxTargets = 3
Config.KillAura_SelectMode = "distance"

// Speed
var BunnyHop = false
Config.Hop = true
Config.Speed = 0.6
Config.JumpHeight = 0.42
Config.angle = -1
Config.operation = ""

// 原地复活
regFun("LN_Resurrect")
var Resurrect = false
Config.AB = getEntityAttribute(self_id, "minecraft:health")
Config.Health = Config.AB.current
Config.DeathPos = self_pos

// 崩溃器
regFun("LN_Crasher")
var Crasher = false
Config.Crasher_Mode = 1
Config.Crasher_num = 50
Config.Crasher_kafu = false

//自杀光环
regFun("LN_SuicideAura")
var SuicideAura = false
Config.SuicideAura_Delay = 0
Config.SuicideAura_Tick = 0
Config.SuicideAura_Num = 0

// 大陀螺
regFun("LN_Derp")
var Derp = false
Config.Derp_Local = false
Config.Derp_AllPlayer = false
Config.Derp_AllEntity = false
Config.Derp_Inverse = false
Config.Derp_Select = false
Config.Derp_Mode = 1
Config.Derp_SpinMode = 3
Config.Derp_yRot = -180
Config.Derp_pRot = -90
Config.Derp_pRot2 = -90
Config.Derp_Speed = 45

// GodMode
regFun("LN_GodMode")
var GodMode = false
Config.GodMode_Back = true
Config.GodMode_Mode = 0
Config.GodMode_Tick = 0
Config.GodMode_Delay = 200
Config.GodMode_Num = 5

// 修改挥手
regFun("LN_Hand")
var Hand = false
Config.Hand_Speed = -5

// 攻击卡人
regFun("LN_AttackCrasher")
var AttackCrasher = false
Config.AttackCrasher_Num = 5

// Fly
regFun("LN_Fly")
var Fly = false
Config.Fly_Snake = true
Config.Fly_Packet = true
Config.Fly_SetUD = 1
Config.Fly_Speed = 1
Config.Fly_UD = Config.Fly_SetUD

// FastMine
regFun("LN_FastMine")
var FastMine = false
Config.FastMine_Mode = 1
Config.FastMine_Num = 3

// SauthLogin
regFun("LN_SauthLogin")
var SauthLogin = false
Config.SauthLogin_Cookie = ""

// 逃逸光环
regFun("LN_RunAway")
var RunAway = false
Config.RunAway_Back = true
Config.RunAway_BackDelay = 1
Config.RunAway_BackTick = 0
Config.RunAway_MinHealth = 10
Config.RunAway_SetPos = false
Config.RunAway_BackPos = {}

// 寄生
regFun("LN_Parasite")
var Parasite = false
Config.Parasite_OnlyCamera = true
Config.Parasite_Target = false

// 锁定相机
regFun("LN_LockCamera")
var LockCamera = false
Config.LockCamera_setPos = {}

// 自由相机
regFun("LN_FreeCamera")
var FreeCamera = false

// 相机偏移
regFun("LN_OffsetCamera")
var OffsetCamera = false
Config.OffsetCamera_x = 0
Config.OffsetCamera_y = 0
Config.OffsetCamera_z = 0

// 范围卡人
regFun("LN_RangeCrasher")
var RangeCrasher = false
Config.RangeCrasher_Range = 6
Config.RangeCrasher_Num = 3

// 屏蔽聊天
regFun("LN_HideChat")
var HideChat = false
Config.HideChat_Hide = false

// 百米捡物
regFun("LN_InfiniteItem")
var InfiniteItem = false
Config.InfiniteItem_ItemList = []
Config.InfiniteItem_Items = []
Config.InfiniteItem_Item = []
Config.InfiniteItem_Num = 1
Config.InfiniteItem_Delay = 1
Config.InfiniteItem_Tick = 0

// 攻击粒子
regFun("LN_AttackParticle")
var AttackParticle = false
Config.AttackParticle_Num = 5
Config.AttackParticle_ID = 3
Config.AttackParticle_Size = 1

// 攻击轨迹
regFun("LN_AttackTrack")
var AttackTrack = false
Config.AttackTrack_ID = 3
Config.AttackTrack_Size = 1
Config.AttackTrack_Density = 10

// 背刺还击
regFun("LN_BackStab")
var BackStab = false
Config.BackStab_Crasher = true
Config.BackStab_Num = 10

// 范围挖掘
regFun("LN_RangeMine")
var RangeMine = false
Config.RangeMine_Auto = false
Config.RangeMine_Chunk = false
Config.RangeMine_x = 5
Config.RangeMine_y = 5
Config.RangeMine_z = 5

// 自动扣字
regFun("LN_AutoFuck")
var AutoFuck = false
Config.AutoFuck_Hide = true
Config.AutoFuck_Delay = 1
Config.AutoFuck_Tick = 0
Config.AutoFuck_Num = 5
Config.AutoFuck_index = 0
Config.AutoFuck_Prefix = ""

// 百米大刀
regFun("LN_InfiniteAura")
var InfiniteAura = false
Config.inf_action = false
Config.inf_TpClick = true
Config.inf_Back = true
Config.inf_BackClick = true
Config.inf_ServerMode = true
Config.inf_White = false
Config.inf_Black = false
Config.inf_target = []
Config.inf_targetList = []
Config.inf_InfiniteTarget = []
Config.inf_WhiteList = '没有内容'
Config.inf_BlackList = '没有内容'
Config.inf_SelectMode = 3
Config.inf_offset_y = 0
Config.inf_MaxRange = 1000
Config.inf_MaxY = 200
Config.inf_MinY = -64
Config.inf_MaxTarget = 3
Config.inf_AttackNum = 1
Config.inf_TpNum = 3
Config.inf_BackDelay = 0
Config.inf_BackTick = 0
Config.inf_SwitchDelay = 0
Config.inf_SwitchTick = 0
Config.inf_DelayTick = 5
Config.inf_Tick = 1

// 碰撞箱
regFun("LN_HitBox")
var HitBox = false
Config.HitBox_x = 1
Config.HitBox_y = 1

// 炸内存
regFun("LN_BoomRam")
var BoomRam = false
Config.BoomRam_Num = 3
Config.BoomRam_Block = 16
Config.BoomRam_x = 0
Config.BoomRam_z = 0

// 攻击音效
regFun("LN_AttackSound")
var AttackSound = false
var AttackSound_file = "file:///" + getResource + "/LNConfig/Sound/AttackSound.mp3"

//绕过EC攻击
regFun("LN_ECAttack")
var ECAttack = false
const ECAttack_Hex = "93c40b4d6f644576656e7443325394c41145434e756b6b6974436c69656e744d6f64c41445434e756b6b6974436c69656e7453797374656dc419496e7465726163744265666f7265436c69656e744576656e7481c40474797065c403544150c0"
const ECAttack_Buffer = hex2buffer(ECAttack_Hex)

//伪造聊天
regFun("LN_FakeMsg")

//受击跳跃
regFun("LN_HurtJump")
var HurtJump = false

//受击卡空
regFun("LN_HurtAir")
var HurtAir = false

//受击无抖动
regFun("LN_NoCamShake")
var NoCamShake = false

//其他变量
const Crasher_Text = "".repeat(100) //崩溃文本
const HideName_Text = "                                                                             " + "\n".repeat(299) //隐藏名字文本
const FuckWord = read_file(getResource() + "/LN/词汇/词汇.txt").split("\n") //词库

const getRandomInt = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomFloat = (min, max) => {
	return Math.random() * (max - min) + min;
}

const getDistance = (pos1, pos2) => {
	const dx = pos1.x - pos2.x
	const dy = pos1.y - pos2.y
	const dz = pos1.z - pos2.z
	const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
	return distance
}

const getAttackAngle = (pos1, pos2) => {
    const dx = pos2.x - pos1.x
    const dz = pos2.z - pos1.z
    const horizontalDist = Math.sqrt(dx*dx + dz*dz)
    
    let yaw = Math.atan2(dx, dz) * (180/Math.PI)
    yaw = (yaw + 360) % 360
    
    const dy = pos2.y - pos1.y
    let pitch = horizontalDist > 0 ? 
        Math.atan2(dy, horizontalDist) * (180/Math.PI) :
        (dy > 0 ? 90 : -90)

    return {yaw, pitch}
}

const getVector = (speed, yaw, angle) => {
	let Yaw = getAngle(yaw + angle)
	const YawRad = (Yaw * Math.PI) / 180
	const vx = -(speed * Math.cos(YawRad))
	const vz = -(speed * Math.sin(YawRad))
	const vy = 0
	const threshold = 1e-10
	const x = Math.abs(vx) < threshold ? 0 : vx
	const z = Math.abs(vz) < threshold ? 0 : vz
	return {
		x: x,
		y: vy,
		z: z
	}
}

function getMoveTowards(spos, tpos, distance) {
	const x1 = spos.x
	const y1 = spos.y
	const z1 = spos.z
	const x2 = tpos.x
	const y2 = tpos.y
	const z2 = tpos.z
	const dx = x2 - x1
	const dy = y2 - y1
	const dz = z2 - z1
	const totalDistance = getDistance(spos, tpos)
	if (totalDistance === 0) {
		return spos
	}
	const ux = dx / totalDistance
	const uy = dy / totalDistance
	const uz = dz / totalDistance
	const xNew = x1 + distance * ux
	const yNew = y1 + distance * uy
	const zNew = z1 + distance * uz
	return {
		x: xNew,
		y: yNew,
		z: zNew
	}
}

function getChunkPos(x, z) {
	const chunkSize = 16
	const startX = Math.floor(x / chunkSize) * chunkSize
	const startZ = Math.floor(z / chunkSize) * chunkSize
	const endX = startX + chunkSize - 1
	const endZ = startZ + chunkSize - 1
	return {
		s: {
			x: startX,
			z: startZ
		},
		e: {
			x: endX,
			z: endZ
		}
	}
}

const LoadUIConfig = (Config) => {
	const Path = getResource() + "/ui"
	if (Config) {
		showToast("UI已替换,请重启程序")
		write_file(Path + "/ui_variables.json", Config)
	} else {
		UIConfig.menu_color = Color2ARGB(menu_color)
		UIConfig.menu_title_background_color = Color2ARGB(menu_title_background_color)
		UIConfig.menu_item_color = Color2ARGB(menu_item_color)
		UIConfig.menu_option_color = Color2ARGB(menu_option_color)
		write_file(Path + "/ui_variables.json", JSON.stringiLN(UIConfig))
	}
}

const LoadSound = (SoundUrl, SoundTime) => {
	var UI = {
		type: "Menu",
		title: {},
		color: "#000000",
		alpha: 0,
		can_close: false,
		show_dividers: false,
		items: [{
			type: "Web",
			url: SoundUrl,
			params: [-1, -1]
		}]
	}
	UI.title.name = "Sound"
	UI.title.size = 1
	UI.title.elevation = 3
	UI.title.background = "#000000"
	UI.title.padding = [4, 4, 4, 4]
	UI.title.colors = ["#000000", "#000000"]
	const json = UI
	const ResourcePath = getResource()
	write_file(ResourcePath + "/script/temp.js", "const t = String(Date.now())\nloadMenu(t, '" + JSON.stringiLN(json) + `')
thread(() => showMenu(t), 10)
thread(() => removeMenu(t), ` + (SoundTime + 10) + ")")
	loadScript("temp.js")
	setTimeout(() => file_delete(ResourcePath + "/script/temp.js"), 500)
}

const DestroyBlock = (x1, y1, z1, x2, y2, z2, TP) => {
	if (!x2 && !y2 && !z2) {
		const packet = {
			pos: {
				x: x1,
				y: y1,
				z: z1
			},
			inputMode: 2,
			playMode: 0,
			rot: {
				pitch: 0,
				yaw: 0
			},
			motion: {
				x: 0,
				y: 0,
				z: 0
			},
			yHeadRot: 0
		}
		if (TP) sendPlayerAuthInput(packet)
		destroyBlock(self_id, x1, y1, z1, 1)
	} else {
		let Blocks = []
		for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {
			for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {
				for (let z = Math.min(z1, z2); z <= Math.max(z1, z2); z++) {
					Blocks.push([x, y, z])
				}
			}
		}
		for (const p of Blocks) {
			const packet = {
				pos: {
					x: p[0],
					y: p[1],
					z: p[2]
				},
				inputMode: 2,
				playMode: 0,
				rot: {
					pitch: 0,
					yaw: 0
				},
				motion: {
					x: 0,
					y: 0,
					z: 0
				},
				yHeadRot: 0
			}
			if (TP) sendPlayerAuthInput(packet)
			destroyBlock(self_id, p[0], p[1], p[2], 1)
		}
	}
}

const SelectTarget = (Var, Target) => {
	const fun = {
		type: "form",
		title: "目标选择",
		content: "目标选择",
		buttons: [{
				text: "添加目标"
			},
			{
				text: "删除目标"
			},
			{
				text: "目标列表"
			}
		]
	}
	addForm(fun, function(index) {
		switch (index) {
			case 1:
				const a = () => {
					const PlayerList = getWorldPlayerList().filter((self_id) => {
						if (!Target.includes(self_id)) return true
					})
					let TargetList = {
						type: "form",
						title: "添加目标",
						content: "玩家列表",
						buttons: []
					}
					for (const self_id of PlayerList) {
						let button = {
							text: getEntityName(self_id)
						}
						TargetList.buttons.push(button)
					}
					addForm(JSON.stringiLN(TargetList), function(index) {
						eval(`${Var}.push(PlayerList[index])`)
						a()
					})
				}
				a()
				break
			case 2:
				const b = () => {
					let TargetList = {
						type: "form",
						title: "删除目标",
						content: "目标列表",
						buttons: []
					}
					for (const self_id of Target) {
						let button = {
							text: getEntityName(self_id)
						}
						TargetList.buttons.push(button)
					}
					addForm(JSON.stringiLN(TargetList), function(index) {
						eval(`${Var}.splice(index, 1)`)
						b()
					})
				}
				b()
				break
			case 3:
				const c = () => {
					let TargetList = {
						type: "form",
						title: "目标列表",
						content: "目标列表",
						buttons: []
					}
					for (const self_id of Target) {
						let button = {
							text: getEntityName(self_id)
						}
						TargetList.buttons.push(button)
					}
					addForm(JSON.stringiLN(TargetList), function(index) {})
				}
				c()
				break
		}
	})
}

const SelectTarget2 = (Var, Target) => {
	let fun = {
		type: "form",
		title: "当前目标: §a" + getEntityName(Target),
		content: "选择目标",
		buttons: []
	}
	const PlayerList = getPlayerList()
	for (const pid of PlayerList) {
		let button = {
			text: getEntityName(pid)
		}
		fun.buttons.push(button)
	}
	let button = {
		text: "没有可寄生的宿主"
	}
	let a = false
	if (fun.buttons.length == 0) {
		fun.buttons[0] = button
		a = true
	}
	const b = addForm(JSON.stringiLN(fun), function(index) {
		eval(`${Var} = ${PlayerList[index]}`)
	})
}

const DrawParticle = (self_id, x, y, z, size) => {
	addParticle(Number(self_id), x, y, z, x, y, z, size, false)
}

const SendCrasher = (select) => {
	executeCommand(`/tell ${select} §k\n§k§r\n\n\n\n\n\n\n\n\n\n\n\n\n${Crasher_Text}`)
}

const Color2ARGB = (Color) => {
	let unsignedColor = Color >>> 0
	let hexAlpha = ((unsignedColor >> 24) & 0xFF).toString(16).padStart(2, '0')
	let hexRed = ((unsignedColor >> 16) & 0xFF).toString(16).padStart(2, '0')
	let hexGreen = ((unsignedColor >> 8) & 0xFF).toString(16).padStart(2, '0')
	let hexBlue = (unsignedColor & 0xFF).toString(16).padStart(2, '0')
	return `#${hexAlpha}${hexRed}${hexGreen}${hexBlue}`
}

function hex2u8(hexString) {
	const bytes = new Uint8Array(hexString.length / 2)
	for (let i = 0; i < hexString.length; i += 2) {
		bytes[i / 2] = parseInt(hexString.substring(i, i + 2), 16)
	}
	return bytes
}

function hex2buffer(hexString) {
	const uint8Array = hex2u8(hexString)
	return uint8Array.buffer
}

//兔子跳
function SpeedFunc() {
	if (Config.operation == "up") setEntityMotion(self_id, self_motion.x, Config.JumpHeight, self_motion.z)
	if (Config.operation == "down") setEntityMotion(self_id, self_motion.x, -Config.JumpHeight, self_motion.z)
	Config.operation = ""
	if (Config.angle != -1) {
		let Motion = getVector(Config.Speed, self_rot.yaw, Config.angle)
		if (Config.Hop) {
			const Ground = getEntityIsGround(self_id)
			if (Ground) {
				Motion.y = Config.JumpHeight
			} else Motion.y = self_motion.y
		} else Motion.y = self_motion.y
		setEntityMotion(self_id, Motion.x, Motion.y, Motion.z)
		Config.angle = -1
	}
}

//原地复活
function ResurrectFunc() {
	Config.AB = getEntityAttribute(self_id, "minecraft:health")
	if (Config.Health == 0 && Config.AB.current == 20) {
		setEntityPos(self_id, Config.DeathPos.x, Config.DeathPos.y, Config.DeathPos.z)
	}
	Config.Health = Config.AB.current
	Config.DeathPos = self_pos
}

//崩溃器
function CrasherFunc() {
	for (let i = 0; i < Config.Crasher_num; i++) {
		switch (Config.Crasher_Mode) {
			case 1:
				buildBlock(self_id, self_pos.x, self_pos.y, self_pos.z, i + 6)
				break
			case 2:
				destroyBlock(self_id, self_pos.x, self_pos.y, self_pos.z, i + 6)
				break
		}
	}
}

//大陀螺
function DerpFunc() {
	Config.Derp_yRot = Config.Derp_yRot + Config.Derp_Speed
	switch (Config.Derp_SpinMode) {
		case 1:
			Config.Derp_yRot = self_rot.yaw
			if (Config.Derp_pRot >= 90) {
				Config.Derp_pRot = -90
			}
			break
		case 2:
			Config.Derp_pRot2 = Config.Derp_pRot
			if (Config.Derp_yRot >= 180) {
				Config.Derp_yRot = -180
			}
			break
		case 3:
			if (Config.Derp_pRot >= 90) {
				Config.Derp_pRot = -90
			}
			if (Config.Derp_yRot >= 180) {
				Config.Derp_yRot = -180
			}
			break
	}
	if (Config.Derp_AllPlayer) {
		for (const pid of getPlayerList()) {
			if (self_id == pid) continue
			setEntityRot(pid, Config.Derp_Inverse ? -Config.Derp_pRot : Config.Derp_pRot, Config.Derp_Inverse ? -Config.Derp_yRot : Config.Derp_yRot)
		}
	}
	if (Config.Derp_AllEntity) {
		for (const eid of getEntityList()) {
			setEntityRot(eid, Config.Derp_Inverse ? -Config.Derp_pRot : Config.Derp_pRot, Config.Derp_Inverse ? -Config.Derp_yRot : Config.Derp_yRot)
		}
	}
	if (Config.Derp_Select) {
		for (const pid of Config.Derp_Select) {
			setEntityRot(pid, Config.Derp_Inverse ? -Config.Derp_pRot : Config.Derp_pRot, Config.Derp_Inverse ? -Config.Derp_yRot : Config.Derp_yRot)
		}
	}
	if (Config.Derp_Local) {
		setEntityRot(self_id, Config.Derp_Inverse ? -Config.Derp_pRot : Config.Derp_pRot, Config.Derp_Inverse ? -Config.Derp_yRot : Config.Derp_yRot)
	}
	const MovePlayer = {
		id: self_id,
		pos: getEntityPos(self_id),
		rot: {
			pitch: Config.Derp_Inverse ? -Config.Derp_pRot : Config.Derp_pRot,
			yaw: Config.Derp_Inverse ? -Config.Derp_yRot : Config.Derp_yRot
		},
		yHeadRot: Config.Derp_Inverse ? -Config.Derp_pRot : Config.Derp_pRot,
		mode: 0,
		ground: getEntityIsGround(self_id)
	}
	const PlayerAuthInput = {
		pos: getEntityPos(self_id),
		inputMode: 2,
		playMode: 0,
		rot: {
			pitch: Config.Derp_Inverse ? -Config.Derp_pRot : Config.Derp_pRot,
			yaw: Config.Derp_Inverse ? -Config.Derp_yRot : Config.Derp_yRot
		},
		motion: getEntityMotion(self_id),
		yHeadRot: Config.Derp_Inverse ? -Config.Derp_pRot : Config.Derp_pRot,
	}
	switch (Config.Derp_Mode) {
		case 1:
			sendPlayerAuthInput(PlayerAuthInput)
			break
		case 2:
			sendMovePlayer(MovePlayer)
			break
	}
}

//上帝模式
function GodModeFunc() {
	Config.GodMode_Tick++
	if (Config.GodMode_Back) {
		if (Config.GodMode_Tick > Config.GodMode_Delay) {
			const PlayerAuthInput = {
				pos: self_pos,
				inputMode: 2,
				playMode: 0,
				rot: self_rot,
				motion: {
					x: 0,
					y: 0,
					z: 0
				},
				yHeadRot: 0
			}
			sendPlayerAuthInput(PlayerAuthInput)
			Config.GodMode_Tick = 0
		}
	}
	const PlayerAuthInput = {
		pos: {
			x: self_pos.x,
			y: 999999,
			z: self_pos.z
		},
		inputMode: 2,
		playMode: 0,
		rot: self_rot,
		motion: {
			x: 0,
			y: 0,
			z: 0
		},
		yHeadRot: 0
	}
	const MovePlayer = {
		id: self_id,
		pos: getEntityPos(self_id),
		rot: self_rot,
		yHeadRot: 0,
		mode: 0,
		ground: getEntityIsGround(self_id)
	}
	for (let i = 0; i < Config.GodMode_Num; i++) {
		switch (Config.GodMode_Mode) {
			case 1:
				sendPlayerAuthInput(PlayerAuthInput)
				break
			case 2:
				sendMovePlayer(MovePlayer)
				break
		}
	}
}

//挥手速度
function HandFunc() {
	if (Config.Hand_Speed > 0) setEntityEffect(self_id, {
		id: 3,
		duration: 2,
		amplifier: Config.Hand_Speed,
		displayOnScreenTextureAnimation: false,
		noCounter: true,
		effectVisible: false
	})
	if (Config.Hand_Speed < 0) setEntityEffect(self_id, {
		id: 4,
		duration: 2,
		amplifier: -Config.Hand_Speed,
		displayOnScreenTextureAnimation: false,
		noCounter: true,
		effectVisible: false
	})
}

//锁定飞行
function FlyFunc() {
	let Motion = getVector(Config.Fly_Speed, self_rot.yaw, 270)
	if (Config.Fly_Snake) Motion.y = Config.Fly_UD
	Config.Fly_UD > 0 ? Config.Fly_UD = -Config.Fly_SetUD : Config.Fly_UD = Config.Fly_SetUD
	setEntityMotion(self_id, Motion.x, Motion.y, Motion.z)
	if (Config.Fly_Packet) {
		sendPlayerAuthInput({
			pos: self_pos,
			inputMode: 2,
			playMode: 0,
			motion: Motion,
			rot: self_rot,
			yHeadRot: 0
		})
	}
}

// 辅助函数：向量点积判断FOV
function isInFOV(selfPos, selfRot, targetPos, fov) {
    const dx = targetPos.x - selfPos.x
    const dy = targetPos.y - selfPos.y
    const dz = targetPos.z - selfPos.z
    
    // 计算目标方向向量
    const targetDir = {
        x: dx,
        y: dy,
        z: dz
    }
    const length = Math.sqrt(dx*dx + dy*dy + dz*dz)
    if (length === 0) return true
    
    // 标准化向量
    targetDir.x /= length
    targetDir.y /= length
    targetDir.z /= length
    
    // 将自身旋转转换为方向向量
    const yawRad = (selfRot.yaw * Math.PI) / 180
    const pitchRad = (selfRot.pitch * Math.PI) / 180
    const forward = {
        x: -Math.sin(yawRad) * Math.cos(pitchRad),
        y: -Math.sin(pitchRad),
        z: Math.cos(yawRad) * Math.cos(pitchRad)
    }
    
    // 计算点积和夹角
    const dot = forward.x * targetDir.x + forward.y * targetDir.y + forward.z * targetDir.z
    const angle = Math.acos(dot) * (180 / Math.PI)
    return angle <= fov / 2
}

// 辅助函数：判断实体是否为敌对生物
function isMob(entityId) {
    const types = ["minecraft:zombie", "minecraft:skeleton", "minecraft:creeper"] // 根据需要扩展
    return types.includes(getEntityType(entityId))
}

// 优化后的杀戮光环函数
function KillAuraFunc() {
    const now = Date.now()
    if (now - Config.KillAura_LastAttack < 1000/Config.KillAura_CPS) return
    
    const selfPos = getEntityPos(self_id)
    const selfRot = getEntityRot(self_id)
    let validTargets = []
    
    // 收集玩家目标
    if (Config.KillAura_AttackPlayers) {
        getPlayerList().forEach(pid => {
            if (pid === self_id) return
            const pos = getEntityPos(pid)
            if (getDistance(selfPos, pos) > Config.KillAura_Range) return
            if (!isInFOV(selfPos, selfRot, pos, Config.KillAura_FOV)) return
            validTargets.push({
                id: pid,
                distance: getDistance(selfPos, pos),
                health: getEntityAttribute(pid, "minecraft:health").current
            })
        })
    }
    
    // 收集生物目标
    if (Config.KillAura_AttackMobs) {
        getEntityList().forEach(eid => {
            if (!isMob(eid)) return
            const pos = getEntityPos(eid)
            if (getDistance(selfPos, pos) > Config.KillAura_Range) return
            if (!isInFOV(selfPos, selfRot, pos, Config.KillAura_FOV)) return
            validTargets.push({
                id: eid,
                distance: getDistance(selfPos, pos),
                health: getEntityAttribute(eid, "minecraft:health").current
            })
        })
    }
    
    // 目标排序
    validTargets.sort((a, b) => {
        if (Config.KillAura_SelectMode === "distance") return a.distance - b.distance
        if (Config.KillAura_SelectMode === "health") return a.health - b.health
        return 0
    })
    
    // 攻击前N个目标
    validTargets.slice(0, Config.KillAura_MaxTargets).forEach(target => {
        attackEntity(target.id, true)
    })
    
    if (validTargets.length > 0) {
        Config.KillAura_LastAttack = now
    }
}

//逃逸光环
function RunAwayFunc() {
	const RunAway_Attribute = getEntityAttribute(self_id, "minecraft:health")
	const RunAway_Health = RunAway_Attribute.current
	if (RunAway_Health <= Config.RunAway_MinHealth) {
		if (!Config.RunAway_BackPos) Config.RunAway_BackPos = self_pos
		setEntityPos(self_id, Config.RunAway_SetPos.x, Config.RunAway_SetPos.y, Config.RunAway_SetPos.z)
		if (Config.RunAway_Back) {
			if (Config.RunAway_BackDelay == Config.RunAway_BackTick) {
				setEntityPos(self_id, Config.RunAway_BackPos.x, Config.RunAway_BackPos.y, Config.RunAway_BackPos.z)
				Config.RunAway_BackPos = null
				Config.RunAway_BackTick = 0
			}
			Config.RunAway_BackTick++
		}
	}
}

//寄生虫
function ParasiteFunc() {
	if (Config.Parasite_Target != -1) {
		const pos = getEntityPos(Config.Parasite_Target)
		if (pos.x && pos.y && pos.z) {
			if (Config.Parasite_OnlyCamera) {
				setCameraAnchor(0, 0, 0)
				x = pos.x - self_pos.x
				y = pos.y - self_pos.y
				z = pos.z - self_pos.z
				setCameraAnchor(x, y, -z)
			}
			if (!Config.Parasite_OnlyCamera) setEntityPos(self_id, pos.x, pos.y, pos.z)
		} else showTipMessage("距离寄生宿主过远,请重新选择")
	} else showTipMessage("未选择寄生宿主")
}

//锁定摄像机
function LookCameraFunc() {
	setCameraAnchor(0, 0, 0)
	x = Config.LockCamera_setPos.x - self_pos.x
	y = Config.LockCamera_setPos.y - self_pos.y
	z = Config.LockCamera_setPos.z - self_pos.z
	setCameraAnchor(x, y, -z)
}

//范围卡人
function RangeCrasherFunc() {
	for (const target of getPlayerList()) {
		if (target == self_id) continue
		if (getDistance(self_pos, getEntityPos(target)) > Config.RangeCrasher_Range) continue
		for (let i = 0; i < Config.RangeCrasher_Num; i++) {
			SendCrasher(getEntityName(target))
		}
	}
}

//百米拾取
function InfiniteItemFunc() {
	Config.InfiniteItem_Tick++
	Config.InfiniteItem_ItemList = getEntityList()
	if (Config.InfiniteItem_Delay == 0 && Config.InfiniteItem_ItemList.length > 0) Config.InfiniteItem_Item = Config.InfiniteItem_ItemList
	if (Config.InfiniteItem_Delay > 0 && Config.InfiniteItem_Items.length == 0 && Config.InfiniteItem_ItemList.length > 0) Config.InfiniteItem_Items = Config.InfiniteItem_ItemList
	if (Config.InfiniteItem_Delay > 0 && Config.InfiniteItem_Tick > Config.InfiniteItem_Delay && Config.InfiniteItem_Items.length > 0) {
		Config.InfiniteItem_Item[0] = Config.InfiniteItem_Items[0]
		Config.InfiniteItem_Items.shift()
		Config.InfiniteItem_Tick = 0
	}
	for (const E of Config.InfiniteItem_Item) {
		if (getEntityNamespace(E) != "minecraft:item") continue
		let pos = getEntityPos(E)
		const Carry = {
			pos: pos,
			inputMode: 2,
			playMode: 0,
			rot: {
				pitch: 0,
				yaw: 0
			},
			motion: {
				x: 0,
				y: 0,
				z: 0
			},
			yHeadRot: 0
		}
		for (let i = 0; i < Config.InfiniteItem_Num; i++) sendPlayerAuthInput(Carry)
	}
}

function RangeMineFunc() {
	const x1 = self_pos.x + Config.RangeMine_x
	const y1 = self_pos.y + Config.RangeMine_y
	const z1 = self_pos.z + Config.RangeMine_z
	const x2 = self_pos.x - Config.RangeMine_x
	const y2 = self_pos.y - Config.RangeMine_y
	const z2 = self_pos.z - Config.RangeMine_z
	DestroyBlock(x1, y1, z1, x2, y2, z2, false, 0)
}

function AutoFuckFunc() {
	Config.AutoFuck_Tick++
	if (Config.AutoFuck_Tick < Config.AutoFuck_Delay) return
	for (let i = 0; i < Config.AutoFuck_Num; i++) {
		const Msg = `${Config.AutoFuck_Hide ? HideName_Text : ""}${Config.AutoFuck_Prefix}${FuckWord[Config.AutoFuck_index]}`
		sendChatMessage(Msg)
		Config.AutoFuck_index++
		Config.AutoFuck_Tick = 0
		if (Config.AutoFuck_index > FuckWord.length) Config.AutoFuck_index = 0
	}
}

function FakeMsg() {
	const IDList = getWorldPlayerList();
	const playerNames = IDList.map(self_id => self_id.name)
	const json = JSON.stringiLN({
		type: "custom_form",
		title: "伪装玩家发言",
		content: [{
				type: "dropdown",
				text: "选择玩家",
				options: playerNames
			},
			{
				type: "input",
				text: "输入内容",
				placeholder: "输入伪装发送内容",
				default: "脑摊管理"
			}
		]
	})
	addForm(json, function(...formData) {
		const selectedPlayer = playerNames[formData[0]]
		const messageContent = formData[1]
		if (selectedPlayer && messageContent) {
			const formattedMessage = `${HideName_Text}<${selectedPlayer}> ${messageContent}`;
			sendChatMessage(formattedMessage);
		}
	})
}

function GetTarget() {
	const IDList = getPlayerList()
	if (!Config.inf_Black) {
		Config.inf_target = IDList.filter(id => {
			if (id == self_id) return false
			const name = getEntityName(id)
			const pos1 = self_pos
			const pos2 = getEntityPos(id)
			const distance = getDistance(pos1, pos2)
			if (distance <= Config.inf_MaxRange && Config.inf_MaxY >= pos2.y && Config.inf_MinY <= pos2.y) return true
		})
		switch (Config.inf_SelectMode) {
			case 1:
				Config.inf_target.sort((a, b) => getEntityAttribute(a, 'minecraft:health').current - getEntityAttribute(b, 'minecraft:health').current)
				break
			case 2:
				Config.inf_target.sort((a, b) => getDistance(self_pos, getEntityPos(a)) - getDistance(self_pos, getEntityPos(a)))
				break
			case 3:
				break
		}
		if (Config.inf_target.length > Config.inf_MaxTarget) Config.inf_target = Config.inf_target.slice(0, Config.inf_MaxTarget)
	} else {
		Config.inf_target = IDList.filter(id => {
			const name = getEntityName(id)
			if (Config.inf_BlackList.split(',').includes(name)) return true
		})
	}
}

function Attack(T) {
	if (Config.inf_Back) Config.inf_BackTick++
	let BackPos = self_pos
	BackPos.y += Config.inf_offset_y
	Config.inf_BackTick = 0
	if (T.length == 0) return
	for (const id of T) {
		const name = getEntityName(id)
		const pos = getEntityPos(id)
		const x = pos.x
		const y = pos.y + Config.inf_offset_y
		const z = pos.z
		if (Config.inf_ServerMode) {
			setEntityPos(self_id, x, y, z)
		}
		for (let i = 1; i <= Config.inf_TpNum; i++) {
			Teleport(x, y, z)
			for (let i = 1; i <= Config.inf_AttackNum; i++) {
				attackEntity(id, Config.inf_action)
			}
		}
		if (Config.inf_Back && BackPos && Config.inf_BackTick >= Config.inf_BackDelay) {
			const backClick = {
				pos: BackPos,
				rot: {
					pitch: 0,
					yaw: 0
				},
				inputMode: 1,
				playMode: 0,
				motion: {
					x: 0,
					y: 0,
					z: 0
				},
				yHeadRot: 0,
				inputs: [1],
				actions: [{
					pos: BackPos,
					value: 1,
					type: 25
				}]
			}
			const backTP = {
				pos: BackPos,
				rot: {
					pitch: 0,
					yaw: 0
				},
				inputMode: 1,
				playMode: 0,
				motion: {
					x: 0,
					y: 0,
					z: 0
				},
				yHeadRot: 0,
				inputs: [1]
			}
			setEntityPos(self_id, BackPos.x, BackPos.y, BackPos.z)
			sendPlayerAuthInput(backTP)
			if (Config.inf_BackClick) {
				buildBlock(self_id, BackPos.x, BackPos.y, BackPos.z, 1)
				sendPlayerAuthInput(backClick)
				attackEntity(id, Config.inf_action)
			}
		}
	}
}

function Teleport(x, y, z) {
	const tpClick = {
		pos: {
			x: x,
			y: y,
			z: z
		},
		rot: {
			pitch: 0,
			yaw: 0
		},
		inputMode: 1,
		playMode: 0,
		motion: {
			x: 0,
			y: 0,
			z: 0
		},
		yHeadRot: 0,
		inputs: [1],
		actions: [{
			pos: {
				x: x,
				y: y,
				z: z
			},
			value: 1,
			type: 25
		}]
	}
	const TP = {
		pos: {
			x: x,
			y: y,
			z: z
		},
		rot: {
			pitch: 0,
			yaw: 0
		},
		inputMode: 1,
		playMode: 0,
		motion: {
			x: 0,
			y: 0,
			z: 0
		},
		yHeadRot: 0,
		inputs: [1]
	}
	sendPlayerAuthInput(TP)
	if (Config.inf_TpClick) {
		buildBlock(self_id, x, y, z, 1)
		sendPlayerAuthInput(tpClick)
	}
}

function InfiniteAuraFunc() {
	Config.inf_InfiniteTarget = []
	if (!Config.inf_Tick--) {
		GetTarget()
		Config.inf_Tick = Config.inf_DelayTick
		if (Config.inf_SwitchDelay == 0 && Config.inf_target.length > 0) {
			Config.inf_InfiniteTarget = Config.inf_target
		}
	}
	Config.inf_SwitchTick++
	if (Config.inf_SwitchDelay > 0 && Config.inf_targetList.shift.length == 0 && Config.inf_target.length > 0) {
		Config.inf_targetList.shift = Config.inf_target
	}
	if (Config.inf_SwitchDelay > 0 && Config.inf_targetList.shift.length > 0 && Config.inf_SwitchTick > Config.inf_SwitchDelay) {
		Config.inf_InfiniteTarget[0] = Config.inf_targetList.shift[0]
		Config.inf_targetList.shift.shift()
		Config.inf_SwitchTick = 0
	}
	Attack(Config.inf_InfiniteTarget)
	if (Config.inf_InfiniteTarget.length > 0) {
		const NameArray = Config.inf_InfiniteTarget.map(tid => getEntityName(tid))
		let NameList
		if (NameArray.length === 1) {
			NameList = `§7[§a${NameArray[0]}§7]`
		} else {
			NameList = `§7[§a${NameArray.join(",")}§7]`
		}
		showTipMessage('§f[§b群百目标§f] §fAttack §7>>> ' + NameList + '')
	}
}

function SuicideAuraFunc() {
	SuicideAura_Tick++
	if (SuicideAura_Tick > SuicideAura_Delay) {
		for (let i = 1; i < SuicideAura_Num; i++) {
			attackEntity(self_id, true)
			SuicideAura_Tick = 0
		}
	}
}

//碰撞箱
function HitBoxFunc() {
	const Target = getPlayerList()
	for (const id of Target) {
		setEntitySize(id, Config.HitBox_x, Config.HitBox_y)
	}
}

//炸内存
function BoomRamFunc() {
	if (Config.BoomRam_x > Config.BoomRam_z) Config.BoomRam_z + Config.BoomRam_Block
	if (Config.BoomRam_x == Config.BoomRam_z) Config.BoomRam_x + Config.BoomRam_Block
	const TP = {
		pos: {
			x: Config.BoomRam_x,
			y: 320,
			z: Config.BoomRam_z
		},
		inputMode: 2,
		playMode: 0,
		rot: {
			pitch: 0,
			yaw: 0
		},
		motion: {
			x: 0,
			y: 0,
			z: 0
		}
	}
	for (let i = 0;i < Config.BoomRam_Num;i++) {
		sendPlayerAuthInput(TP)
	}
}

// 玩家攻击事件
globalThis.onPlayerAttackEvent = (pid, tid) => {
    if (AttackCrasher && self_id == pid) {
        for (let i = 0; i < Config.AttackCrasher_Num; i++) {
            SendCrasher(getEntityName(tid))
        }
    }
    if (AttackParticle && self_id == pid) {
        const pos = getEntityPos(tid)
        for (let i = 0; i < Config.AttackParticle_Num; i++) {
            const x = getRandomFloat(pos.x - 0.5, pos.x + 0.5)
            const y = getRandomFloat(pos.y, pos.y + 1)
            const z = getRandomFloat(pos.z - 0.5, pos.z + 0.5)
            DrawParticle(Config.AttackParticle_ID, x, y, z, Config.AttackParticle_Size)
        }
    }
    if (AttackTrack && self_id == pid) {
        const pos = getEntityPos(tid)
        const distance = Math.floor(getDistance(self_pos, pos))
        const interval = 1 / Config.AttackTrack_Density
        for (let i = 0; i < distance; i += interval) {
            const MovePos = getMoveTowards(self_pos, pos, i)
            DrawParticle(Config.AttackTrack_ID, MovePos.x, MovePos.y + 0.5, MovePos.z, Config.AttackTrack_Size)
        }
    }
    if (BackStab && self_id == tid) {
        for (let i = 0; i < Config.BackStab_Num; i++) {
            attackEntity(pid)
            if (Config.BackStab_Crasher) SendCrasher(getEntityName(pid))
        }
    }
    if (ECAttack) sendRpc(98247598, ECAttack_Buffer)
    if (AttackSound) LoadSound(AttackSound_file, 5000)
}

// 客户端消息事件
globalThis.onClientMessageEvent = (message) => {
    if (HideChat) return true
}

globalThis.onCommandOutputEvent = (type, args, value) => {
    if (AttackCrasher || RangeCrasher || Config.BackStab_Crasher) {
        return true
    }
}

// 玩家建造方块事件
globalThis.onPlayerBuildBlockEvent = (playerid, x, y, z, side) => {
    if (Config.FastMine) {
        if (playerid != self_id) return false
        for (let i = 0; i < Config.FastMine_Num; i++) {
            switch (Config.FastMine_Mode) {
                case 1:
                    destroyBlock(self_id, x, y, z, side)
                    break
                case 2:
                    const EndDestroy = {
                        id: self_id,
                        pos: { x, y, z },
                        value: 1,
                        type: 1
                    }
                    sendPlayerAction(EndDestroy)
                    break
            }
        }
    }
    if (Config.RangeMine && !Config.RangeMine_Auto) {
        if (playerid != self_id) return false
        if (Config.RangeMine_Chunk) {
            const pos = getChunkPos(x, z)
            DestroyBlock(pos.s.x, self_pos.y, pos.s.z, pos.e.x, -64, pos.e.z, true)
        } else {
            const x1 = x + Config.RangeMine_x
            const y1 = y + Config.RangeMine_y
            const z1 = z + Config.RangeMine_z
            const x2 = x - Config.RangeMine_x
            const y2 = y - Config.RangeMine_y
            const z2 = z - Config.RangeMine_z
            DestroyBlock(x1, y1, z1, x2, y2, z2, false)
        }
    }
}

// SAuth JSON钩子事件
globalThis.onSAuthJsonHookEvent = (cookie) => {
    if (Config.SauthLogin) {
        if (Config.SauthLogin_Cookie != null && Config.SauthLogin_Cookie != "") {
            showToast('已拦截替换Cookies')
            return JSON.parse(Config.SauthLogin_Cookie).sauth_json
        }
    }
}

// 实体行为事件
globalThis.onEntityBehaviorEvent = (id, behavior, value) => {
    if (id == self_id) {
        if (behavior == 2) {
            if (HurtAir) {
                setEntityMotion(self_id, self_motion.x, 0, self_motion.z)
            }
            if (HurtJump) {
                playerJump()
            }
        }
    }
}

// 接收服务器数据包事件
globalThis.onReceiveServerPacket = (id, name) => {
    if (NoCamShake && id == 27) return true
}


// Tick事件（保持原有逻辑结构）
globalThis.onTickEvent = () => {
    self_id = getLocalPlayerUniqueID()
    self_pos = getEntityPos(self_id)
    self_motion = getEntityMotion(self_id)
    self_rot = getEntityRot(self_id)
    const now = new Date()
    const year = now.getFullYear()
	const month = String(now.getMonth() + 1).padStart(2, '0')
	const day = String(now.getDate()).padStart(2, '0')
	const hours = String(now.getHours()).padStart(2, '0')
	const minutes = String(now.getMinutes()).padStart(2, '0')
	const seconds = String(now.getSeconds()).padStart(2, '0')
	const time = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
	addCustomArrayList("LNUI", `LN拓展 | ${time} | User: ${getEntityName(self_id)}`, `LN拓展 | ${time} | User: ${getEntityName(self_id)}`, true)
	if (HideChat) HideChat_Hide = true
	if (BunnyHop) SpeedFunc()
	if (Resurrect) ResurrectFunc()
	if (Crasher) CrasherFunc()
	if (Derp) DerpFunc()
	if (Parasite) ParasiteFunc()
	if (GodMode) GodModeFunc()
	if (Hand) HandFunc()
	if (SuicideAura) SuicideAuraFunc();
	if (Fly) FlyFunc()
	if (RunAway) RunAwayFunc()
	if (LockCamera) LookCameraFunc()
	if (FreeCamera) departCamera()
	if (OffsetCamera) setCameraOffset(Config.OffsetCamera_x, Config.OffsetCamera_y, Config.OffsetCamera_z)
	if (RangeCrasher) RangeCrasherFunc()
	if (InfiniteItem) InfiniteItemFunc()
	if (RangeMine && RangeMine_Auto) RangeMineFunc()
	if (AutoFuck) AutoFuckFunc()
	if (InfiniteAura) InfiniteAuraFunc()
	if (KillAura) KillAuraFunc()
	if (HitBox) HitBoxFunc()
	if (BoomRam) BoomRamFunc()
	if (KillAura) KillAuraFunc()
}

// 模块调用事件
globalThis.onCallModuleEvent = (args) => {
    if (args.fun && args.fun.startsWith("LN_")) {
        addCustomArrayList(args.fun, args.name, args.name, args.value)
        for (const key in args) {
            if (["value", "fun", "name", "index", "shortcut", "key"].includes(key)) continue
            Config[key] = args.index > 0 ? args.index : args[key]
        }
    }
	if (args.fun == "fun_ride_flying") { //兔子跳
		BunnyHop = args.value
		addCustomArrayList(args.fun, "Speed", "Speed", args.value)
		for (const key in args) {
			if (key == "value" || key == "fun" || key == "name" || key == "index" || key == "shortcut" || key == "key") continue
			if (args.index > 0) {
				Config[key] = args.index
			} else {
				Config[key] = args[key]
			}
		}
	}
	if (args.fun == "LN_Resurrect") { //原地复活
		Resurrect = args.value
	}
	if(args.fun == "LN_KillAura"){ //杀戮光环
    KillAura = args.value
    if(args.key == "KillAura_FOV") Config.KillAura_FOV = args.value
    if(args.key == "KillAura_Range") Config.KillAura_Range = args.value
    if(args.key == "KillAura_CPS") Config.KillAura_CPS = args.value
    if(args.key == "KillAura_AttackPlayers") Config.KillAura_AttackPlayers = args.value
    if(args.key == "KillAura_AttackMobs") Config.KillAura_AttackMobs = args.value
    }
	if (args.fun == "LN_Crasher") { //崩溃器
		Crasher = args.value
	}
	if (args.fun == "LN_Derp") { //大陀螺
		Derp = args.value
		if (args.key === "Derp_Select" && Config.Derp_Select) {
			SelectTarget("Derp_Select", Config.Derp_Select)
		} else if (!Config.Derp_Select) Config.Derp_Select = []
	}
	if (args.fun == "LN_GodMode") { //上帝模式
		GodMode = args.value
	}
	if (args.fun == "LN_Hand") { //修改挥手
		Hand = args.value
	}
	if (args.fun == "LN_AttackCrasher") { //攻击崩溃
		AttackCrasher = args.value
	}
	if (args.fun == "LN_Fly") { //锁定飞行
		Fly = args.value
		if (!Fly) setEntityMotion(self_id, 0, -0.01, 0)
	}
	if (args.fun == "LN_FastMine") { //秒挖
		FastMine = args.value
	}
	if (args.fun == "LN_SauthLogin") { //Cookies登录
		SauthLogin = args.value
	}
	if (args.fun == "LN_RunAway") { //逃逸光环
		RunAway = args.value
		if (args.key === "RunAway_SetPos" && Config.RunAway_SetPos) {
			Config.RunAway_SetPos = self_pos
		} else if (!Config.RunAway_SetPos) Config.RunAway_SetPos = []
	}
	if (args.fun == "LN_Parasite") { //寄生虫
		Parasite = args.value
		setCameraAnchor(0, 0, 0)
		resetCamera()
		if (args.key === "Parasite_Target" && Config.Parasite_Target) {
			SelectTarget2("Parasite_Target", Config.Parasite_Target)
		} else if (!Config.Parasite_Target) Config.Parasite_Target = -1
	}
	if (args.fun == "LN_LockCamera") { //锁定视角
		LockCamera = args.value
		Config.LockCamera_setPos = self_pos
		setCameraAnchor(0, 0, 0)
		resetCamera()
	}
	if (args.fun == "LN_SuicideAura") { // 自杀光环
		SuicideAura = args.value
	}
	if (args.fun == "LN_FreeCamera") { //自由视角
		FreeCamera = args.value
		if (FreeCamera) departCamera()
		if (!FreeCamera) resetCamera()
	}
	if (args.fun == "LN_OffsetCamera") { //视角偏移
		OffsetCamera = args.value
		if (!OffsetCamera) setCameraOffset(0, 0, 0)
		if (!OffsetCamera) resetCamera()
	}
	if (args.fun == "LN_RangeCrasher") { //范围崩溃
		RangeCrasher = args.value
	}
	if (args.fun == "LN_HideChat") { //屏蔽聊天
		HideChat = args.value
	}
	if (args.fun == "LN_InfiniteItem") { //百米拾取
		InfiniteItem = args.value
	}
	if (args.fun == "LN_AttackParticle") { //攻击粒子
		AttackParticle = args.value
	}
	if (args.fun == "LN_AttackTrack") { //攻击轨迹
		AttackTrack = args.value
	}
	if (args.fun == "LN_BackStab") { //背刺反击
		BackStab = args.value
	}
	if (args.fun == "LN_RangeMine") { //范围挖掘
		RangeMine = args.value
	}
	if (args.fun == "LN_AutoFuck") { //自动扣字
		AutoFuck = args.value
	}
	if (args.fun == "LN_InfiniteAura") { //百米大刀
		InfiniteAura = args.value
	}
	if (args.fun == "LN_FakeMsg") { //伪造聊天
		FakeMsg()
	}
	if (args.fun == "LN_HurtAir") { //受击卡空
		HurtAir = args.value
	}
	if (args.fun == "LN_HurtJump") { //受击跳跃
		HurtJump = args.value
	}
	if (args.fun == "LN_NoCamShake") { //无受击抖动
		NoCamShake = args.value
	}
	if (args.fun == "LN_HitBox") { //HitBox
		HitBox = args.value
		if (!HitBox) {
			const Target = getPlayerList()
			for (const id of Target) {
				setEntitySize(id, 0.6, 1.8)
			}
		}
	}
	if (args.fun == "LN_BoomRam") { //炸内存
		BoomRam = args.value
	}
	if (args.fun == "LN_AttackSound") { //炸内存
		AttackSound = args.value
	}
	if (args.angle) Config.angle = args.angle
	if (args.operation) Config.operation = args.operation
}

function UI() {
	loadMenu("LN辅助类", `{
        "type":"Menu",
        "title":{
            "name":"✦ 辅助功能 ✦",
            "size":12,
            "elevation":4,
            "background":"#2c3e50",
            "padding":[6,6,6,6],
            "colors":["#000000","#000000"]
        },
        "color":"#ecf0f1",
        "alpha":0.95,
        "radius":8,
        "can_close":true,
        "hide_fun":true,
        "hide":true,
        "items":[
            {"type":"Switch","name":"屏蔽聊天","color":"#2c3e50","size":12,"padding":[8,4,8,4],"tag":"LN_HideChat"},
            {
    "type": "Switch",
    "name": "智能连点",
    "color": "#2c3e50",
    "size": 12,
    "padding": [5, 0, 5, 0],
    "tag": "fun_auto_clicker",
    "items": [
        {
            "type": "CheckBox",
            "key": "no_break",
            "name": "稳定连点",
            "color": "#2c3e50",
            "size": 10
        },
        {
            "type": "SeekBar",
            "key": "delay",
            "format": "点击间隔%d",
            "color": "#2c3e50",
            "size": 10,
            "padding": [0, 0, 0, 0],
            "value": 5,
            "min": 0,
            "max": 20
        }
    ]
},
            {"type":"Switch","name":"原地复活","color":"#2c3e50","size":12,"padding":[8,4,8,4],"tag":"LN_Resurrect"},
            {"type":"Switch","name":"背刺还击","color":"#2c3e50","size":12,"padding":[8,4,8,4],"tag":"LN_BackStab","items":[
                {"type":"CheckBox","key":"BackStab_Crasher","name":"崩溃","color":"#2ecc71","size":10,"checked":true},
                {"type":"SeekBar","key":"BackStab_Num","format":"次数%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":5,"min":1,"max":20}
            ]},
            {
    "type":"Switch",
    "name":"百米拾取",
    "color":"#2c3e50",
    "size":12,
    "padding":[8,4,8,4],
    "tag":"LN_InfiniteItem",
    "shortcut": {
        "type": "CheckedButton",
        "params": [50, 25],
        "icon": "LN/bmsqgb.png",
        "on": "LN/bmsqkq.png",
        "off": "LN/bmsqgb.png",
        "no_circle": true
    },
    "items":[
        {"type":"SeekBar","key":"InfiniteItem_Num","format":"发包次数%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":1,"min":1,"max":5},
        {"type":"SeekBar","key":"InfiniteItem_Delay","format":"遍历延迟%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":1,"min":0,"max":10}
    ]
},
            {"type":"Switch","name":"范围卡人","color":"#2c3e50","size":12,"padding":[8,4,8,4],"tag":"LN_RangeCrasher","items":[
                {"type":"SeekBar","key":"RangeCrasher_Range","format":"范围%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":3,"min":1,"max":10},
                {"type":"SeekBar","key":"RangeCrasher_Num","format":"数量%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":3,"min":1,"max":10}
            ]},
            {"type":"Switch","name":"逃逸光环","color":"#2c3e50","size":12,"padding":[8,4,8,4],"tag":"LN_RunAway","items":[
                {"type":"TextView","name":"设置逃逸坐标","color":"#ecf0f1","size":12,"key":"RunAway_SetPos","padding":[0,0,0,0]},
                {"type":"CheckBox","key":"RunAway_Back","name":"返回原点","color":"#2ecc71","size":10,"checked":true},
                {"type":"SeekBar","key":"RunAway_Delay","format":"返回延迟%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":1,"min":0,"max":10},
                {"type":"SeekBar","key":"RunAway_MinHealth","format":"最低生命值%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":10,"min":1,"max":20}
            ]},
            {"type":"Switch","name":"秒挖","color":"#2c3e50","size":12,"padding":[8,4,8,4],"tag":"LN_FastMine","items":[
                {"type":"RadioGroup","key":"FastMine_Mode","name":"崩溃模式","color":"#2ecc71","size":10,"items":[
                    {"key":"Vanilla","name":"Vanilla","color":"#2ecc71","checked":true,"size":8},
                    {"key":"Action","name":"Action","color":"#2ecc71","size":8}
                ]},
                {"type":"SeekBar","key":"FastMine_Num","format":"发包数量%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":3,"min":1,"max":10}
            ]},
            {"type":"Switch","name":"攻击卡人","color":"#2c3e50","size":12,"padding":[8,4,8,4],"tag":"LN_AttackCrasher","items":[
                {"type":"SeekBar","key":"AttackCrasher_Num","format":"刷屏次数%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":5,"min":1,"max":10}
            ]},
            {"type":"Switch","name":"GodMode","color":"#2c3e50","size":12,"padding":[8,4,8,4],"tag":"LN_GodMode","items":[
                {"type":"RadioGroup","key":"GodMode_Mode","name":"发包模式","color":"#2ecc71","size":10,"items":[
                    {"key":"AuthInput","name":"AuthInput","color":"#2ecc71","checked":true,"size":8},
                    {"key":"MovePlayer","name":"MovePlayer","color":"#2ecc71","size":8}
                ]},
                {"type":"CheckBox","key":"GodMode_Back","name":"返回原点","color":"#2ecc71","size":10,"checked":true},
                {"type":"SeekBar","key":"GodMode_Delay","format":"返回延迟%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":200,"min":1,"max":1000},
                {"type":"SeekBar","key":"GodMode_Num","format":"传送次数%d","color":"#2ecc71","size":10,"padding":[0,0,0,0],"value":5,"min":1,"max":10}
            ]}
        ]
    }`)

	loadMenu("LN漏洞类", `{
        "type":"Menu",
        "title":{
            "name":"⚠ 漏洞功能 ⚠",
            "size":12,
            "elevation":4,
            "background":"#c0392b",
            "padding":[6,6,6,6],
            "colors":["#000000","#000000"]
        },
        "color":"#ecf0f1",
        "alpha":0.95,
        "radius":8,
        "can_close":true,
        "hide_fun":true,
        "hide":true,
        "items":[
            {"type":"TextView","name":"伪造聊天","color":"#e74c3c","size":12,"tag":"LN_FakeMsg","padding":[0,0,0,0]},
            {"type":"Switch","name":"自动扣字","color":"#e74c3c","size":12,"padding":[8,4,8,4],"tag":"LN_AutoFuck","items":[
                {"type":"EditText","key":"AutoFuck_Prefix","name":"前缀","color":"#e74c3c","size":10,"max_lines":1,"text":"<没有内容>","padding":[5,5,5,5]},
                {"type":"CheckBox","key":"AutoFuck_Hide","name":"隐藏名字","color":"#e74c3c","size":10,"checked":true},
                {"type":"SeekBar","key":"AutoFuck_Delay","format":"延迟%d","color":"#e74c3c","size":10,"padding":[0,0,0,0],"value":5,"min":1,"max":20},
                {"type":"SeekBar","key":"AutoFuck_Num","format":"数量%d","color":"#e74c3c","size":10,"padding":[0,0,0,0],"value":5,"min":1,"max":20}
            ]},
            {"type":"Switch","name":"SauthLogin","color":"#e74c3c","size":12,"padding":[8,4,8,4],"tag":"LN_SauthLogin","items":[
                {"type":"EditText","key":"SauthLogin_Cookie","name":"Cookie","color":"#e74c3c","size":10,"max_lines":1,"text":"","padding":[5,5,5,5]}
            ]},
            {"type":"Switch","name":"崩溃器","color":"#e74c3c","size":12,"padding":[8,4,8,4],"tag":"LN_Crasher","items":[
                {"type":"RadioGroup","key":"Crasher_Mode","name":"崩溃模式","color":"#e74c3c","size":10,"items":[
                    {"key":"ErrorBuild","name":"非法建造","color":"#e74c3c","checked":true,"size":8},
                    {"key":"ErrorDestroy","name":"非法破坏","color":"#e74c3c","size":8}
                ]},
                {"type":"SeekBar","key":"Crasher_num","format":"数量%d","color":"#e74c3c","size":10,"padding":[0,0,0,0],"value":1000,"min":1,"max":10000}
            ]}
        ]
    }`)

	loadMenu("LN视觉类", `{
        "type":"Menu",
        "title":{
            "name":"✨ 视觉设置 ✨",
            "size":12,
            "elevation":4,
            "background":"#1abc9c",
            "padding":[6,6,6,6],
            "colors":["#000000","#000000"]
        },
        "color":"#ecf0f1",
        "alpha":0.95,
        "radius":8,
        "can_close":true,
        "hide_fun":true,
        "hide":true,
        "items":[
            {"type":"Switch","name":"锁定相机","color":"#1abc9c","size":12,"padding":[8,4,8,4],"tag":"LN_LockCamera"},
            {"type":"Switch","name":"自由相机","color":"#1abc9c","size":12,"padding":[8,4,8,4],"tag":"LN_FreeCamera"},
            {"type":"Switch","name":"相机偏移","color":"#1abc9c","size":12,"padding":[8,4,8,4],"tag":"LN_OffsetCamera","items":[
                {"type":"SeekBar","key":"OffsetCamera_x","format":"X%d","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":0,"min":-20,"max":20},
                {"type":"SeekBar","key":"OffsetCamera_y","format":"Y%d","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":0,"min":-20,"max":20},
                {"type":"SeekBar","key":"OffsetCamera_z","format":"Z%d","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":0,"min":-20,"max":20}
            ]},
            {"type":"Switch","name":"寄生虫","color":"#1abc9c","size":12,"padding":[8,4,8,4],"tag":"LN_Parasite","items":[
                {"type":"TextView","name":"设置寄生宿主","color":"#ecf0f1","size":12,"key":"Parasite_Target","padding":[0,0,0,0]},
                {"type":"CheckBox","key":"Parasite_OnlyCamera","name":"仅摄像头","color":"#1abc9c","size":10}
            ]},
            {"type":"Switch","name":"攻击粒子","color":"#1abc9c","size":12,"padding":[8,4,8,4],"tag":"LN_AttackParticle","items":[
                {"type":"EditText","key":"AttackParticle_ID","name":"粒子ID","color":"#1abc9c","size":10,"max_lines":1,"text":"3","padding":[5,5,5,5]},
                {"type":"SeekBar","key":"AttackParticle_Size","format":"粒子大小%d","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":1,"min":0,"max":10},
                {"type":"SeekBar","key":"AttackParticle_Num","format":"粒子数量%d","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":5,"min":0,"max":20}
            ]},
            {"type":"Switch","name":"攻击轨迹","color":"#1abc9c","size":12,"padding":[8,4,8,4],"tag":"LN_AttackTrack","items":[
                {"type":"EditText","key":"AttackTrack_ID","name":"粒子ID","color":"#1abc9c","size":10,"max_lines":1,"text":"3","padding":[5,5,5,5]},
                {"type":"SeekBar","key":"AttackTrack_Size","format":"粒子大小%d","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":1,"min":0,"max":10},
                {"type":"SeekBar","key":"AttackTrack_Density","format":"粒子密度%d","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":10,"min":0,"max":20}
            ]},
            {"type":"Switch","name":"修改挥手","color":"#1abc9c","size":12,"padding":[8,4,8,4],"tag":"LN_Hand","items":[
                {"type":"SeekBar","key":"Hand_Speed","format":"挥刀速度%d","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":-5,"min":-10,"max":10}
            ]},
            {"type":"Switch","name":"大陀螺","color":"#1abc9c","size":12,"padding":[8,4,8,4],"tag":"LN_Derp","items":[
                {"type":"TextView","name":"个体旋转","color":"#ecf0f1","size":12,"key":"Derp_Select","padding":[0,0,0,0]},
                {"type":"CheckBox","key":"Derp_AllPlayer","name":"所有玩家旋转","color":"#1abc9c","size":10},
                {"type":"CheckBox","key":"Derp_AllEntity","name":"所有实体旋转","color":"#1abc9c","size":10},
                {"type":"RadioGroup","key":"Derp_Mode","name":"发包模式","color":"#1abc9c","size":10,"items":[
                    {"key":"OnlyHead","name":"AuthInput","color":"#1abc9c","checked":true,"size":8},
                    {"key":"MovePlayer","name":"MovePlayer","color":"#1abc9c","size":8}
                ]},
                {"type":"RadioGroup","key":"Derp_SpinMode","name":"旋转模式","color":"#1abc9c","size":10,"items":[
                    {"key":"OnlyHead","name":"仅转头","color":"#1abc9c","checked":true,"size":8},
                    {"key":"OnlyBody","name":"仅转身体","color":"#1abc9c","size":8},
                    {"key":"HeadBody","name":"全部","color":"#1abc9c","size":8}
                ]},
                {"type":"CheckBox","key":"Derp_Inverse","name":"逆时针","color":"#1abc9c","size":10},
                {"type":"CheckBox","key":"Derp_Local","name":"自己可见","color":"#1abc9c","size":10},
                {"type":"SeekBar","key":"Derp_pRot","format":"头部扭曲%d","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":-180,"min":-180,"max":180},
                {"type":"SeekBar","key":"Derp_Speed","format":"旋转速度%.2f","color":"#1abc9c","size":10,"padding":[0,0,0,0],"value":45.0,"min":0.1,"max":180.0}
            ]}
        ]
    }`)

	loadMenu("LN玩家类", `{
        "type":"Menu",
        "title":{
            "name":"👤 玩家操作 👤",
            "size":12,
            "elevation":4,
            "background":"#8e44ad",
            "padding":[6,6,6,6],
            "colors":["#000000","#000000"]
        },
        "color":"#ecf0f1",
        "alpha":0.95,
        "radius":8,
        "can_close":true,
        "hide_fun":true,
        "hide":true,
        "items":[
        {
    "type": "Switch",
    "name": "快速破坏",
    "color": "#8e44ad",
    "size": 10,
    "padding": [5, 0, 5, 0],
    "tag": "fun_fast_destroy"
},
{
    "type": "Switch",
    "name": "残血吃食物",
    "color": "#8e44ad",
    "size": 10,
    "padding": [5, 0, 5, 0],
    "tag": "fun_auto_eat",
    "items": [
        {
            "type": "CheckBox",
            "key": "fast_eat",
            "name": "快速吃东西",
            "color": "#8e44ad",
            "size": 8
        },
        {
            "type": "SeekBar",
            "key": "health",
            "format": "生命值低于%.2f自动选择背包中恢复最高的食物",
            "color": "#8e44ad",
            "size": 8,
            "padding": [0, 0, 0, 0],
            "value": 10.0,
            "min": 0.5,
            "max": 40.0
        }
    ]
},
            {
    "type": "Switch",
    "name": "范围破坏",
    "color": "#8e44ad",
    "size": 10,
    "padding": [5, 0, 5, 0],
    "tag": "fun_auto_destroy",
    "items": [
        {
            "type": "RadioGroup",
            "key": "mode",
            "name": "破坏大小",
            "color": "#8e44ad",
            "size": 8,
            "items": [
                {
                    "key": "line",
                    "name": "10x10",
                    "color": "#8e44ad",
                    "size": 8,
                    "tip": "在自身位置竖一字型破坏"
                },
                {
                    "key": "cross",
                    "name": "十字型破坏",
                    "color": "#8e44ad",
                    "size": 8,
                    "tip": "在自身位置竖十字型破坏"
                },
                {
                    "key": "matrix",
                    "name": "矩阵型破坏",
                    "color": "#8e44ad",
                    "checked": true,
                    "size": 8,
                    "tip": "在自身位置10*10矩阵破坏"
                }
            ]
        }
    ]
},
{
    "type": "Switch",
    "name": "自动方块破坏",
    "color": "#8e44ad",
    "size": 10,
    "padding": [5, 0, 5, 0],
    "tag": "fun_auto_destroy_block",
    "items": [
        {
            "type": "CheckBox",
            "key": "minecraft:cake",
            "name": "破坏蛋糕",
            "color": "#8e44ad",
            "size": 8
        },
        {
            "type": "CheckBox",
            "key": "minecraft:bed",
            "name": "破坏床",
            "color": "#8e44ad",
            "size": 8
        },
        {
            "type": "SeekBar",
            "key": "distance",
            "format": "破坏距离%.2f",
            "color": "#8e44ad",
            "size": 8,
            "padding": [0, 0, 0, 0],
            "value": 7.0,
            "min": 1.0,
            "max": 40.0
        },
        {
            "type": "RadioGroup",
            "key": "packet_mode",
            "name": "破坏模式",
            "color": "#8e44ad",
            "size": 8,
            "items": [
                {
                    "key": "vanilla",
                    "name": "原版模式",
                    "color": "#8e44ad",
                    "size": 8,
                    "checked": true
                },
                {
                    "key": "nukkit",
                    "name": "Nukkit模式",
                    "color": "#8e44ad",
                    "size": 8
                }
            ]
        }
    ]
}
]
    }`)
    
    loadMenu("LN其他类", `{
    "type":"Menu",
    "title":{
        "name":"7⃣️ 其他操作 7⃣️",
        "size":12,
        "elevation":4,
        "background":"#ff69b4",
        "padding":[6,6,6,6],
        "colors":["#000000","#000000"]
    },
    "color":"#ecf0f1",
    "alpha":0.95,
    "radius":8,
    "can_close":true,
    "hide_fun":true,
    "hide":true,
    "items":[
        {
            "type": "Switch",
            "name": "服务器炸内存",
            "color": "#ff69b4",
            "size": 12,
            "padding": [8,4,8,4],
            "tag": "LN_BoomRam",
            "items": [
                {
                    "type": "SeekBar",
                    "key": "BoomRam_Num",
                    "format": "传送次数（每秒）%d",
                    "color": "#ff4757",
                    "size": 10,
                    "padding": [0,0,0,0],
                    "value": 3,
                    "min": 1,
                    "max": 10
                },
                {
                    "type": "EditText",
                    "key": "BoomRam_Block",
                    "name": "每次的距离",
                    "color": "#ff4757",
                    "size": 10,
                    "max_lines": 1,
                    "text": "16",
                    "padding": [5,5,5,5]
                }
            ]
        },
        {
    "type": "Switch",
    "name": "自定义攻击音效",
    "color": "#ff69b4",
    "size": 12,
    "padding": [8,4,8,4],
    "tag": "LN_AttackSound"
    },
        {
            "type": "Switch",
            "name": "连锁挖矿",
            "color": "#ff69b4",
            "size": 10,
            "padding": [5, 0, 5, 0],
            "tag": "fun_chain_mining",
            "items": [
                {
                    "type": "SeekBar",
                    "key": "chain_mining_distance",
                    "format": "破坏半径%.2f",
                    "color": "#ff69b4",
                    "size": 8,
                    "padding": [0, 0, 0, 0],
                    "value": 7.0,
                    "min": 1.0,
                    "max": 12.0
                },
                {
                    "type": "SeekBar",
                    "key": "chain_mining_search_distance",
                    "format": "搜索半径%.2f",
                    "color": "#ff69b4",
                    "size": 8,
                    "padding": [0, 0, 0, 0],
                    "value": 10.0,
                    "min": 1.0,
                    "max": 100.0
                }
            ]
        },
        {
            "type": "Switch",
            "name": "化身末影人",
            "color": "#ff69b4",
            "size": 10,
            "padding": [5, 0, 5, 0],
            "tag": "fun_click_teleport"
        },
        {
            "type": "Switch",
            "name": "灵魂出窍",
            "color": "#ff69b4",
            "size": 10,
            "padding": [5, 0, 5, 0],
            "tag": "fun_free_camera"
        }
    ]
}`)

	loadMenu("LN移动类", `{
        "type":"Menu",
        "title":{
            "name":"🚀 移动设置 🚀",
            "size":12,
            "elevation":4,
            "background":"#f39c12",
            "padding":[6,6,6,6],
            "colors":["#000000","#000000"]
        },
        "color":"#ecf0f1",
        "alpha":0.95,
        "radius":8,
        "can_close":true,
        "hide_fun":true,
        "hide":true,
        "items":[
            {"type":"Switch","name":"受击卡空","color":"#f39c12","size":12,"padding":[8,4,8,4],"tag":"LN_HurtAir"},
            {"type":"Switch","name":"受击跳跃","color":"#f39c12","size":12,"padding":[8,4,8,4],"tag":"LN_HurtJump"},
            {"type":"Switch","name":"Speed","color":"#f39c12","size":12,"padding":[8,4,8,4],"tag":"fun_ride_flying","items":[
                {"type":"CheckBox","key":"Hop","name":"Hop","color":"#f39c12","size":10,"checked":true},
                {"type":"SeekBar","key":"Speed","format":"移动速度%.3f","color":"#f39c12","size":10,"padding":[0,0,0,0],"value":0.600,"min":0.100,"max":1.000},
                {"type":"SeekBar","key":"JumpHeight","format":"跳跃高度%.3f","color":"#f39c12","size":10,"padding":[0,0,0,0],"value":0.420,"min":0.001,"max":5.000}
            ]},
            {
    "type": "Switch",
    "name": "跳高",
    "color": "#f39c12",
    "size": 10,
    "padding": [5, 0, 5, 0],
    "tag": "fun_jump_high",
    "items": [
        {
            "type": "SeekBar",
            "key": "jump_strength",
            "format": "高度大小%.2f",
            "color": "#f39c12",
            "size": 8,
            "padding": [0, 0, 0, 0],
            "value": 0.75,
            "min": 0.1,
            "max": 1.0
        }
    ]
},
{
    "type": "Switch",
    "name": "虚空拉回",
    "color": "#f39c12",
    "size": 10,
    "padding": [5, 0, 5, 0],
    "tag": "fun_anti_void"
},
{
    "type": "Switch",
    "name": "水上行走",
    "color": "#f39c12",
    "size": 10,
    "padding": [5, 0, 5, 0],
    "tag": "fun_jesus"
},
            {"type":"Switch","name":"Fly","color":"#f39c12","size":12,"padding":[8,4,8,4],"tag":"LN_Fly","items":[
                {"type":"CheckBox","key":"Fly_Snake","name":"蛇型飞行","color":"#f39c12","size":10,"checked":true},
                {"type":"CheckBox","key":"Fly_Packet","name":"AuthInput","color":"#f39c12","size":10,"checked":true},
                {"type":"SeekBar","key":"Fly_Speed","format":"飞行速度%.3f","color":"#f39c12","size":10,"padding":[0,0,0,0],"value":3.000,"min":0.001,"max":10.000},
                {"type":"SeekBar","key":"Fly_SetUD","format":"上下速度%.3f","color":"#f39c12","size":10,"padding":[0,0,0,0],"value":3.000,"min":0.001,"max":10.000}
            ]}
        ]
    }`)

	loadMenu("LN战斗类", `{
        "type":"Menu",
        "title":{
            "name":"⚔ 战斗配置 ⚔",
            "size":12,
            "elevation":4,
            "background":"#f1c40f",
            "padding":[6,6,6,6],
            "colors":["#000000","#000000"]
        },
        "color":"#ecf0f1",
        "alpha":0.95,
        "radius":8,
        "can_close":true,
        "hide_fun":true,
        "hide":true,
        "items":[
            {"type":"Switch","name":"绕过EC","color":"#f1c40f","size":12,"padding":[8,4,8,4],"tag":"LN_ECAttack"},
            {
    "type":"Switch",
    "name":"抗击退",
    "color":"#f1c40f",
    "size":12,
    "padding":[8,4,8,4],
    "tag":"fun_no_knockback",
    "items":[
        {
            "type":"CheckBox",
            "key":"all",
            "name":"所有击退都免疫",
            "color":"#f1c40f",
            "checked":true,
            "size":10
        }
    ]
},
            {
    "type":"Switch",
    "name":"服务器群百",
    "color":"#f1c40f",
    "size":12,
    "padding":[8,4,8,4],
    "tag":"LN_InfiniteAura",
    "shortcut": {
        "type": "CheckedButton",
        "params": [50, 25],
        "icon": "LN/bmddgb.png",
        "on": "LN/bmddkq.png",
        "off": "LN/bmddgb.png",
        "no_circle": true
    },
    "items":[
        {"type":"RadioGroup","key":"inf_SelectMode","name":"索敌模式","color":"#f1c40f","size":10,"items":[
            {"key":"health","name":"血量最少","color":"#f1c40f","checked":true,"size":8},
            {"key":"Distance","name":"距离最近","color":"#f1c40f","size":8},
            {"key":"Random","name":"随机选择","color":"#f1c40f","size":8}
        ]},
        {"type":"SeekBar","key":"inf_MaxRange","format":"索敌范围%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":1000,"min":1,"max":1000},
        {"type":"SeekBar","key":"inf_MaxY","format":"最大高度%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":500,"min":-100,"max":500},
        {"type":"SeekBar","key":"inf_MinY","format":"最小高度%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":-100,"min":-100,"max":500},
        {"type":"CheckBox","key":"inf_Regex","name":"使用正则","color":"#f1c40f","size":10},
        {"type":"CheckBox","key":"inf_While","name":"使用白名单","color":"#f1c40f","size":10},
        {"type":"CheckBox","key":"inf_Black","name":"使用黑名单","color":"#f1c40f","size":10},
        {"type":"EditText","key":"inf_RegexList","name":"正则编辑","color":"#f1c40f","size":10,"max_lines":1,"text":"原神,启动","padding":[5,5,5,5]},
        {"type":"EditText","key":"inf_WhiteList","name":"白名单编辑","color":"#f1c40f","size":10,"max_lines":1,"text":"没有内容","padding":[5,5,5,5]},
        {"type":"EditText","key":"inf_BlackList","name":"黑名单编辑","color":"#f1c40f","size":10,"max_lines":1,"text":"没有内容","padding":[5,5,5,5]},
        {"type":"SeekBar","key":"inf_SwitchDelay","format":"遍历延迟%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":0,"min":0,"max":10},
        {"type":"SeekBar","key":"inf_offset_y","format":"Y轴偏移%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":0,"min":-10,"max":10},
        {"type":"SeekBar","key":"inf_MaxTarget","format":"目标数量%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":3,"min":1,"max":40},
        {"type":"SeekBar","key":"inf_DelayTick","format":"攻击延迟%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":5,"min":1,"max":20},
        {"type":"CheckBox","key":"inf_ServerMode","name":"租赁服兼容","color":"#f1c40f","size":10,"checked":true},
        {"type":"CheckBox","key":"inf_TpClick","name":"传送点击","color":"#f1c40f","size":10,"checked":true},
        {"type":"CheckBox","key":"inf_Back","name":"返回原点","color":"#f1c40f","size":10,"checked":true},
        {"type":"CheckBox","key":"inf_BackClick","name":"返回点击","color":"#f1c40f","size":10,"checked":true},
        {"type":"CheckBox","key":"inf_action","name":"攻击挥手","color":"#f1c40f","size":10},
        {"type":"SeekBar","key":"inf_BackDelay","format":"返回延迟%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":0,"min":0,"max":20},
        {"type":"SeekBar","key":"inf_TpNum","format":"传送次数%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":3,"min":1,"max":10},
        {"type":"SeekBar","key":"inf_AttackNum","format":"攻击次数%d","color":"#f1c40f","size":10,"padding":[0,0,0,0],"value":1,"min":0,"max":10}
    ]
}
        ]
    }`)

	loadMenu("LN网络游戏类", `{
    "type":"Menu",
    "title":{
        "name":"🌐 网络游戏类 🌐",
        "size":12,
        "elevation":4,
        "background":"#3498db",
        "padding":[6,6,6,6],
        "colors":["#000000","#000000"]
    },
    "color":"#ecf0f1",
    "alpha":0.95,
    "radius":8,
    "can_close":true,
    "hide_fun":true,
    "hide":true,
    "items":[
    {
    "type":"Switch",
    "name":"杀戮光环",
    "color":"#3498db",
    "size":12,
    "padding":[8,4,8,4],
    "tag":"LN_KillAura",
    "shortcut": {
        "type": "CheckedButton",
        "params": [50, 25],
        "icon": "LN/slgb.png",
        "on": "LN/slkq.png",
        "off": "LN/slgb.png",
        "no_circle": true
    },
    "items":[
        {"type":"SeekBar","key":"KillAura_Range","format":"范围 %.1f格","color":"#3498db","size":10,"value":4.0,"min":1,"max":8,"step":0.5},
        {"type":"SeekBar","key":"KillAura_FOV","format":"视野 %d°","color":"#3498db","size":10,"value":90,"min":0,"max":360,"step":1},
        {"type":"SeekBar","key":"KillAura_CPS","format":"攻速 %dCPS","color":"#3498db","size":10,"value":10,"min":1,"max":20},
        {"type":"CheckBox","key":"KillAura_AttackPlayers","name":"不攻击生物","color":"#3498db","checked":true},
        {"type":"CheckBox","key":"KillAura_AttackMobs","name":"不攻击玩家","color":"#3498db","checked":true},
        {
            "type": "RadioGroup",
            "key": "KillAura_SelectMode",
            "name": "目标排序",
            "color": "#3498db",
            "size": 10,
            "items": [
                {"key": "distance", "name": "距离优先", "checked": true},
                {"key": "health", "name": "血量优先"}
            ]
        },
        {
            "type": "SeekBar",
            "key": "KillAura_MaxTargets",
            "format": "最大目标%d",
            "color": "#3498db",
            "size": 10,
            "value": 3,
            "min": 1,
            "max": 5
        }
    ]
},
        {
    "type": "Switch",
    "name": "智能自瞄",
    "color": "#3498db",
    "size": 12,
    "padding": [8, 4, 8, 4],
    "tag": "fun_aimbot",
    "items": [
        {
            "type": "CheckBox",
            "key": "player",
            "name": "玩家目标",
            "color": "#3498db",
            "size": 10,
            "checked": true
        },
        {
            "type": "CheckBox",
            "key": "mob",
            "name": "生物目标",
            "color": "#3498db",
            "size": 10
        },
        {
            "type": "SeekBar",
            "key": "distance",
            "format": "检测距离%.2f格",
            "color": "#3498db",
            "size": 10,
            "padding": [0, 0, 0, 0],
            "value": 11.1,
            "min": 0.5,
            "max": 150.0
        },
        {
            "type": "CheckBox",
            "key": "lock_target",
            "name": "锁定当前目标",
            "color": "#3498db",
            "size": 10
        },
        {
            "type": "CheckBox",
            "key": "rotation",
            "name": "实时更新视角",
            "color": "#3498db",
            "size": 10
        },
        {
            "type": "CheckBox",
            "key": "body",
            "name": "同步身体转向",
            "color": "#3498db",
            "size": 10
        },
        {
            "type": "CheckBox",
            "key": "rotations",
            "name": "转头精准锁定",
            "color": "#3498db",
            "size": 10
        },
        {
            "type": "CheckBox",
            "key": "input",
            "name": "模拟滑动操作",
            "color": "#3498db",
            "size": 10,
            "checked": true
        },
        {
            "type": "CheckBox",
            "key": "bow",
            "name": "弓箭专用模式",
            "color": "#3498db",
            "size": 10
        },
        {
            "type": "CheckBox",
            "key": "hit_box",
            "name": "碰撞箱适配",
            "color": "#3498db",
            "size": 10
        },
        {
            "type": "SeekBar",
            "key": "gravity",
            "format": "重力补偿%.3f",
            "color": "#3498db",
            "size": 10,
            "padding": [0, 0, 0, 0],
            "value": 0.002,
            "min": 0.001,
            "max": 0.005
        }
    ]
},
{
    "type": "Switch",
    "name": "智能队友检测",
    "color": "#3498db",
    "size": 12,
    "padding": [5, 0, 5, 0],
    "tag": "fun_smart_team",
    "items": [
        {
            "type": "CheckBox",
            "key": "teammate_armor_filter",
            "name": "过滤同头盔颜色",
            "color": "#3498db",
            "size": 10
        },
        {
            "type": "CheckBox",
            "key": "teammate_skin_filter",
            "name": "过滤空皮肤玩家",
            "color": "#3498db",
            "size": 10,
            "on": "自动排除无皮肤实体"
        },
        {
            "type": "CheckBox",
            "key": "teammate_click_whitelist",
            "name": "点击添加白名单",
            "color": "#3498db",
            "size": 10,
            "on": "点击实体标记为队友"
        },
        {
            "type": "TextView",
            "key": "teammate_remove_whitelist",
            "name": "移除白名单实体",
            "color": "#3498db",
            "size": 10,
            "padding": [5, 5, 5, 5]
        }
    ]
},
{
    "type": "Switch",
    "name": "自动搭路",
    "color": "#3498db",
    "size": 12,
    "padding": [5, 0, 5, 0],
    "tag": "fun_auto_build",
    "items": [
        {
            "type": "CheckBox",
            "key": "force_place",
            "name": "强制放置方块",
            "color": "#3498db",
            "size": 10,
            "checked": true
        },
        {
            "type": "CheckBox",
            "key": "lock_y",
            "name": "锁定Y轴高度",
            "color": "#3498db",
            "size": 10
        },
        {
            "type": "SeekBar",
            "key": "offset",
            "format": "搭建高度偏移%.1f",
            "color": "#3498db",
            "size": 10,
            "padding": [0, 0, 0, 0],
            "value": 2.5,
            "min": 1.8,
            "max": 5.0
        }
    ]
},
{
    "type": "Switch",
    "name": "快速拿物",
    "color": "#3498db",
    "size": 12,
    "padding": [5, 0, 5, 0],
    "tag": "fun_chest_stealer"
},
        {
    "type": "Switch",
    "name": "碰撞箱",
    "color": "#3498db",
    "size": 10,
    "padding": [5, 0, 5, 0],
    "tag": "fun_hitbox",
    "items": [
        {
            "type": "CheckBox",
            "key": "player",
            "name": "玩家",
            "color": "#3498db",
            "size": 8
        },
        {
            "type": "CheckBox",
            "key": "mob",
            "name": "生物",
            "color": "#3498db",
            "size": 8
        },
        {
            "type": "SeekBar",
            "key": "size",
            "format": "实体大小%.2f",
            "color": "#3498db",
            "size": 8,
            "padding": [0, 0, 0, 0],
            "value": 6.0,
            "min": 0.0,
            "max": 8.0
        }
    ]
}
    ]
}`)

	loadMenu("LN", `{
        "type":"Menu",
        "title":{
            "name":"LN",
            "size":12,
            "elevation":5,
            "background":"#2c3e50",
            "padding":[8,8,8,8],
            "colors":["#ffffff","#ffffff"]
        },
        "color":"#ecf0f1",
        "alpha":0.98,
        "radius":10,
        "can_close":false,
        "hide_fun":true,
        "items":[
            {"type":"TextView","name":"➤ 辅助功能","color":"#2c3e50","size":13,"padding":[10,6,10,6],"open":"LN辅助类"},
            {"type":"TextView","name":"➤ 漏洞功能","color":"#e74c3c","size":13,"padding":[10,6,10,6],"open":"LN漏洞类"},
            {"type":"TextView","name":"➤ 视觉设置","color":"#1abc9c","size":13,"padding":[10,6,10,6],"open":"LN视觉类"},
            {"type":"TextView","name":"➤ 玩家操作","color":"#8e44ad","size":13,"padding":[10,6,10,6],"open":"LN玩家类"},
            {"type":"TextView","name":"➤ 移动设置","color":"#f39c12","size":13,"padding":[10,6,10,6],"open":"LN移动类"},
            {"type":"TextView","name":"➤ 其他设置","color":"#ff69b4","size":13,"padding":[10,6,10,6],"open":"LN其他类"},
            {"type":"TextView","name":"➤ 战斗配置","color":"#f1c40f","size":13,"padding":[10,6,10,6],"open":"LN战斗类"},
            {"type":"TextView","name":"➤ 网络游戏","color":"#3498db","size":13,"padding":[10,6,10,6],"open":"LN网络游戏类"}
        ]
    }`)

	showMenu("LN")
}
UI()