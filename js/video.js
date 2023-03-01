// 2. This code loads the IFrame Player API code asynchronously.
// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// document.body.insertBefore(tag, document.getElementById('beforeSoHeavy'));
	// здесь див куда вставляется поеер, див id playerSoHeavy
	

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var SoHeavy;
var Darkside;
var _4AM;
var Violence;
var MyNameIsDark;
var deleteForever;
var newGods;
var missMe;
var fever;
var idoru;

function onYouTubeIframeAPIReady() {

    SoHeavy = new YT.Player('playerSoHeavy', {
		height: '600',
		width: '1200',
		videoId: 'iH0kfH04U68',
		playerVars: { 'playsinline': 1 },
		events: {
			'onReady': onPlayerReadyHeavy,
			'onStateChange': onPlayerStateChange
		}
    });

    Darkside = new YT.Player('playerDarkside', {
        height: '500',
        width: '500',
        videoId: 'hbuFn2Mp7go',
        playerVars: { 'playsinline': 1 },
        events: {
		  'onReady': onPlayerReadyDarkside,
          'onStateChange': onPlayerStateChange
        }
    });

    _4AM = new YT.Player('player_4AM', {
        height: '1000',
        width: '2000',
        videoId: 'Q4ZdkEiYvK0',
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReady4,
          'onStateChange': onPlayerStateChange
        }
    });

    Violence = new YT.Player('playerViolence', {
        height: '1921',
        width: '3842',
        videoId: 'M9SGYBHY0qs',
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReadyViolence,
          'onStateChange': onPlayerStateChange
        }
    });

    MyNameIsDark = new YT.Player('playerMyNameIsDark', {
        height: '500',
        width: '500',
        videoId: 'CZe7cbC2Jp8',
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReadyDark,
          'onStateChange': onPlayerStateChange
        }
    });

    deleteForever = new YT.Player('playerDF', {
        height: '1921',
        width: '3842',
        videoId: 'gvzC8MmC850',
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReadyDF,
          'onStateChange': onPlayerStateChange
        }
    });

    newGods = new YT.Player('playerNG', {
        height: '500',
        width: '500',
        videoId: 'JMNnAAmCbcg',
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReadyNG,
          'onStateChange': onPlayerStateChange
        }
    });

    missMe = new YT.Player('playerMissMe', {
        height: '500',
        width: '500',
        videoId: 'AjLunSai7Z0',
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReadyMiss,
          'onStateChange': onPlayerStateChange
        }
    });

    fever = new YT.Player('playerFever', {
        height: '500',
        width: '500',
        videoId: 'DZbyt15HuKM',
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReadyFever,
          'onStateChange': onPlayerStateChange
        }
    });

    idoru = new YT.Player('playerIdoru', {
        height: '1921',
        width: '3842',
        videoId: 'oCrhTU9HkVQ',
        playerVars: { 'playsinline': 1 },
        events: {
          'onReady': onPlayerReadyIdoru,
          'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.

function onPlayerReady(event) {
        event.target.playVideo();
}
function onPlayerReadyHeavy(event) {
    if($('soHeavyYT').style.display=='block'){
        event.target.playVideo();
    }
}
function onPlayerReadyDarkside(event) {
    if($('darksideYT').style.display=='block'){
        event.target.playVideo();
    }
}
function onPlayerReady4(event) {
    if($('_4AMYT').style.display=='block'){
        event.target.playVideo();
    }
}
function onPlayerReadyViolence(event) {
    if($('violenceYT').style.display=='block'){
        event.target.playVideo();
    }
}
function onPlayerReadyDark(event) {
    if($('myNameIsDarkYT').style.display=='block'){
        event.target.playVideo();
    }
}
function onPlayerReadyDF(event) {
    if($('dFYT').style.display=='block'){
        event.target.playVideo();
    }
}
function onPlayerReadyNG(event) {
    if($('ngYT').style.display=='block'){
        event.target.playVideo();
    }
}
function onPlayerReadyMiss(event) {
    if($('missMeYT').style.display=='block'){
        event.target.playVideo();
    }
}
function onPlayerReadyFever(event) {
    if($('feverYT').style.display=='block'){
        event.target.playVideo();
    }
}
function onPlayerReadyIdoru(event) {
    if($('idoruYT').style.display=='block'){
        event.target.playVideo();
    }
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.



function onPlayerStateChange(event) {
   
    // event.target.stopVideo();
}


function soHeavyStopVideo() {
    SoHeavy.stopVideo();
}
function darksideStopVideo() {
    Darkside.stopVideo();
}
function _4AMStopVideo() {
    _4AM.stopVideo();
}
function violenceStopVideo() {
    Violence.stopVideo();
}
function myNameIsDarkStopVideo() {
    MyNameIsDark.stopVideo();
}
function dFStopVideo() {
    deleteForever.stopVideo();
}
function ngStopVideo() {
    newGods.stopVideo();
}
function missMeStopVideo() {
    missMe.stopVideo();
}
function feverStopVideo() {
    fever.stopVideo();
}
function idoruStopVideo() {
    idoru.stopVideo();
}





function closeSoHeavy(){
    SoHeavy.stopVideo();
    $('soHeavyYT').style.display='none';
	$('playerSoHeavy').style.display='none';

    if($('s1').classList.contains('songSelect')){
        $('s1').classList.remove('songSelect');
    }
}
function closeDarkside(){
    Darkside.stopVideo();
    $('darksideYT').style.display='none';
    $('playerDarkside').style.display='none';

    if($('s2').classList.contains('songSelect')){
        $('s2').classList.remove('songSelect');
    }
}
function close_4AM(){
    _4AM.stopVideo();
    $('_4AMYT').style.display='none';
	$('player_4AM').style.display='none';
    if($('s5').classList.contains('songSelect')){
        $('s5').classList.remove('songSelect');
    }
}
function closeViolence(){
    $('ui').style.opacity=1;
    $('violenceControl').style.display='none';
    
    Violence.stopVideo();
    $('violenceYT').style.display='none';
    $('playerViolence').style.display='none';

    if($('s4').classList.contains('songSelect')){
        $('s4').classList.remove('songSelect');
    }
}
function closeMyNameIsDark(){
    MyNameIsDark.stopVideo();
    $('myNameIsDarkYT').style.display='none';
    $('playerMyNameIsDark').style.display='none';

    if($('s7').classList.contains('songSelect')){
        $('s7').classList.remove('songSelect');
    }
}
function closeDF() {
    $('ui').style.opacity=1;
    $('dfControl').style.display='none';

    deleteForever.stopVideo();
    $('dFYT').style.display='none';
    if($('s3').classList.contains('songSelect')){
        $('s3').classList.remove('songSelect');
    }
}
function closeNG() {
    newGods.stopVideo();
    $('ngYT').style.display='none';
    $('beforeNG').style.display='none';

    if($('s6').classList.contains('songSelect')){
        $('s6').classList.remove('songSelect');
    }
}
function closeMissMe() {
    missMe.stopVideo();
    $('missMeYT').style.display='none';
    $('beforeMM').style.display='none';

    if($('s8').classList.contains('songSelect')){
        $('s8').classList.remove('songSelect');
    }
}
function closeFever() {
    fever.stopVideo();
    $('feverYT').style.display='none';
    $('beforeFever').style.display='none';

    if($('s9').classList.contains('songSelect')){
        $('s9').classList.remove('songSelect');
    }
}
function closeIdoru() {
    $('idoruControl').style.display='none';
    $('ui').style.opacity=1;
    if($('s10').classList.contains('songSelect')){
        $('s10').classList.remove('songSelect');
    }
    idoru.stopVideo();
    $('idoruYT').style.display='none';
}
