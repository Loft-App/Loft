//imports all components from their files
import Mention from './MessageBar/at'
import Poll from './MessageBar/bar-chart-line-fill'
import Emoji from './MessageBar/emoji-laughing'
import Attach from './MessageBar/paperclip'
import Send from './MessageBar/send-fill'
import Bold from './MessageBar/type-bold'
import Italic from './MessageBar/type-italic'
import Strikethrough from './MessageBar/type-strikethrough'
import Underline from './MessageBar/type-underline'

//exports them as the same name to be reused elsewhere, but all can be imported with one file
export { Mention as Mention }
export { Poll as Poll }
export { Emoji as Emoji }
export { Attach as Attach }
export { Send as Send }
export { Bold as Bold }
export { Italic as Italic }
export { Strikethrough as Strikethrough }
export { Underline as Underline }
