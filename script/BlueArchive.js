const main_path = getResource();
const definition = JSON['parse'](File['read'](main_path + '/ui/ui_definition.json'));
if (definition['name'] != 'BlueArchiveUI' || definition['ui']['length'] != 0x1f) {
  clientMessage('§b[BlueArchive]§e请使用BlueArchive UI');
  exit();
}
const ui_list = file_list(main_path + '/ui');
const func_data = JSON['parse'](File['read'](main_path + '/跑路配置/功能列表.json'));
const func_config = JSON['parse'](File['read'](main_path + '/UI配置/FuncConfig.json'));
const structureTypes = ['village', 'mineshaft', 'stronghold', 'shipwreck', 'mansion', 'ocean_monument', 'pillager_outpost', 'end_city', 'fortress'];
const structureNames = ['全部', '村庄', '矿井', '要塞', '沉船', '林地府邸', '海底神殿', '虐夺者哨塔', '末地城', '下界要塞', '末地传送门[卡]'];
var record_config = {};
const defaultConfig = {
  'NIGHT_VISION': false,
  'HORSE_CRASHER': false,
  'INFINITEAURA': false,
  'GODMODE': false,
  'BUILD_CRASHER': false,
  'OVERWRITE_ITEM': false
};
var GodModeConfig = {
  'y': 0x1
};
var InfiniteAuraConfig = {
  'player': true,
  'mob': false,
  'action': true,
  'cps': 0x2,
  'count': 0x3,
  'distance': 0x1f4,
  'pos': null,
  'tick': 0x14
};
var Config = defaultConfig;
var Sauths = '';
var ticks = 0x0;
var isFindHorse = false;
function extendObject(_0x361d4d, _0xfd3f3f) {
  for (let _0x23eb8c in _0xfd3f3f) _0x361d4d[_0x23eb8c] = _0xfd3f3f[_0x23eb8c];
  return _0x361d4d;
}
const createUI = (_0x3b4550, _0x591ed0, _0x395895) => loadMenu(_0x3b4550, JSON['stringify']({
  'type': 'Menu',
  'title': {
    'name': '『' + _0x591ed0 + '』',
    'size': 0xd,
    'elevation': 0x3,
    'background': '$menu_title_background_color',
    'padding': [0x5, 0x4, 0x5, 0x4],
    'colors': ['$menu_title_gradient_text_begin_color', '$menu_title_gradient_text_end_color']
  },
  'color': '$menu_color',
  'alpha': 0.9,
  'can_close': true,
  'hide_fun': false,
  'image': '背景/白天_次要.png',
  'items': [{
    'type': 'TextView',
    'name': '退出游戏登录',
    'color': '$menu_item_color',
    'size': 0xd,
    'padding': [0x5, 0x5, 0x5, 0x5],
    'tag': 'fun_netease_logout'
  }, {
    'type': 'TextView',
    'name': '清除当前sauth',
    'color': '$menu_item_color',
    'size': 0xd,
    'padding': [0x5, 0x5, 0x5, 0x5],
    'tag': 'ba_delete_sauth'
  }, {
    'type': 'EditText',
    'name': 'Cookie登录',
    'color': '$menu_item_color',
    'size': 0xd,
    'padding': [0xa, 0x5, 0xa, 0x5],
    'hint': '填入Cookie后重新登录即可',
    'tag': 'ba_cookie'
  }, {
    'type': 'TextView',
    'name': '账号列表',
    'color': '$menu_item_color',
    'size': 0xd,
    'padding': [0x5, 0x5, 0x5, 0x5],
    'tag': 'ba_account_manager',
    'items': _0x395895
  }]
}));
var items = [];
var accounts = JSON['parse'](File['read'](main_path + '/UI配置/账号列表.json'));
for (let uid in accounts) {
  let data = accounts[uid];
  items['push']({
    'type': 'TextView',
    'name': data['name'],
    'color': '$menu_item_child_color',
    'size': 0xb,
    'padding': [0x8, 0x4, 0x8, 0x4],
    'key': 'account:' + uid
  });
}
if (func_config['ShowAccountUI']) createUI('Accounts', '账号列表', items);
function hexToUint8Array(_0x2c6ea8) {
  if (_0x2c6ea8['startsWith']('0x')) _0x2c6ea8 = _0x2c6ea8['slice'](0x2);
  const _0x1ad3fb = [];
  for (let _0x279f26 = 0x0; _0x279f26 < _0x2c6ea8['length']; _0x279f26 += 0x2) {
    const _0x2b8530 = parseInt(_0x2c6ea8['slice'](_0x279f26, _0x279f26 + 0x2), 0x10);
    _0x1ad3fb['push'](_0x2b8530);
  }
  return new Uint8Array(_0x1ad3fb);
}
function sendPyRpc(_0x37d724, _0xdb86fb) {
  return sendRpc(_0x37d724, hexToUint8Array(_0xdb86fb));
}
function summonMount() {
  const _0x260043 = getLocalPlayerUniqueID();
  const _0x15112d = generateRpcHex(_0x260043);
  sendPyRpc(0x5db23ae, '93c40163920681c4057374617274cf0000018fb5671c15c0');
  sendPyRpc(0x5db23ae, '93c401729208c4244d696e6563726166743a7065743a74656c65706f72745f6d6f756e745f72657175657374c0');
  sendPyRpc(0x5db23ae, _0x15112d);
  clientMessage('§b[BlueArchive]§e已发送召唤坐骑的请求');
}
function extractTextBetween(_0x30143e, _0x57624f, _0x93421d) {
  let _0x327080 = _0x30143e['indexOf'](_0x57624f) + _0x57624f['length'];
  let _0x11f260 = _0x30143e['indexOf'](_0x93421d, _0x327080);
  return _0x30143e['substring'](_0x327080, _0x11f260);
}
function generateRpcHex(_0x92ce9f) {
  const _0x486306 = 'c4' + _0x92ce9f['length']['toString'](0x10)['padStart'](0x2, '0') + stringToHex(_0x92ce9f);
  let _0x4a2831 = '93c40163920881c408706c617965724964c40b2d34323934393637323935c0';
  return _0x4a2831['replace'](/c40b2d34323934393637323935/, _0x486306);
}
function stringToHex(_0x3960c3) {
  return _0x3960c3['split']('')['map'](_0xc0b68f => ('00' + _0xc0b68f['charCodeAt'](0x0)['toString'](0x10))['slice'](-0x2))['join']('');
}
function editUIVar(_0x598ef6) {
  const _0x3d8be7 = ['白天', '夜间'];
  if (_0x598ef6 > _0x3d8be7['length'] - 0x1) return;
  const _0x37de79 = File['read'](main_path + '/ui/ui_variables.json');
  const _0x1f4942 = File['read'](main_path + '/UI配置/' + _0x3d8be7[_0x598ef6] + '.json');
  if (_0x37de79 == _0x1f4942) return;
  file_delete(main_path + '/ui/ui_variables.json');
  file_copy(main_path + '/UI配置/' + _0x3d8be7[_0x598ef6] + '.json', main_path + '/ui/ui_variables.json');
  definition['ui']['forEach'](_0x19265c => {
    let _0xb8bcfc = JSON['parse'](File['read'](main_path + '/ui/' + _0x19265c + '.json'));
    let _0x237b4a = JSON['parse'](File['read'](main_path + '/ui/ui_variables.json'));
    for (let _0x1b3b39 in _0x237b4a) {
      if (_0xb8bcfc['can_close'] && _0x1b3b39 == 'menu_background_image') {
        _0xb8bcfc['image'] = _0x237b4a[_0x1b3b39];
      } else if (!_0xb8bcfc['can_close'] && _0x1b3b39 == 'menu_background_image_main') {
        _0xb8bcfc['image'] = _0x237b4a[_0x1b3b39];
      }
    }
    File['write'](main_path + '/ui/' + _0x19265c + '.json', JSON['stringify'](_0xb8bcfc, null, 0x4));
  });
  showToast('已切换至' + _0x3d8be7[_0x598ef6] + '模式，请重载UI');
}
function decodePartialUnicode(_0x31cbcc) {
  return _0x31cbcc['replace'](/\\u([0-9A-Fa-f]{4})/g, (_0x22aed9, _0x182baa) => {
    return String['fromCharCode'](parseInt(_0x182baa, 0x10));
  });
}
async function fetchData(_0x254ca5, _0x207d29 = '', _0x59aa20 = 0x3, _0xf77797 = 0x3e8) {
  for (let _0x526549 = 0x0; _0x526549 < _0x59aa20; _0x526549++) {
    try {
      const _0x5a0a64 = await new Promise((_0x50485c, _0x5bb378) => {
        curl_post_game_api(_0x254ca5, _0x207d29, (_0x24d5f0, _0x419829) => {
          if (_0x24d5f0 === 0xc8) {
            _0x50485c(decodePartialUnicode(_0x419829));
          } else {
            _0x5bb378(new Error('API call failed. Code: ' + _0x24d5f0));
          }
        });
      });
      const _0x7749a7 = JSON['parse'](_0x5a0a64);
      if (_0x7749a7['code'] !== 0x0) {
        throw new Error('API error. Code: ' + _0x7749a7['code'] + ', Message: ' + _0x7749a7['message'] + ' ' + _0x7749a7['data']);
      }
      return _0x7749a7;
    } catch (_0xa49ff6) {
      if (_0x526549 < _0x59aa20 - 0x1) {
        await new Promise(_0x93c91a => setTimeout(_0x93c91a, _0xf77797));
      } else {
        throw _0xa49ff6;
      }
    }
  }
}
async function getNeteaseUser(_0x71ff17) {
  try {
    const _0x227a28 = await fetchData('https://g79obtcore.minecraft.cn:8443/pe-user-detail/get', '', 0xa);
    showToast('欢迎，用户:' + _0x227a28['entity']['name']);
    accounts[_0x227a28['entity']['entity_id']] = {
      'name': _0x227a28['entity']['name'],
      'cookies': _0x71ff17
    };
    File['write'](main_path + '/UI配置/账号列表.json', JSON['stringify'](accounts));
  } catch (_0x29fa4c) {
    showToast(_0x29fa4c['message']);
  }
}
const getDistanceByID = (_0xffc03d, _0x50126d) => {
  const _0x3847aa = getEntityPos(_0xffc03d);
  const _0x13f659 = getEntityPos(_0x50126d);
  return Math['sqrt'](Math['pow'](_0x3847aa['x'] - _0x13f659['x'], 0x2) + Math['pow'](_0x3847aa['y'] - _0x13f659['y'], 0x2) + Math['pow'](_0x3847aa['z'] - _0x13f659['z'], 0x2));
};
function onSAuthJsonHookEvent(_0x5e711f) {
  getNeteaseUser(_0x5e711f);
  if (Sauths !== '') return Sauths;
}
function onReadyEvent() {
  const _0x82978e = {
    'currentValue': 0x2
  };
  if (func_config['AutoOldTouchMode']) setEnumOption(0x4, _0x82978e);
}
if (func_config['FixArrayList']) {
  definition['ui']['forEach'](_0x3420aa => {
    let _0x3db1df = JSON['parse'](File['read'](main_path + '/ui/' + _0x3420aa + '.json'));
    let _0x1f9fb3 = JSON['parse'](File['read'](main_path + '/ui/ui_variables.json'));
    for (let _0x440d87 of _0x3db1df['items']) {
      if (_0x440d87['tag'] != 'fun_hud_module') continue;
      for (let _0x26bdca of _0x440d87['items']) {
        let _0x575240 = {};
        if (_0x26bdca['checked']) _0x575240[_0x26bdca['key']] = true;
        if (_0x26bdca['value']) _0x575240[_0x26bdca['key']] = _0x26bdca['value'];
        callModule(0x29, JSON['stringify'](_0x575240));
      }
    }
  });
}
if (func_config['AutoDayNight']) {
  const now = new Date();
  const hours = now['getHours']();
  if (hours > func_config['DayTime'][0x0] && hours < func_config['DayTime'][0x1]) {
    editUIVar(0x0);
  } else {
    editUIVar(0x1);
  }
}
function onTickEvent() {
  ticks++;
  const _0x58f3c7 = getLocalPlayerUniqueID();
  const _0x27c743 = getEntityPos(_0x58f3c7);
  const _0x559f7f = {
    'id': 0x10,
    'duration': 0x1,
    'amplifier': 0x1,
    'displayOnScreenTextureAnimation': false,
    'noCounter': true,
    'effectVisible': false
  };
  if (Config['NIGHT_VISION']) setEntityEffect(_0x58f3c7, _0x559f7f);
  if (Config['GODMODE']) sendPlayerAuthInput({
    'pos': {
      'x': _0x27c743['x'],
      'y': 0xa ** GodModeConfig['y'],
      'z': _0x27c743['z']
    }
  });
  if (Config['BUILD_CRASHER']) {
    const _0x4721df = getPlayerSelectItemSlot(getLocalPlayerUniqueID());
    for (let _0x5b5ca2 = 0x0; _0x5b5ca2 < 0x9; _0x5b5ca2++) {
      buildBlock(getLocalPlayerUniqueID(), 0x0, 0x0, 0x0, _0x5b5ca2 + 0x6);
      selectPlayerInventorySlot(getLocalPlayerUniqueID(), _0x4721df);
    }
  }
  if (Config['INFINITEAURA']) {
    InfiniteAuraConfig['tick']--;
    var _0xc3ad0c = [];
    let _0x3d13cc = Math['round'](0x14 / InfiniteAuraConfig['cps']);
    if (InfiniteAuraConfig['mob']) _0xc3ad0c['push'](...getEntityList());
    if (InfiniteAuraConfig['player']) _0xc3ad0c['push'](...getPlayerList());
    _0xc3ad0c = _0xc3ad0c['filter'](_0xfb4d95 => _0xfb4d95 !== _0x58f3c7 && findEntity(_0xfb4d95));
    _0xc3ad0c['sort']((_0x13b4ac, _0x13ee2c) => getDistanceByID(_0x13b4ac, _0x58f3c7) - getDistanceByID(_0x13ee2c, _0x58f3c7));
    if (_0xc3ad0c['includes'](_0x58f3c7)) _0xc3ad0c['splice'](_0xc3ad0c['indexOf'](_0x58f3c7, 0x1));
    if (InfiniteAuraConfig['tick'] > 0x0) {
      InfiniteAuraConfig['pos'] = {
        ...getEntityPos(_0x58f3c7)
      };
    }
    _0xc3ad0c['forEach'](_0x5afccf => {
      if (_0x5afccf === _0x58f3c7 || getDistanceByID(_0x5afccf, _0x58f3c7) > InfiniteAuraConfig['distance']) return;
      if (InfiniteAuraConfig['tick'] === 0x0) {
        const _0x5df806 = getEntityPos(_0x5afccf);
        buildBlock(_0x58f3c7, _0x5df806['x'], _0x5df806['y'], _0x5df806['z'], 0x1);
        sendPlayerAuthInput({
          'pos': {
            'x': _0x5df806['x'],
            'y': _0x5df806['y'],
            'z': _0x5df806['z']
          }
        });
        setEntityPos(_0x58f3c7, _0x5df806['x'], _0x5df806['y'], _0x5df806['z']);
        attackEntity(_0x5afccf, InfiniteAuraConfig['action']);
      }
    });
    if (InfiniteAuraConfig['tick'] <= 0x0 && InfiniteAuraConfig['pos']) {
      buildBlock(_0x58f3c7, InfiniteAuraConfig['pos']['x'], InfiniteAuraConfig['pos']['y'], InfiniteAuraConfig['pos']['z'], 0x1);
      sendPlayerAuthInput({
        'pos': {
          'x': InfiniteAuraConfig['pos']['x'],
          'y': InfiniteAuraConfig['pos']['y'],
          'z': InfiniteAuraConfig['pos']['z']
        }
      });
      setEntityPos(_0x58f3c7, InfiniteAuraConfig['pos']['x'], InfiniteAuraConfig['pos']['y'], InfiniteAuraConfig['pos']['z']);
      InfiniteAuraConfig['tick'] = _0x3d13cc;
    }
  }
  if (Config['HORSE_CRASHER'] && !isFindHorse) {
    getEntityList()['forEach'](_0x4e633e => {
      const _0x4e86bc = getEntityNamespace(_0x4e633e);
      if (_0x4e86bc != 'minecraft:horse') return;
      if (interactEntity(_0x4e633e)) {
        setTimeout(() => setEntityPos(_0x58f3c7, 0x895440, 0x64, 0x895440), 0x64);
      }
      isFindHorse = true;
    });
  }
  if (func_config['BAArrayList']) {
    const _0x285e68 = new Date();
    const _0x4f1d9e = _0x285e68['getFullYear']() + '-' + ('0' + (_0x285e68['getMonth']() + 0x1))['slice'](-0x2) + '-' + ('0' + _0x285e68['getDate']())['slice'](-0x2) + ' ' + ('0' + _0x285e68['getHours']())['slice'](-0x2) + ':' + ('0' + _0x285e68['getMinutes']())['slice'](-0x2) + ':' + ('0' + _0x285e68['getSeconds']())['slice'](-0x2);
    const _0x41ba31 = getEntityPos(_0x58f3c7);
    const _0x1109b7 = Math['floor'](_0x41ba31['x']) + ', ' + Math['floor'](_0x41ba31['y']) + ', ' + Math['floor'](_0x41ba31['z']);
    func_config['CustomArrayListText']['forEach']((_0x180ad3, _0x417ae7) => {
      let _0x360b21 = _0x180ad3['join'](' | ');
      _0x360b21 = _0x360b21['replaceAll']('[时间]', _0x4f1d9e);
      _0x360b21 = _0x360b21['replaceAll']('[名称]', getEntityName(_0x58f3c7));
      _0x360b21 = _0x360b21['replaceAll']('[坐标]', _0x1109b7);
      addCustomArrayList('BlueArchive_' + _0x417ae7, _0x360b21, _0x360b21, true);
    });
  }
}
function onCallModuleEvent(_0x3923e9) {
  if (func_data[_0x3923e9['fun']]) {
    if (!record_config[_0x3923e9['fun']]) record_config[_0x3923e9['fun']] = {};
    _0x3923e9['id'] = func_data[_0x3923e9['fun']];
    record_config[_0x3923e9['fun']] = extendObject(record_config[_0x3923e9['fun']], _0x3923e9);
  }
  if (Config['OVERWRITE_ITEM'] && _0x3923e9['item']) {
    const _0x480aaa = getEntityCarriedItem(getLocalPlayerUniqueID());
    const _0x4bae96 = extractTextBetween(_0x480aaa, 'Damage:', 's');
    const _0x5df293 = extractTextBetween(_0x480aaa, '{Damage:', '}', ',');
    const _0x770324 = JSON['parse'](File['read'](main_path + '/UI配置/blocks.json'));
    let _0x56f2a0 = _0x3923e9['item']['canPlaceOn'];
    let _0x6340e7 = _0x3923e9['item']['canDestroy'];
    if (_0x56f2a0['length'] > 0x0 && _0x56f2a0[0x0] == 'all') _0x56f2a0 = _0x770324;
    if (_0x6340e7['length'] > 0x0 && _0x6340e7[0x0] == 'all') _0x6340e7 = _0x770324;
    if (_0x56f2a0['length'] > 0x0) {
      setEntityCarriedItem(getLocalPlayerUniqueID(), _0x480aaa['replace']('{', '{CanPlaceOn:' + JSON['stringify'](_0x56f2a0) + ','));
    }
    if (_0x6340e7['length'] > 0x0) {
      setEntityCarriedItem(getLocalPlayerUniqueID(), _0x480aaa['replace']('{', '{CanDestroy:' + JSON['stringify'](_0x6340e7) + ','));
    }
    setTimeout(() => dropPlayerInventorySlot(getLocalPlayerUniqueID(), getPlayerSelectItemSlot(getLocalPlayerUniqueID())), 0x7d0);
    return;
  }
  const {
    fun,
    value,
    name
  } = _0x3923e9;
  if (fun === 'ba_cookie') {
    if (_0x3923e9['text'] === '') return;
    let _0x2b477b = JSON['parse'](_0x3923e9['text']);
    if (_0x2b477b['sauth_json'] !== undefined) Sauths = _0x2b477b['sauth_json'];else Sauths = _0x3923e9['text'];
    showToast('Cookie使用成功，请重新登录我的世界');
  }
  if (fun === 'ba_join_game') {
    let _0x41dcfd = _0x3923e9['text'];
    if (_0x41dcfd['includes'](':')) _0x41dcfd = _0x41dcfd['replace'](':', ' ');
    executePluginCommand('/ww server ' + _0x41dcfd);
  }
  if (fun === 'ba_night_vision') {
    Config['NIGHT_VISION'] = value;
    addCustomArrayList(fun, name, name, value);
  }
  if (fun === 'ba_menu_language') {
    const {
      index
    } = _0x3923e9;
    if (!index) return;
    let _0x59886e = null;
    switch (index) {
      case 0x1:
        _0x59886e = '中文';
        break;
      case 0x2:
        _0x59886e = '英文';
        break;
      case 0x3:
        _0x59886e = '日文';
        break;
      case 0x4:
        _0x59886e = '文言文';
        break;
      case 0x5:
        _0x59886e = '朝鲜语';
        break;
    }
    if (!_0x59886e) return;
    definition['ui']['forEach'](_0x17bbe4 => {
      let _0xf27c99 = JSON['parse'](File['read'](main_path + '/ui/' + _0x17bbe4 + '.json'));
      let _0x4e460e = JSON['parse'](File['read'](main_path + '/UI配置/' + _0x59886e + '.json'));
      for (let _0x3ef35a in _0x4e460e) {
        for (let _0x5829aa in _0xf27c99['items']) {
          if (_0xf27c99['items'][_0x5829aa]['tag'] === _0x3ef35a) {
            _0xf27c99['items'][_0x5829aa]['name'] = _0x4e460e[_0x3ef35a];
          }
        }
      }
      File['write'](main_path + '/ui/' + _0x17bbe4 + '.json', JSON['stringify'](_0xf27c99, null, 0x4));
    });
    showToast('已切换至' + _0x59886e + ', 重启游戏后生效');
  }
  if (fun === 'ba_menu_color') {
    const {
      index
    } = _0x3923e9;
    if (!index) return;
    editUIVar(index - 0x1);
  }
  if (fun === 'ba_reload_menu') {
    definition['ui']['forEach'](_0x26829f => {
      thread(() => {
        removeMenu(_0x26829f);
        const _0x5a7bd8 = File['read'](main_path + '/ui/' + _0x26829f + '.json');
        thread(() => loadMenu(_0x26829f, _0x5a7bd8), 0x3e8);
      }, 0x64);
    });
    showToast('已重新加载UI');
  }
  if (fun === 'ba_show_menu') {
    definition['ui']['forEach'](_0x1af89d => thread(() => showMenu(_0x1af89d), 0x64));
  }
  if (fun === 'ba_horse_crasher') {
    Config['HORSE_CRASHER'] = value;
    addCustomArrayList(fun, name, name, value);
    if (value) summonMount();else isFindHorse = false;
  }
  if (fun === 'ba_Infiniteaura') {
    Config['INFINITEAURA'] = value;
    addCustomArrayList(fun, name, name, value);
    if (_0x3923e9['player']) InfiniteAuraConfig['player'] = _0x3923e9['player'];
    if (_0x3923e9['mob']) InfiniteAuraConfig['mob'] = _0x3923e9['mob'];
    if (_0x3923e9['action']) InfiniteAuraConfig['action'] = _0x3923e9['action'];
    if (_0x3923e9['cps']) InfiniteAuraConfig['cps'] = _0x3923e9['cps'];
    if (_0x3923e9['count']) InfiniteAuraConfig['count'] = _0x3923e9['count'];
    if (_0x3923e9['distance']) InfiniteAuraConfig['distance'] = _0x3923e9['distance'];
  }
  if (fun === 'ba_godmode') {
    Config['GODMODE'] = value;
    addCustomArrayList(fun, name, name, value);
    if (_0x3923e9['y']) GodModeConfig['y'] = _0x3923e9['y'];
  }
  if (fun === 'ba_build_crasher') {
    Config['BUILD_CRASHER'] = value;
    addCustomArrayList(fun, name, name, value);
  }
  if (fun === 'ba_overwrite_item') {
    Config['OVERWRITE_ITEM'] = value;
    addCustomArrayList(fun, name, name, value);
  }
  if (fun === 'ba_no_clip') {
    const _0x254efd = {
      'value': value,
      'noclip': value,
      'flying': value
    };
    const _0x163bfb = {
      'value': value,
      'no_move_check': value,
      'no_fall_check': value
    };
    if (value) callModule(0x2c, JSON['stringify'](_0x163bfb));
    callModule(0x1, JSON['stringify'](_0x254efd));
  }
  if (fun === 'ba_find_structure') {
    const _0x1416b1 = getWorldData();
    const _0x5dcabc = getEntityPos(getLocalPlayerUniqueID());
    const _0x5a3747 = [Math['floor'](_0x5dcabc['x']), Math['floor'](_0x5dcabc['y']), Math['floor'](_0x5dcabc['z'])];
    const _0x15e64b = {
      'type': 'form',
      'title': '结构',
      'content': '选择要传送的结构',
      'buttons': [{
        'text': '查询结构',
        'data': 'textures/ui/missing_item.png'
      }]
    };
    const _0x590641 = main_path + '/结构列表/' + _0x1416b1['randomSeed'] + '.json';
    if (File['exist'](_0x590641)) {
      const _0x290487 = JSON['parse'](File['read'](_0x590641));
      for (let _0x5bd783 = 0x0; _0x5bd783 < _0x290487['length']; _0x5bd783++) {
        const _0x5371ab = _0x290487[_0x5bd783];
        _0x15e64b['buttons']['push']({
          'text': '§e' + _0x5371ab['name'] + '\n坐标: [' + _0x5371ab['x'] + ', ' + _0x5371ab['y'] + ', ' + _0x5371ab['z'] + ']',
          'image': {
            'type': 'path',
            'data': 'textures/ui/hammersmashedits.png'
          }
        });
      }
    }
    addForm(JSON['stringify'](_0x15e64b), function (_0x3dc494) {
      if (_0x3dc494 >= 0x1) {
        setEntityPos(getLocalPlayerUniqueID(), datas[_0x3dc494 - 0x1]['x'], datas[_0x3dc494 - 0x1]['y'], datas[_0x3dc494 - 0x1]['z']);
        clientMessage('§b[BlueArchive]§e已传送');
      } else if (_0x3dc494 == 0x0) {
        const _0x1d1cfe = {
          'type': 'custom_form',
          'title': '查询结构',
          'content': [{
            'type': 'dropdown',
            'text': '遗迹名称',
            'options': structureNames
          }, {
            'type': 'toggle',
            'text': '自动传送',
            'default': false
          }, {
            'type': 'input',
            'text': '起始坐标',
            'default': _0x5a3747['join'](',')
          }]
        };
        addForm(JSON['stringify'](_0x1d1cfe), function (_0x44eaee, _0x2e7fce, _0x5804cb) {
          let _0x48baf1 = _0x44eaee === 0x0 ? [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9] : [_0x44eaee];
          _0x48baf1['forEach'](_0x3e88a9 => {
            const _0xb2e01e = _0x5804cb['split'](',');
            if (!File['exist'](_0x590641)) {
              File['write'](_0x590641, '[]');
            }
            const _0x1d7ee4 = findStructure(Number(_0xb2e01e[0x0]), Number(_0xb2e01e[0x1]), Number(_0xb2e01e[0x2]), structureTypes[_0x3e88a9 - 0x1]);
            if (!_0x1d7ee4['state']) {
              clientMessage('§b[BlueArchive]§c未找到');
              return;
            }
            let _0x263d89 = JSON['parse'](File['read'](_0x590641));
            const _0x17f33c = {
              ..._0x1d7ee4,
              'name': structureNames[_0x3e88a9]
            };
            _0x263d89['push'](_0x17f33c);
            if (_0x2e7fce && _0x48baf1['length'] === 0x1) {
              setEntityPos(getLocalPlayerUniqueID(), _0x1d7ee4['x'], _0x1d7ee4['y'], _0x1d7ee4['z']);
              clientMessage('§b[BlueArchive]§e已传送');
            }
          });
        });
      }
    });
  }
  if (fun === 'ba_delete_sauth') Sauths = '';
  if (fun === 'ba_save_config') {
    const _0x535287 = {
      'type': 'custom_form',
      'title': '输入保存名称',
      'content': [{
        'type': 'input',
        'text': '名称:',
        'default': 'BAUI - ' + Date['now']()
      }, {
        'type': 'toggle',
        'text': '清除记录的配置',
        'default': false
      }]
    };
    addForm(JSON['stringify'](_0x535287), function (_0x177117, _0xad1381) {
      File['write'](main_path + '/跑路配置/' + _0x177117 + '.json', JSON['stringify'](record_config, null, 0x4));
      clientMessage('§b[BlueArchive]§e保存成功');
      if (_0xad1381) record_config = {};
    });
  }
  if (fun === 'ba_account_manager' && _0x3923e9['key']['includes']('account:')) {
    let _0x515e56 = accounts[_0x3923e9['key']['replace']('account:', '')];
    Sauths = _0x515e56['cookies'];
    if (Sauths === '') return;
    showToast('已切换至' + _0x515e56['name'] + '，请重新登录');
  }
  if (fun === 'ba_load_config') {
    const _0x26d2bc = {
      'type': 'form',
      'title': '配置文件',
      'content': '选择要加载的配置',
      'buttons': [{
        'text': '没有配置'
      }]
    };
    const _0x235e02 = File['list'](main_path + '/跑路配置');
    for (let _0x3c8952 = 0x0; _0x3c8952 < _0x235e02['length']; _0x3c8952++) {
      _0x26d2bc['buttons'][_0x3c8952] = {
        'text': _0x235e02[_0x3c8952]['name'],
        'image': {
          'type': 'path',
          'data': 'textures/ui/gear.png'
        }
      };
    }
    addForm(JSON['stringify'](_0x26d2bc), function (_0x588d4a) {
      if (_0x235e02['length'] > 0x0 && _0x588d4a >= 0x0) {
        const _0x3f3027 = JSON['parse'](File['read'](_0x235e02[_0x588d4a]['path']));
        let _0x49c8a4 = 0x0;
        for (let _0x2ee759 in _0x3f3027) {
          const _0x31d550 = _0x3f3027[_0x2ee759];
          callModule(_0x31d550['id'], JSON['stringify'](_0x31d550));
          _0x49c8a4++;
        }
        clientMessage('§b[BlueArchive]§e加载成功，共' + _0x49c8a4 + '条配置');
      }
    });
  }
  if (fun === 'ba_exit') {
    showToast('已退出脚本');
    exit();
  }
  ;
  if (fun === 'ba_summon_horse') summonMount();
}
if (func_config['EnterWelcome']) {
  const now = new Date();
  const hours = now['getHours']();
  if (hours > 0x17 || hours < 0x5) showToast('凌晨好，注意身心健康');else if (hours > 0x5 && hours < 0x8) showToast('早上好，记得要吃早饭');else if (hours > 0x8 && hours < 0xb) showToast('上午好，一日之计在于晨');else if (hours > 0xb && hours < 0xd) showToast('中午好，记得去吃午饭');else if (hours > 0xd && hours < 0x11) showToast('下午好，记得睡一个午觉');else if (hours > 0x11 && hours < 0x13) showToast('傍晚好，该吃晚饭了');else if (hours > 0x13 && hours < 0x17) showToast('晚上好，早睡早起身体好');
}