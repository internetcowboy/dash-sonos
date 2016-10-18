# Amazon Dash - SONOS track skip


Before running this app, you need to obtain your dash's MAC address. ( used this library https://github.com/jishi/node-sonos-http-api )

```
$ npm install

$ cd node_modules/node-dash-button

$ sudo node bin/findbutton

```
	
```
Possible dash hardware address detected: b8:e8:56:03:4b:b6 Manufacturer: Apple Protocol: arp
```

## 1.) Once we have the device address. Plugin it into `findbutton.js`. Now, run the code.

`
	sudo node findbutton.js 
`

## 2.) Start the SONOS server ( https://github.com/girliemac/dash-rickroll/blob/8f0396c7fec871427fe016a2dd5787f07b1402cc/README.md )

`cd /node-sonos-http-api`		
`npm start`