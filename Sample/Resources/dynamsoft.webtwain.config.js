//
// Dynamsoft JavaScript Library for Basic Initiation of Dynamic Web TWAIN
// More info on DWT: http://www.dynamsoft.com/Products/WebTWAIN_Overview.aspx
//
// Copyright 2017, Dynamsoft Corporation 
// Author: Dynamsoft Team
// Version: 13.0
//
/// <reference path="dynamsoft.webtwain.initiate.js" />
var Dynamsoft = Dynamsoft || { WebTwainEnv: {} };

Dynamsoft.WebTwainEnv.AutoLoad = true;
///
Dynamsoft.WebTwainEnv.Containers = [{ContainerId:'dwtcontrolContainer', Width:270, Height:350}];
///
Dynamsoft.WebTwainEnv.ProductKey = 'DA3B18916A5AC88A6BFC81A64DC7BDC13DD57CDC909A9A6A3C299E3EB04E1ECDEA6E910955C08A4C3F8D56022ECC21EA485089A0C72254C1C3636B88B3014D9C528E9F4A72571ED94175C6CEA0A3027CE1B61D2F3B2B8D58600E8059EA2B3DAAC58EAD3AF5487472292605C807730EC29E45D4EDD639D6988F9D4A5C07FA4DDB47AC0356FFAAEFF5D53AB01B629252105727A8E00339B1454720274D20979696B0227A0B17F6E5D5F903D896262F;t00926QAAAC715QzoPt1xn6KRcGZs5qRASbG4NwkbTtcix1yOxAoHcjn2EV2BkPWb+g/HdPsILsIlkChMUaZY+irv5mlF6/KN4d8cg0xNeY4T48MoXmMySngx3mqELpM=';
///
Dynamsoft.WebTwainEnv.Trial = true;
///
Dynamsoft.WebTwainEnv.ActiveXInstallWithCAB = false;


(function(){
    var p = document.location.protocol;
    if (p !== 'https:' && p !== 'http:')
		Dynamsoft.WebTwainEnv.ResourcesPath = 'https://www.dynamsoft.com/Demo/DWT/Resources';
})();


/// All callbacks are defined in the dynamsoft.webtwain.install.js file, you can customize them.

// Dynamsoft.WebTwainEnv.RegisterEvent('OnWebTwainReady', function(){
// 		// webtwain has been inited
// });

