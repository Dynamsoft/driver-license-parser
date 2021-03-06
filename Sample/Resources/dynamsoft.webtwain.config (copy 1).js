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
Dynamsoft.WebTwainEnv.ProductKey = 'F98099FDBDEE6BB26BCCBF143BAB000013B09DD0396F176D9A13E2DB679592D8DDC11AFD7641B7215134792246316AE7F27971B5E6714DAEFFFA096397A261D8BE04C435E70E546B452D5AF214E3DA2C1F2C825611C8AE39C7DF1488D83910DDAD99D8B31460AA54D1E236509CE4D58609AE5A938824BCF9CB7B3819102A94AD05E21716E2FCFA749343BCCEFF94FCFFAA4FABC2553C6B6EC6327DB6265BB186BE8F7AE29A4E086D6391FEC26725AE;t00946QAAADNlz2EcE/FGBIzR+QZ0HEMzUF2jlJcjvdy6Kb5o66w8pD1kO1dojqo7qoDXjqsSETPkxU1HeDnAePafoVg6v3ON4N+0SZZGn+PC2DTeXiNuWjOpVLsBZgYupw==';
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

