const main_path = getResource();
const definition = JSON['parse'](File['read'](main_path + '/ui/ui_definition.json'));
if (definition['name'] != 'BlueArchiveUI' || definition['ui']['length'] != 0x1f) {
  clientMessage('§b[BlueArchive]§e请使用BlueArchive UI');
  exit();
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
if (Config['sort'] === 0x1) scriptList['sort']((_0x3a84c4, _0x23fe33) => _0x3a84c4['name']['localeCompare'](_0x23fe33['name']));
if (Config['sort'] === 0x2) scriptList['sort']((_0x2be237, _0x4cfe22) => _0x2be237['length'] - _0x4cfe22['length']);
if (Config['sort'] === 0x3) scriptList['sort']((_0x421706, _0x377919) => _0x377919['name']['localeCompare'](_0x421706['name']));
if (Config['sort'] === 0x4) scriptList['sort']((_0x40a4d6, _0xe421ef) => _0xe421ef['length'] - _0x40a4d6['length']);
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
  'name': '上次加载的脚本',
  'color': '$menu_item_color',
  'size': 0xb,
  'padding': [0x5, 0x4, 0x5, 0x4],
  'key': 'ba_last_script'
}];
scriptList['forEach'](_0x5e17f7 => {
  if (!_0x5e17f7['name']['endsWith']('.js') && !_0x5e17f7['name']['endsWith']('.bin') && !_0x5e17f7['name']['endsWith']('.gbrc')) return;
  items['push']({
    'type': 'TextView',
    'name': _0x5e17f7['name']['replace']('.js', '')['replace']('.bin', '')['replace']('.gbrc', ''),
    'color': '$menu_item_child_color',
    'size': 0xb,
    'padding': [0x8, 0x4, 0x8, 0x4],
    'key': 'script:' + _0x5e17f7['name']
  });
});
const createUI = (_0x24f2ec, _0x5837a8, _0xf53faa) => loadMenu(_0x24f2ec, JSON['stringify']({
  'type': 'Menu',
  'title': {
    'name': '『' + _0x5837a8 + '』',
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
    'items': _0xf53faa
  }]
}));
const load = (_0x4c7f80, _0x1c7860) => {
  if (_0x1c7860 < 0x1) _0x1c7860 = 0x1;
  if (_0x1c7860 > 0x3) _0x1c7860 = 0x3;
  thread(() => {
    var _0x1f9b0a = false;
    for (let _0x284926 = 0x0; _0x284926 < Config['frequency']; _0x284926++) {
      if (_0x4c7f80['endsWith']('.bin') || _0x4c7f80['endsWith']('.gbrc')) _0x1f9b0a = loadSnapshot(File['readBinary'](getResource('script') + '/' + _0x4c7f80));else {
        if (_0x1c7860 === 0x1) _0x1f9b0a = loadScript(_0x4c7f80);
        if (_0x1c7860 === 0x2) _0x1f9b0a = eval(getResource('script') + '/' + _0x4c7f80);
      }
    }
    Config['last'] = _0x4c7f80;
    let _0x5a419d = Config['history']['findIndex'](_0x212698 => _0x212698['name'] === _0x4c7f80);
    showToast('加载' + _0x4c7f80 + (_0x1f9b0a ? '成功' : '失败'));
    if (_0x1f9b0a && (Config['history']['length'] === 0x0 || _0x5a419d === -0x1)) Config['history']['push']({
      'name': _0x4c7f80,
      'count': 0x1
    });
    if (_0x5a419d > -0x1) Config['history'][_0x5a419d]['count']++;
  }, Config['delay']);
};
function onCallModuleEvent(_0x345bfb) {
  if (_0x345bfb['fun'] !== 'ba_script_menu') return;
  if (_0x345bfb['key']) {
    let _0x5b554b = _0x345bfb['key'];
    if (_0x5b554b['includes']('script:')) load(_0x5b554b['replace']('script:', ''), Config['loadMode']);
    if (_0x5b554b === 'ba_last_script') load(Config['last'], Config['loadMode']);
    if (_0x5b554b === 'ba_history_exit') setTimeout(() => {
      hideMenu('History');
      removeMenu('History');
    }, 0x32);
    if (_0x5b554b === 'ba_settings_exit') setTimeout(() => {
      hideMenu('UISettings');
      removeMenu('UISettings');
    }, 0x32);
    if (_0x5b554b === 'ba_script_exit') {
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
    if (_0x5b554b === 'ba_script_history') {
      if (Config['history']['length'] === 0x0) return;
      let _0x229f4a = [{
        'type': 'TextView',
        'name': '关闭',
        'color': '#DC143C',
        'size': 0xa,
        'padding': [0x5, 0x4, 0x5, 0x4],
        'key': 'ba_history_exit'
      }];
      Config['history']['toSorted']((_0x16f5bb, _0x57ab6c) => _0x16f5bb['count'] - _0x57ab6c['count'])['forEach'](_0x577c03 => {
        _0x229f4a['push']({
          'type': 'TextView',
          'name': _0x577c03['name'] + '\n加载次数:' + _0x577c03['count'] + '次',
          'color': '$menu_item_child_color',
          'size': 0xb,
          'padding': [0x8, 0x4, 0x8, 0x4],
          'key': 'script:' + _0x577c03['name']
        });
      });
      createUI('History', '历史记录', _0x229f4a);
    }
    if (_0x5b554b === 'ba_script_settings') createUI('UISettings', '脚本设置', [{
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
  for (let _0x41a56c in _0x345bfb) {
    if (['value', 'fun', 'name', 'index', 'shortcut']['includes'](_0x41a56c)) continue;
    let _0x49919c = _0x41a56c;
    let _0x30b4bc = _0x345bfb[_0x41a56c];
    if (_0x49919c === 'ba_script_delay') Config['delay'] = _0x30b4bc;
    if (_0x49919c === 'ba_script_frequency') Config['frequency'] = _0x30b4bc;
    if (_0x49919c === 'ba_script_sort') Config['sort'] = _0x345bfb['index'];
    if (_0x49919c === 'ba_script_loadMode') Config['loadMode'] = _0x345bfb['index'];
    setData('scriptMenu', JSON['stringify'](Config));
  }
}
thread(() => createUI('ScriptList', '脚本菜单', items), 0xfa);
removeMenu('UISettings');
removeMenu('ScriptList');
removeMenu('History');