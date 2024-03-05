# websocket nodejs, express

# minimum requrements:

	+ CentOS Linux release 7.9.2009 (Core)
	+ express version: 4.18.3
	+ {
	  websocket: '1.0.0',
	  npm: '8.19.4',
	  node: '16.20.2',
	  v8: '9.4.146.26-node.26',
	  uv: '1.44.2',
	  zlib: '1.2.11',
	  brotli: '1.0.9',
	  ares: '1.19.1',
	  modules: '93',
	  nghttp2: '1.57.0',
	  napi: '8',
	  llhttp: '6.0.11',
	  openssl: '1.1.1k',
	  cldr: '41.0',
	  icu: '71.1',
	  tz: '2022f',
	  unicode: '14.0'
	}
 
# install:
  + install nodejs centos 7, ref keyword: install nodejs centos 7
  + npm init
  + npm install --save express
  + npm install --save ws
  + if error solution error message: "npm install hangs on 'sill idealTree buildDeps'"
  + ref: https://bobbyhadz.com/blog/npm-install-sill-idealtree-builddeps
  + firewall-cmd --add-port=8000/tcp --permanent
  + firewall-cmd --add-port=443/tcp --permanent
  + firewall-cmd --reload
  + firewall-cmd --list-all

# ref
ref: https://www.pubnub.com/blog/nodejs-websocket-programming-examples/
