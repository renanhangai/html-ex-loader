const cheerio = require( "cheerio" );
const loaderUtils = require( "loader-utils" );

module.exports = function( source, map ) {
	const loader  = this;
	const options = loaderUtils.getOptions(this);
	
	const callback = this.async();
	Promise.resolve()
		.then(function() {
			const $ = cheerio.load( source );
			if ( options.transform )
				return Promise.resolve( options.transform( $ ) );
		})
		.then( ( content ) => {
			callback( null, content || "" );
		}, ( err ) => {
			callback( err );
		});
}