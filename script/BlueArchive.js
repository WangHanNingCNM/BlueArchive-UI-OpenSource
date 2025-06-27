/*
 * 有一分光，便发一分热。
 * Deobfuscated by: Sartre
 * TaskID: 9a3f7e2c | Version: 16.9
 * 只要做了哪怕再少，就永远比只会敲键盘的，精致的利己主义者强千倍万倍。
 * Timestamp: Thu Jun 27 21:51:24 2025
 */
 
const main_path = getResource();
const definition = JSON['parse'](File['read'](main_path + '/ui/ui_definition.json'));
if (definition['name'] != 'BlueArchiveUI' || definition['ui']['length'] != 0x28) {
  clientMessage('§b[BlueArchive]§e请使用BlueArchive UI');
  //exit();
}
const ui_list = file_list(main_path + '/ui');
const func_data = JSON['parse'](File['read'](main_path + '/GBRC/BlueArchiveUI/跑路配置/功能列表.json'));
const func_config = JSON['parse'](File['read'](main_path + '/GBRC/BlueArchiveUI/UI配置/FuncConfig.json'));
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
function extendObject(_0x209f13, _0xd02818) {
  for (let _0x48d801 in _0xd02818) _0x209f13[_0x48d801] = _0xd02818[_0x48d801];
  return _0x209f13;
}
const createUI = (_0x1b772b, _0x5b6f79, _0x382135) => loadMenu(_0x1b772b, JSON['stringify']({
  'type': 'Menu',
  'title': {
    'name': '『' + _0x5b6f79 + '』',
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
    'items': _0x382135
  }]
}));
var items = [];
var accounts = JSON['parse'](File['read'](main_path + '/GBRC/BlueArchiveUI/UI配置/账号列表.json'));
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
function hexToUint8Array(_0x38498f) {
  if (_0x38498f['startsWith']('0x')) _0x38498f = _0x38498f['slice'](0x2);
  const _0x530ab9 = [];
  for (let _0x369fad = 0x0; _0x369fad < _0x38498f['length']; _0x369fad += 0x2) {
    const _0x3ba895 = parseInt(_0x38498f['slice'](_0x369fad, _0x369fad + 0x2), 0x10);
    _0x530ab9['push'](_0x3ba895);
  }
  return new Uint8Array(_0x530ab9);
}
function sendPyRpc(_0x88d945, _0x56e0fb) {
  return sendRpc(_0x88d945, hexToUint8Array(_0x56e0fb));
}
function summonMount() {
  const _0x37d35b = getLocalPlayerUniqueID();
  const _0x5bc551 = generateRpcHex(_0x37d35b);
  sendPyRpc(0x5db23ae, '93c40163920681c4057374617274cf0000018fb5671c15c0');
  sendPyRpc(0x5db23ae, '93c401729208c4244d696e6563726166743a7065743a74656c65706f72745f6d6f756e745f72657175657374c0');
  sendPyRpc(0x5db23ae, _0x5bc551);
  clientMessage('§b[BlueArchive]§e已发送召唤坐骑的请求');
}
function extractTextBetween(_0x3a9b6c, _0x3a241e, _0x52e089) {
  let _0x13875c = _0x3a9b6c['indexOf'](_0x3a241e) + _0x3a241e['length'];
  let _0x4326c4 = _0x3a9b6c['indexOf'](_0x52e089, _0x13875c);
  return _0x3a9b6c['substring'](_0x13875c, _0x4326c4);
}
function generateRpcHex(_0x998254) {
  const _0x42aea6 = 'c4' + _0x998254['length']['toString'](0x10)['padStart'](0x2, '0') + stringToHex(_0x998254);
  let _0x4f5f51 = '93c40163920881c408706c617965724964c40b2d34323934393637323935c0';
  return _0x4f5f51['replace'](/c40b2d34323934393637323935/, _0x42aea6);
}
function stringToHex(_0x91a39d) {
  return _0x91a39d['split']('')['map'](_0x3c2189 => ('00' + _0x3c2189['charCodeAt'](0x0)['toString'](0x10))['slice'](-0x2))['join']('');
}
function editUIVar(_0x24b926) {
  const _0x2d5d34 = ['白天', '夜间'];
  if (_0x24b926 > _0x2d5d34['length'] - 0x1) return;
  const _0x3bea18 = File['read'](main_path + '/ui/ui_variables.json');
  const _0x4a857f = File['read'](main_path + '/GBRC/BlueArchiveUI/UI配置/' + _0x2d5d34[_0x24b926] + '.json');
  if (_0x3bea18 == _0x4a857f) return;
  file_delete(main_path + '/ui/ui_variables.json');
  file_copy(main_path + '/GBRC/BlueArchiveUI/UI配置/' + _0x2d5d34[_0x24b926] + '.json', main_path + '/ui/ui_variables.json');
  definition['ui']['forEach'](_0x5cd041 => {
    let _0x3f9e11 = JSON['parse'](File['read'](main_path + '/ui/' + _0x5cd041 + '.json'));
    let _0x32a194 = JSON['parse'](File['read'](main_path + '/ui/ui_variables.json'));
    for (let _0x5d9846 in _0x32a194) {
      if (_0x3f9e11['can_close'] && _0x5d9846 == 'menu_background_image') {
        _0x3f9e11['image'] = _0x32a194[_0x5d9846];
      } else if (!_0x3f9e11['can_close'] && _0x5d9846 == 'menu_background_image_main') {
        _0x3f9e11['image'] = _0x32a194[_0x5d9846];
      }
    }
    File['write'](main_path + '/ui/' + _0x5cd041 + '.json', JSON['stringify'](_0x3f9e11, null, 0x4));
  });
  showToast('已切换至' + _0x2d5d34[_0x24b926] + '模式，请重载UI');
}
function decodePartialUnicode(_0x55fdd9) {
  return _0x55fdd9['replace'](/\\u([0-9A-Fa-f]{4})/g, (_0x960461, _0x4305b2) => {
    return String['fromCharCode'](parseInt(_0x4305b2, 0x10));
  });
}
async function fetchData(_0x198e6c, _0x25911b = '', _0xc7f553 = 0x3, _0x38eaeb = 0x3e8) {
  for (let _0x238742 = 0x0; _0x238742 < _0xc7f553; _0x238742++) {
    try {
      const _0xe9a32a = await new Promise((_0x4cd5bf, _0x14b960) => {
        curl_post_game_api(_0x198e6c, _0x25911b, (_0x3da658, _0x267ba7) => {
          if (_0x3da658 === 0xc8) {
            _0x4cd5bf(decodePartialUnicode(_0x267ba7));
          } else {
            _0x14b960(new Error('API call failed. Code: ' + _0x3da658));
          }
        });
      });
      const _0x2c3361 = JSON['parse'](_0xe9a32a);
      if (_0x2c3361['code'] !== 0x0) {
        throw new Error('API error. Code: ' + _0x2c3361['code'] + ', Message: ' + _0x2c3361['message'] + ' ' + _0x2c3361['data']);
      }
      return _0x2c3361;
    } catch (_0x1eb145) {
      if (_0x238742 < _0xc7f553 - 0x1) {
        await new Promise(_0x430489 => setTimeout(_0x430489, _0x38eaeb));
      } else {
        throw _0x1eb145;
      }
    }
  }
}
async function getNeteaseUser(_0x2368d5) {
  try {
    const _0x4676ac = await fetchData('https://g79obtcore.minecraft.cn:8443/pe-user-detail/get', '', 0xa);
    showToast('欢迎，用户:' + _0x4676ac['entity']['name']);
    accounts[_0x4676ac['entity']['entity_id']] = {
      'name': _0x4676ac['entity']['name'],
      'cookies': _0x2368d5
    };
    File['write'](main_path + '/GBRC/BlueArchiveUI/UI配置/账号列表.json', JSON['stringify'](accounts));
  } catch (_0x50fd5f) {
    showToast(_0x50fd5f['message']);
  }
}
const getDistanceByID = (_0x486c66, _0x6a9141) => {
  const _0x446c31 = getEntityPos(_0x486c66);
  const _0x27a0f8 = getEntityPos(_0x6a9141);
  return Math['sqrt'](Math['pow'](_0x446c31['x'] - _0x27a0f8['x'], 0x2) + Math['pow'](_0x446c31['y'] - _0x27a0f8['y'], 0x2) + Math['pow'](_0x446c31['z'] - _0x27a0f8['z'], 0x2));
};
function onSAuthJsonHookEvent(_0x1d1015) {
  getNeteaseUser(_0x1d1015);
  if (Sauths !== '') return Sauths;
}
function onReadyEvent() {
  const _0x318a5a = {
    'currentValue': 0x2
  };
  if (func_config['AutoOldTouchMode']) setEnumOption(0x4, _0x318a5a);
}
if (func_config['FixArrayList']) {
  definition['ui']['forEach'](_0x4ddf5a => {
    let _0x1622d7 = JSON['parse'](File['read'](main_path + '/ui/' + _0x4ddf5a + '.json'));
    let _0x642dba = JSON['parse'](File['read'](main_path + '/ui/ui_variables.json'));
    for (let _0x290416 of _0x1622d7['items']) {
      if (_0x290416['tag'] != 'fun_hud_module') continue;
      for (let _0x33ebb6 of _0x290416['items']) {
        let _0x29da3f = {};
        if (_0x33ebb6['checked']) _0x29da3f[_0x33ebb6['key']] = true;
        if (_0x33ebb6['value']) _0x29da3f[_0x33ebb6['key']] = _0x33ebb6['value'];
        callModule(0x29, JSON['stringify'](_0x29da3f));
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
  const _0x4ee987 = getLocalPlayerUniqueID();
  const _0xd105ac = getEntityPos(_0x4ee987);
  const _0x3f215f = {
    'id': 0x10,
    'duration': 0x1,
    'amplifier': 0x1,
    'displayOnScreenTextureAnimation': false,
    'noCounter': true,
    'effectVisible': false
  };
  if (Config['NIGHT_VISION']) setEntityEffect(_0x4ee987, _0x3f215f);
  if (Config['GODMODE']) sendPlayerAuthInput({
    'pos': {
      'x': _0xd105ac['x'],
      'y': 0xa ** GodModeConfig['y'],
      'z': _0xd105ac['z']
    }
  });
  if (Config['BUILD_CRASHER']) {
    const _0xcf5db9 = getPlayerSelectItemSlot(getLocalPlayerUniqueID());
    for (let _0x31a29e = 0x0; _0x31a29e < 0x9; _0x31a29e++) {
      buildBlock(getLocalPlayerUniqueID(), 0x0, 0x0, 0x0, _0x31a29e + 0x6);
      selectPlayerInventorySlot(getLocalPlayerUniqueID(), _0xcf5db9);
    }
  }
  if (Config['INFINITEAURA']) {
    InfiniteAuraConfig['tick']--;
    var _0x3cf371 = [];
    let _0x542733 = Math['round'](0x14 / InfiniteAuraConfig['cps']);
    if (InfiniteAuraConfig['mob']) _0x3cf371['push'](...getEntityList());
    if (InfiniteAuraConfig['player']) _0x3cf371['push'](...getPlayerList());
    _0x3cf371 = _0x3cf371['filter'](_0x69051a => _0x69051a !== _0x4ee987 && findEntity(_0x69051a));
    _0x3cf371['sort']((_0x3f95f7, _0x33e768) => getDistanceByID(_0x3f95f7, _0x4ee987) - getDistanceByID(_0x33e768, _0x4ee987));
    if (_0x3cf371['includes'](_0x4ee987)) _0x3cf371['splice'](_0x3cf371['indexOf'](_0x4ee987, 0x1));
    if (InfiniteAuraConfig['tick'] > 0x0) {
      InfiniteAuraConfig['pos'] = {
        ...getEntityPos(_0x4ee987)
      };
    }
    _0x3cf371['forEach'](_0x560c8b => {
      if (_0x560c8b === _0x4ee987 || getDistanceByID(_0x560c8b, _0x4ee987) > InfiniteAuraConfig['distance']) return;
      if (InfiniteAuraConfig['tick'] === 0x0) {
        const _0x47a910 = getEntityPos(_0x560c8b);
        buildBlock(_0x4ee987, _0x47a910['x'], _0x47a910['y'], _0x47a910['z'], 0x1);
        sendPlayerAuthInput({
          'pos': {
            'x': _0x47a910['x'],
            'y': _0x47a910['y'],
            'z': _0x47a910['z']
          }
        });
        setEntityPos(_0x4ee987, _0x47a910['x'], _0x47a910['y'], _0x47a910['z']);
        attackEntity(_0x560c8b, InfiniteAuraConfig['action']);
      }
    });
    if (InfiniteAuraConfig['tick'] <= 0x0 && InfiniteAuraConfig['pos']) {
      buildBlock(_0x4ee987, InfiniteAuraConfig['pos']['x'], InfiniteAuraConfig['pos']['y'], InfiniteAuraConfig['pos']['z'], 0x1);
      sendPlayerAuthInput({
        'pos': {
          'x': InfiniteAuraConfig['pos']['x'],
          'y': InfiniteAuraConfig['pos']['y'],
          'z': InfiniteAuraConfig['pos']['z']
        }
      });
      setEntityPos(_0x4ee987, InfiniteAuraConfig['pos']['x'], InfiniteAuraConfig['pos']['y'], InfiniteAuraConfig['pos']['z']);
      InfiniteAuraConfig['tick'] = _0x542733;
    }
  }
  if (Config['HORSE_CRASHER'] && !isFindHorse) {
    getEntityList()['forEach'](_0x2aaf62 => {
      const _0x5683c5 = getEntityNamespace(_0x2aaf62);
      if (_0x5683c5 != 'minecraft:horse') return;
      if (interactEntity(_0x2aaf62)) {
        setTimeout(() => setEntityPos(_0x4ee987, 0x895440, 0x64, 0x895440), 0x64);
      }
      isFindHorse = true;
    });
  }
  if (func_config['BAArrayList']) {
    const _0x40ce76 = new Date();
    const _0x6766fd = _0x40ce76['getFullYear']() + '-' + ('0' + (_0x40ce76['getMonth']() + 0x1))['slice'](-0x2) + '-' + ('0' + _0x40ce76['getDate']())['slice'](-0x2) + ' ' + ('0' + _0x40ce76['getHours']())['slice'](-0x2) + ':' + ('0' + _0x40ce76['getMinutes']())['slice'](-0x2) + ':' + ('0' + _0x40ce76['getSeconds']())['slice'](-0x2);
    const _0x3f6cb8 = getEntityPos(_0x4ee987);
    const _0x4a88cf = Math['floor'](_0x3f6cb8['x']) + ', ' + Math['floor'](_0x3f6cb8['y']) + ', ' + Math['floor'](_0x3f6cb8['z']);
    func_config['CustomArrayListText']['forEach']((_0x1fe00c, _0x2c8f70) => {
      let _0x28939e = _0x1fe00c['join'](' | ');
      _0x28939e = _0x28939e['replaceAll']('[时间]', _0x6766fd);
      _0x28939e = _0x28939e['replaceAll']('[名称]', getEntityName(_0x4ee987));
      _0x28939e = _0x28939e['replaceAll']('[坐标]', _0x4a88cf);
      addCustomArrayList('BlueArchive_' + _0x2c8f70, _0x28939e, _0x28939e, true);
    });
  }
}
function onCallModuleEvent(_0x4511a4) {
  if (func_data[_0x4511a4['fun']]) {
    if (!record_config[_0x4511a4['fun']]) record_config[_0x4511a4['fun']] = {};
    _0x4511a4['id'] = func_data[_0x4511a4['fun']];
    record_config[_0x4511a4['fun']] = extendObject(record_config[_0x4511a4['fun']], _0x4511a4);
  }
  if (Config['OVERWRITE_ITEM'] && _0x4511a4['item']) {
    const _0x6a8055 = getEntityCarriedItem(getLocalPlayerUniqueID());
    const _0xd4aa45 = extractTextBetween(_0x6a8055, 'Damage:', 's');
    const _0x554644 = extractTextBetween(_0x6a8055, '{Damage:', '}', ',');
    const _0x5e9bf1 = JSON['parse'](File['read'](main_path + '/GBRC/BlueArchiveUI/UI配置/blocks.json'));
    let _0x4996cf = _0x4511a4['item']['canPlaceOn'];
    let _0x381ac3 = _0x4511a4['item']['canDestroy'];
    if (_0x4996cf['length'] > 0x0 && _0x4996cf[0x0] == 'all') _0x4996cf = _0x5e9bf1;
    if (_0x381ac3['length'] > 0x0 && _0x381ac3[0x0] == 'all') _0x381ac3 = _0x5e9bf1;
    if (_0x4996cf['length'] > 0x0) {
      setEntityCarriedItem(getLocalPlayerUniqueID(), _0x6a8055['replace']('{', '{CanPlaceOn:' + JSON['stringify'](_0x4996cf) + ','));
    }
    if (_0x381ac3['length'] > 0x0) {
      setEntityCarriedItem(getLocalPlayerUniqueID(), _0x6a8055['replace']('{', '{CanDestroy:' + JSON['stringify'](_0x381ac3) + ','));
    }
    setTimeout(() => dropPlayerInventorySlot(getLocalPlayerUniqueID(), getPlayerSelectItemSlot(getLocalPlayerUniqueID())), 0x7d0);
    return;
  }
  const {
    fun,
    value,
    name
  } = _0x4511a4;
  if (fun === 'ba_cookie') {
    if (_0x4511a4['text'] === '') return;
    let _0x230554 = JSON['parse'](_0x4511a4['text']);
    if (_0x230554['sauth_json'] !== undefined) Sauths = _0x230554['sauth_json'];else Sauths = _0x4511a4['text'];
    showToast('Cookie使用成功，请重新登录我的世界');
  }
  if (fun === 'ba_join_game') {
    let _0x3194f6 = _0x4511a4['text'];
    if (_0x3194f6['includes'](':')) _0x3194f6 = _0x3194f6['replace'](':', ' ');
    executePluginCommand('/ww server ' + _0x3194f6);
  }
  if (fun === 'ba_night_vision') {
    Config['NIGHT_VISION'] = value;
    addCustomArrayList(fun, name, name, value);
  }
  if (fun === 'ba_menu_language') {
    const {
      index
    } = _0x4511a4;
    if (!index) return;
    let _0xe8917b = null;
    switch (index) {
      case 0x1:
        _0xe8917b = '中文';
        break;
      case 0x2:
        _0xe8917b = '英文';
        break;
      case 0x3:
        _0xe8917b = '日文';
        break;
      case 0x4:
        _0xe8917b = '文言文';
        break;
      case 0x5:
        _0xe8917b = '朝鲜语';
        break;
    }
    if (!_0xe8917b) return;
    definition['ui']['forEach'](_0x3451b8 => {
      let _0x5167b8 = JSON['parse'](File['read'](main_path + '/ui/' + _0x3451b8 + '.json'));
      let _0xf6a060 = JSON['parse'](File['read'](main_path + '/GBRC/BlueArchiveUI/UI配置/' + _0xe8917b + '.json'));
      for (let _0x981847 in _0xf6a060) {
        for (let _0xbc367 in _0x5167b8['items']) {
          if (_0x5167b8['items'][_0xbc367]['tag'] === _0x981847) {
            _0x5167b8['items'][_0xbc367]['name'] = _0xf6a060[_0x981847];
          }
        }
      }
      File['write'](main_path + '/ui/' + _0x3451b8 + '.json', JSON['stringify'](_0x5167b8, null, 0x4));
    });
    showToast('已切换至' + _0xe8917b + ', 重启游戏后生效');
  }
  if (fun === 'ba_menu_color') {
    const {
      index
    } = _0x4511a4;
    if (!index) return;
    editUIVar(index - 0x1);
  }
  if (fun === 'ba_reload_menu') {
    definition['ui']['forEach'](_0x166990 => {
      thread(() => {
        removeMenu(_0x166990);
        const _0x4c1bb9 = File['read'](main_path + '/ui/' + _0x166990 + '.json');
        thread(() => loadMenu(_0x166990, _0x4c1bb9), 0x3e8);
      }, 0x64);
    });
    showToast('已重新加载UI');
  }
  if (fun === 'ba_show_menu') {
    definition['ui']['forEach'](_0x8054e => thread(() => showMenu(_0x8054e), 0x64));
  }
  if (fun === 'ba_horse_crasher') {
    Config['HORSE_CRASHER'] = value;
    addCustomArrayList(fun, name, name, value);
    if (value) summonMount();else isFindHorse = false;
  }
  if (fun === 'ba_Infiniteaura') {
    Config['INFINITEAURA'] = value;
    addCustomArrayList(fun, name, name, value);
    if (_0x4511a4['player']) InfiniteAuraConfig['player'] = _0x4511a4['player'];
    if (_0x4511a4['mob']) InfiniteAuraConfig['mob'] = _0x4511a4['mob'];
    if (_0x4511a4['action']) InfiniteAuraConfig['action'] = _0x4511a4['action'];
    if (_0x4511a4['cps']) InfiniteAuraConfig['cps'] = _0x4511a4['cps'];
    if (_0x4511a4['count']) InfiniteAuraConfig['count'] = _0x4511a4['count'];
    if (_0x4511a4['distance']) InfiniteAuraConfig['distance'] = _0x4511a4['distance'];
  }
  if (fun === 'ba_godmode') {
    Config['GODMODE'] = value;
    addCustomArrayList(fun, name, name, value);
    if (_0x4511a4['y']) GodModeConfig['y'] = _0x4511a4['y'];
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
    const _0x5a4a8f = {
      'value': value,
      'noclip': value,
      'flying': value
    };
    const _0x496b38 = {
      'value': value,
      'no_move_check': value,
      'no_fall_check': value
    };
    if (value) callModule(0x2c, JSON['stringify'](_0x496b38));
    callModule(0x1, JSON['stringify'](_0x5a4a8f));
  }
  if (fun === 'ba_find_structure') {
    const _0x159245 = getWorldData();
    const _0x15fcfa = getEntityPos(getLocalPlayerUniqueID());
    const _0x511f92 = [Math['floor'](_0x15fcfa['x']), Math['floor'](_0x15fcfa['y']), Math['floor'](_0x15fcfa['z'])];
    const _0x411c7a = {
      'type': 'form',
      'title': '结构',
      'content': '选择要传送的结构',
      'buttons': [{
        'text': '查询结构',
        'data': 'textures/ui/missing_item.png'
      }]
    };
    const _0xa3d11e = main_path + '/GBRC/BlueArchiveUI/结构列表/' + _0x159245['randomSeed'] + '.json';
    if (File['exist'](_0xa3d11e)) {
      const _0x450f7a = JSON['parse'](File['read'](_0xa3d11e));
      for (let _0x372474 = 0x0; _0x372474 < _0x450f7a['length']; _0x372474++) {
        const _0x13b105 = _0x450f7a[_0x372474];
        _0x411c7a['buttons']['push']({
          'text': '§e' + _0x13b105['name'] + '\n坐标: [' + _0x13b105['x'] + ', ' + _0x13b105['y'] + ', ' + _0x13b105['z'] + ']',
          'image': {
            'type': 'path',
            'data': 'textures/ui/hammersmashedits.png'
          }
        });
      }
    }
    addForm(JSON['stringify'](_0x411c7a), function (_0x4e6798) {
      if (_0x4e6798 >= 0x1) {
        setEntityPos(getLocalPlayerUniqueID(), datas[_0x4e6798 - 0x1]['x'], datas[_0x4e6798 - 0x1]['y'], datas[_0x4e6798 - 0x1]['z']);
        clientMessage('§b[BlueArchive]§e已传送');
      } else if (_0x4e6798 == 0x0) {
        const _0xe61b0d = {
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
            'default': _0x511f92['join'](',')
          }]
        };
        addForm(JSON['stringify'](_0xe61b0d), function (_0x3d07d2, _0x2f7779, _0x195a4a) {
          let _0x330382 = _0x3d07d2 === 0x0 ? [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9] : [_0x3d07d2];
          _0x330382['forEach'](_0x39641c => {
            const _0x5b1a89 = _0x195a4a['split'](',');
            if (!File['exist'](_0xa3d11e)) {
              File['write'](_0xa3d11e, '[]');
            }
            const _0x186978 = findStructure(Number(_0x5b1a89[0x0]), Number(_0x5b1a89[0x1]), Number(_0x5b1a89[0x2]), structureTypes[_0x39641c - 0x1]);
            if (!_0x186978['state']) {
              clientMessage('§b[BlueArchive]§c未找到');
              return;
            }
            let _0x49c49e = JSON['parse'](File['read'](_0xa3d11e));
            const _0x360424 = {
              ..._0x186978,
              'name': structureNames[_0x39641c]
            };
            _0x49c49e['push'](_0x360424);
            if (_0x2f7779 && _0x330382['length'] === 0x1) {
              setEntityPos(getLocalPlayerUniqueID(), _0x186978['x'], _0x186978['y'], _0x186978['z']);
              clientMessage('§b[BlueArchive]§e已传送');
            }
          });
        });
      }
    });
  }
  if (fun === 'ba_delete_sauth') Sauths = '';
  if (fun === 'ba_save_config') {
    const _0x2ea2fb = {
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
    addForm(JSON['stringify'](_0x2ea2fb), function (_0x5d6580, _0x2bae36) {
      File['write'](main_path + '/GBRC/BlueArchiveUI/跑路配置/' + _0x5d6580 + '.json', JSON['stringify'](record_config, null, 0x4));
      clientMessage('§b[BlueArchive]§e保存成功');
      if (_0x2bae36) record_config = {};
    });
  }
  if (fun === 'ba_account_manager' && _0x4511a4['key']['includes']('account:')) {
    let _0x840c9d = accounts[_0x4511a4['key']['replace']('account:', '')];
    Sauths = _0x840c9d['cookies'];
    if (Sauths === '') return;
    showToast('已切换至' + _0x840c9d['name'] + '，请重新登录');
  }
  if (fun === 'ba_load_config') {
    const _0x56dbeb = {
      'type': 'form',
      'title': '配置文件',
      'content': '选择要加载的配置',
      'buttons': [{
        'text': '没有配置'
      }]
    };
    const _0x1cd9f3 = File['list'](main_path + '/GBRC/BlueArchiveUI/跑路配置');
    for (let _0x25569c = 0x0; _0x25569c < _0x1cd9f3['length']; _0x25569c++) {
      _0x56dbeb['buttons'][_0x25569c] = {
        'text': _0x1cd9f3[_0x25569c]['name'],
        'image': {
          'type': 'path',
          'data': 'textures/ui/gear.png'
        }
      };
    }
    addForm(JSON['stringify'](_0x56dbeb), function (_0x24f3cb) {
      if (_0x1cd9f3['length'] > 0x0 && _0x24f3cb >= 0x0) {
        const _0x26bb31 = JSON['parse'](File['read'](_0x1cd9f3[_0x24f3cb]['path']));
        let _0x13a7c3 = 0x0;
        for (let _0x23184d in _0x26bb31) {
          const _0x4607b4 = _0x26bb31[_0x23184d];
          callModule(_0x4607b4['id'], JSON['stringify'](_0x4607b4));
          _0x13a7c3++;
        }
        clientMessage('§b[BlueArchive]§e加载成功，共' + _0x13a7c3 + '条配置');
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