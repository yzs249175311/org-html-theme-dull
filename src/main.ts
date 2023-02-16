import './style.css'
import './assets/css/style.scss'

import { Dull } from "./Dull"
import layout from './layouts/layout'
import control from './events/control'
import copyToClip from './events/copyToClip'
import hideTitle from './events/hideTitle'

let dull = new Dull ({
	layouts:[layout],
	events:[
		control.navEvent,
		copyToClip,
		hideTitle
	]
})

dull.start()
