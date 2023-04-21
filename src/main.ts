import './style.css'
import './assets/css/style.scss'

import { Dull } from "./Dull"
import splitOutline from './layouts/splitOutline'
import preTopBlock from './layouts/preTopBlock'
import footNotes from './layouts/footNotes'
import controlInit from './events/control'
import copyToClip from './events/copyToClip'
import hideTitle from './events/hideTitle'
import scrollWithTocInit from './events/scrollWithToc'
import footNoteEvent from './events/footNoteEvent'
import switchTheme from './widgets/switchTheme/switchTheme'
import globalSearchInit from './widgets/globalSearch/globalSearch'
import showTitleInToc from './widgets/showTitle/showTitleInToc'
import showTitleLink from './widgets/showTitle/showTitleLink'
import showFootRef from './widgets/showTitle/showFootRef'
import resizeTOC from './widgets/resizeTOC/resizeTOC'


let dull = new Dull({
	layouts: [splitOutline, preTopBlock, footNotes],
	widgets: [switchTheme, globalSearchInit, showTitleInToc, showTitleLink, resizeTOC, showFootRef],
	events: [
		controlInit,
		copyToClip,
		hideTitle,
		scrollWithTocInit,
		footNoteEvent,
	]
})

dull.start()
