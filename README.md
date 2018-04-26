html-ex-loader
====================================

Allows html processing and transform

```js

// rules
{
	test: /\.html$/,
	loader: "html-ex-loader",
	options: {
		transform: function( loader, $ ) {
			$( "body" ).append( "<div>Oi</div>" );
			loader.emitFile( "index.html", $.html() );
			return `module.exports = {}`;
		},
	},
}
```