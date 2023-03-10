import './style.css'
import './assets/css/style.scss'

import { Dull } from "./Dull"
import splitOutline from './layouts/splitOutline'
import preTopBlock from './layouts/preTopBlock'
import controlInit from './events/control'
import copyToClip from './events/copyToClip'
import hideTitle from './events/hideTitle'
import scrollWithTocInit  from './events/scrollWithToc'
import switchTheme from './widgets/switchTheme/switchTheme'
import globalSearchInit from './widgets/globalSearch/globalSearch'


let dull = new Dull ({
	layouts:[splitOutline,preTopBlock],
	widgets:[switchTheme,globalSearchInit],
	events:[
		controlInit,
		copyToClip,
		hideTitle,
		scrollWithTocInit,
	]
})

dull.start()
