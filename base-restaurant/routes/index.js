// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {
	const data = {
		greeting : "Welcome to my Restaurant",
		description : "this is a great place for a business meeting or to bring a date!"
	}
	res.render('index', data)
})

/*  This route render json data */



module.exports = router
