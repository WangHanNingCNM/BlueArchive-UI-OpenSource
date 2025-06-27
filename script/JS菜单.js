/*
 * 有一分光，便发一分热。
 * Deobfuscated by: Sartre
 * TaskID: 9a3f7e2c | Version: 16.9
 * 只要做了哪怕再少，就永远比只会敲键盘的，精致的利己主义者强千倍万倍。
 * Timestamp: Thu Jun 27 21:50:46 2025
 */
 
const main_path = getResource();
const definition = JSON['parse'](File['read'](main_path + '/ui/ui_definition.json'));
if (definition['name'] != 'BlueArchiveUI' || definition['ui']['length'] != 0x28) {
  clientMessage('§b[BlueArchive]§e请使用BlueArchive UI');
  //exit();
}
regFun('ba_script_menu');
if (getData('isFirst', '') === '') {
  setData('isFirst', '是');
  setData('scriptMenu', JSON['stringify']({
    'last': '没有记录',
    'history': [],
    'sort': 0x1,
    'loadMode': 0x1,
    'frequency': 0x1,
    'delay': 0x0
  }));
}
var scriptList = File['list'](getResource('script'));
var Config = JSON['parse'](getData('scriptMenu', '{}'));
if (Config['sort'] === 0x1) scriptList['sort']((_0x1265b9, _0x589b2a) => _0x1265b9['name']['localeCompare'](_0x589b2a['name']));
if (Config['sort'] === 0x2) scriptList['sort']((_0x262b80, _0x2fcc8c) => _0x262b80['length'] - _0x2fcc8c['length']);
if (Config['sort'] === 0x3) scriptList['sort']((_0x5f28fb, _0x3b8247) => _0x3b8247['name']['localeCompare'](_0x5f28fb['name']));
if (Config['sort'] === 0x4) scriptList['sort']((_0x59a3b3, _0x3453b2) => _0x3453b2['length'] - _0x59a3b3['length']);
var items = [{
  'type': 'TextView',
  'name': '退出',
  'color': '#DC143C',
  'size': 0xb,
  'padding': [0x5, 0x4, 0x5, 0x4],
  'key': 'ba_script_exit'
}, {
  'type': 'TextView',
  'name': '设置',
  'color': '$menu_item_color',
  'size': 0xb,
  'padding': [0x5, 0x4, 0x5, 0x4],
  'key': 'ba_script_settings'
}, {
  'type': 'TextView',
  'name': '历史记录',
  'color': '$menu_item_color',
  'size': 0xb,
  'padding': [0x5, 0x4, 0x5, 0x4],
  'key': 'ba_script_history'
}, {
  'type': 'TextView',
  'name': '上次加载的脚本:\n' + Config['last'],
  'color': '$menu_item_color',
  'size': 0xb,
  'padding': [0x5, 0x4, 0x5, 0x4],
  'key': 'ba_last_script'
}];
scriptList['forEach'](_0x15a7d9 => {
  if (!_0x15a7d9['name']['endsWith']('.js') && !_0x15a7d9['name']['endsWith']('.bin') && !_0x15a7d9['name']['endsWith']('.gbrc')) return;
  items['push']({
    'type': 'TextView',
    'name': _0x15a7d9['name']['replace']('.js', '')['replace']('.bin', '')['replace']('.gbrc', ''),
    'color': '$menu_item_child_color',
    'size': 0xb,
    'padding': [0x8, 0x4, 0x8, 0x4],
    'key': 'script:' + _0x15a7d9['name']
  });
});
const createUI = (_0x4b6e7e, _0x39db40, _0x118c8d) => loadMenu(_0x4b6e7e, JSON['stringify']({
  'type': 'Menu',
  'title': {
    'name': '『' + _0x39db40 + '』',
    'size': 0xc,
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
    'name': '脚本菜单',
    'color': '$menu_item_color',
    'size': 0xd,
    'padding': [0x5, 0x5, 0x5, 0x5],
    'tag': 'ba_script_menu',
    'items': _0x118c8d
  }]
}));
const load = (_0x151a6f, _0x19251f) => {
  if (_0x19251f < 0x1) _0x19251f = 0x1;
  if (_0x19251f > 0x3) _0x19251f = 0x3;
  thread(() => {
    var _0x73d452 = false;
    for (let _0x4b2772 = 0x0; _0x4b2772 < Config['frequency']; _0x4b2772++) {
      if (_0x151a6f['endsWith']('.bin') || _0x151a6f['endsWith']('.gbrc')) _0x73d452 = loadSnapshot(File['readBinary'](getResource('script') + '/' + _0x151a6f));else {
        if (_0x19251f === 0x1) _0x73d452 = loadScript(_0x151a6f);
        if (_0x19251f === 0x2) _0x73d452 = eval(getResource('script') + '/' + _0x151a6f);
      }
    }
    Config['last'] = _0x151a6f;
    let _0x2e12ff = Config['history']['findIndex'](_0x4b3672 => _0x4b3672['name'] === _0x151a6f);
    showToast('加载' + _0x151a6f + (_0x73d452 ? '成功' : '失败'));
    if (_0x73d452 && (Config['history']['length'] === 0x0 || _0x2e12ff === -0x1)) Config['history']['push']({
      'name': _0x151a6f,
      'count': 0x1
    });
    if (_0x2e12ff > -0x1) Config['history'][_0x2e12ff]['count']++;
  }, Config['delay']);
};
function onCallModuleEvent(_0x4d1bb6) {
  if (_0x4d1bb6['fun'] !== 'ba_script_menu') return;
  if (_0x4d1bb6['key']) {
    let _0x1a547e = _0x4d1bb6['key'];
    if (_0x1a547e['includes']('script:')) load(_0x1a547e['replace']('script:', ''), Config['loadMode']);
    if (_0x1a547e === 'ba_last_script') load(Config['last'], Config['loadMode']);
    if (_0x1a547e === 'ba_history_exit') setTimeout(() => {
      hideMenu('History');
      removeMenu('History');
    }, 0x32);
    if (_0x1a547e === 'ba_settings_exit') setTimeout(() => {
      hideMenu('UISettings');
      removeMenu('UISettings');
    }, 0x32);
    if (_0x1a547e === 'ba_script_exit') {
      setTimeout(() => {
        hideMenu('UISettings');
        hideMenu('ScriptList');
        hideMenu('History');
      }, 0x64);
      setTimeout(() => {
        removeMenu('UISettings');
        removeMenu('ScriptList');
        removeMenu('History');
      }, 0x12c);
      setTimeout(() => exit(), 0x1f4);
      showToast('已退出脚本菜单');
    }
    if (_0x1a547e === 'ba_script_history') {
      if (Config['history']['length'] === 0x0) return;
      let _0x3078c3 = [{
        'type': 'TextView',
        'name': '关闭',
        'color': '#DC143C',
        'size': 0xa,
        'padding': [0x5, 0x4, 0x5, 0x4],
        'key': 'ba_history_exit'
      }];
      Config['history']['toSorted']((_0x47dd0a, _0x3472ab) => _0x47dd0a['count'] - _0x3472ab['count'])['forEach'](_0x2e2f8d => {
        _0x3078c3['push']({
          'type': 'TextView',
          'name': _0x2e2f8d['name'] + '\n加载次数:' + _0x2e2f8d['count'] + '次',
          'color': '$menu_item_child_color',
          'size': 0xb,
          'padding': [0x8, 0x4, 0x8, 0x4],
          'key': 'script:' + _0x2e2f8d['name']
        });
      });
      createUI('History', '历史记录', _0x3078c3);
    }
    if (_0x1a547e === 'ba_script_settings') createUI('UISettings', '脚本设置', [{
      'type': 'TextView',
      'name': '关闭',
      'color': '#DC143C',
      'size': 0xb,
      'padding': [0x5, 0x4, 0x5, 0x4],
      'key': 'ba_settings_exit'
    }, {
      'type': 'SeekBar',
      'key': 'ba_script_frequency',
      'format': '加载次数: %d次',
      'color': '$menu_item_color',
      'size': 0xb,
      'padding': [0x5, 0x5, 0x5, 0x5],
      'value': Config['frequency'],
      'min': 0x1,
      'max': 0xa
    }, {
      'type': 'SeekBar',
      'key': 'ba_script_delay',
      'format': '加载延迟: %dTick',
      'color': '$menu_item_color',
      'size': 0xb,
      'padding': [0x5, 0x5, 0x5, 0x5],
      'value': Config['delay'],
      'min': 0x0,
      'max': 0x64
    }, {
      'type': 'RadioGroup',
      'name': '分类模式',
      'color': '$menu_item_color',
      'size': 0xb,
      'padding': [0xa, 0x5, 0xa, 0x5],
      'key': 'ba_script_sort',
      'items': [{
        'key': 'Name',
        'name': '首字母',
        'color': '$menu_item_child_color',
        'size': 0x8
      }, {
        'key': 'Size',
        'name': '文件大小',
        'color': '$menu_item_child_color',
        'size': 0x8
      }, {
        'key': 'R-Name',
        'name': '首字母逆向',
        'color': '$menu_item_child_color',
        'size': 0x8
      }, {
        'key': 'R-Size',
        'name': '文件大小逆向',
        'color': '$menu_item_child_color',
        'size': 0x8
      }]
    }, {
      'type': 'RadioGroup',
      'name': '加载模式',
      'color': '$menu_item_color',
      'size': 0xb,
      'padding': [0xa, 0x5, 0xa, 0x5],
      'key': 'ba_script_loadMode',
      'items': [{
        'key': 'loadScript',
        'name': '加载',
        'color': '$menu_item_child_color',
        'size': 0x8
      }, {
        'key': 'eval',
        'name': '执行',
        'color': '$menu_item_child_color',
        'size': 0x8
      }]
    }]);
  }
  for (let _0x4ac623 in _0x4d1bb6) {
    if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x4ac623)) continue;
    let _0x53c542 = _0x4ac623;
    let _0x45d707 = _0x4d1bb6[_0x4ac623];
    if (_0x53c542 === 'ba_script_delay') Config['delay'] = _0x45d707;
    if (_0x53c542 === 'ba_script_frequency') Config['frequency'] = _0x45d707;
    if (_0x53c542 === 'ba_script_sort') Config['sort'] = _0x4d1bb6['index'];
    if (_0x53c542 === 'ba_script_loadMode') Config['loadMode'] = _0x4d1bb6['index'];
    setData('scriptMenu', JSON['stringify'](Config));
  }
}
thread(() => createUI('ScriptList', '脚本菜单', items), 0xfa);
removeMenu('UISettings');
removeMenu('ScriptList');
removeMenu('History');