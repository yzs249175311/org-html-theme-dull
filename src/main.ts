import './style.css'
import './assets/css/style.scss'

import { Dull } from "./Dull"
import layout from './layouts/layout'
import preTopBlock from './layouts/preTopBlock'
import switchTheme from './widgets/switchTheme'
import control from './events/control'
import copyToClip from './events/copyToClip'
import hideTitle from './events/hideTitle'
import { scrollWithTocInit } from './events/scrollWithToc'

let dull = new Dull ({
	layouts:[layout,preTopBlock],
	widgets:[switchTheme],
	events:[
		control.navEvent,
		copyToClip,
		hideTitle,
		scrollWithTocInit,
	]
})

dull.start()
