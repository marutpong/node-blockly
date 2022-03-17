import Blockly from './files/blockly'
import blocks from './files/blocks'
import messages from './files/msg/messages'
import themes from './files/themes/test_theme'

blocks(Blockly);
messages(Blockly)
themes(Blockly)

Blockly.setLocale = function (locale) {
    if (typeof locale.default === 'function') {
        Blockly.Msg = Object.assign(Blockly.Msg, locale.default())
    } else {
        Blockly.Msg = Object.assign(locale, Blockly.Msg)()
    }
}
Blockly.setLocale(require('./lib/i18n/en'))

export default Blockly;