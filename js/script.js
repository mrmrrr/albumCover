var $ = function( id ) { return document.getElementById( id ); };

var tHud;

if(window.matchMedia("(max-width: 1024px)").matches){
    gsap.set('svg',{rotate:90,scale:2,y:735});
}

gsap.ticker.fps(60);

gsap.fromTo('#abc1, #abc2',2,{opacity:0},{opacity:1,ease:RoughEase.ease.config({points:between(50,150), strength:between(1,4), clamp:true}),delay:1});

$('wirePanels').style.display='none';

$('ui').style.display='block';

$('buttonsPlug').style.display='none';

function wirePanelsAnimation(){
    
    $('hud_start').addEventListener("timeupdate", tick);
    function tick(){
        if( $('hud_start').currentTime > 4 ) {
            tHud=$('hud_start').currentTime;
            $('hud_start').pause();
            $('hud_start').removeEventListener('timeupdate',tick)
        }
    };
    
    $('ui').style.display='block';

    $('buttonsPlug').style.display='block';
    setInterval(elementsBack,10);

    gsap.set('.buttonsPlugFill',
        {scaleX:0,scaleY:0,transformOrigin:'center center'});
    gsap.to('.buttonsPlugFill',0.7,
        {scale:1,stagger:{amount:0.7,grid:[10,10],from:'center'}});

    $('wirePanels').style.display='block';

    var wireArray = document.getElementsByClassName('wirePanel');
    var wireArrayLen = wireArray.length;

    for(i=0;i<wireArrayLen;i++){

        gsap.set(wireArray[i],{strokeDasharray:wireArray[i].getTotalLength()});

        gsap.fromTo(wireArray[i],2,  
            {strokeDashoffset:wireArray[i].getTotalLength()},
            {
                strokeDashoffset:0,
                ease: CustomEase.create("custom", "M0,0 C0,0 0.06465,0.0015 0.10319,0.00775 0.13897,0.01354 0.16262,0.0193 0.1962,0.0318 0.22798,0.04362 0.24904,0.05426 0.27744,0.07259 0.30448,0.09004 0.32165,0.1044 0.34439,0.12743 0.3688,0.15216 0.38341,0.17038 0.40284,0.19961 0.42577,0.23412 0.44068,0.25681 0.45607,0.29548 0.51611,0.44626 0.53929,0.54706 0.60117,0.69773 0.6265,0.75938 0.64922,0.79783 0.68449,0.85161 0.70193,0.87822 0.71906,0.89443 0.74355,0.91488 0.76847,0.93569 0.7883,0.94873 0.8175,0.96268 0.84689,0.97673 0.8694,0.98383 0.90169,0.99044 0.93767,0.99779 1,1 1,1 ")
                
            }
        );
    }

    for(i=0;i<wireArrayLen;i++){

        gsap.set(wireArray[i],{strokeDasharray:wireArray[i].getTotalLength()});

        gsap.fromTo(wireArray[i],1.5,  
            {strokeDashoffset:0},
            {
                strokeDashoffset:wireArray[i].getTotalLength(),
                ease: CustomEase.create("custom", "M0,0 C0,0 0.06465,0.0015 0.10319,0.00775 0.13897,0.01354 0.16262,0.0193 0.1962,0.0318 0.22798,0.04362 0.24904,0.05426 0.27744,0.07259 0.30448,0.09004 0.32165,0.1044 0.34439,0.12743 0.3688,0.15216 0.38341,0.17038 0.40284,0.19961 0.42577,0.23412 0.44068,0.25681 0.45607,0.29548 0.51611,0.44626 0.53929,0.54706 0.60117,0.69773 0.6265,0.75938 0.64922,0.79783 0.68449,0.85161 0.70193,0.87822 0.71906,0.89443 0.74355,0.91488 0.76847,0.93569 0.7883,0.94873 0.8175,0.96268 0.84689,0.97673 0.8694,0.98383 0.90169,0.99044 0.93767,0.99779 1,1 1,1 "),
                delay:3
            }
        );
    }
    gsap.to('#abc1, #abc2',8,{opacity:0,ease:RoughEase.ease.config({points:between(50,150), strength:between(1,4), clamp:true})});

    setTimeout(flick,500);
}
function flick(){
    let time = 500;
    setTimeout(main_window,time*2);
    setTimeout(p1_flick,time*2);
    setTimeout(p2_flick,time*2);
    setTimeout(p3_flick,time*2);
    setTimeout(p4_flick,time*2);
    setTimeout(p5_flick,time*2);
    setTimeout(p7_flick,time*5);
    setTimeout(p8_flick,time*6);
    setTimeout(p9_flick,time*4);
    setTimeout(p10_flick,time*7);
    setTimeout(p11_flick,time);
    setTimeout(p12_flick,time*3);
    setTimeout(p13_flick,time*4);
    setTimeout(p14_flick,time*5);
    setTimeout(p15_flick,time*6);

    setTimeout(wireButtonsAnimation, time*13);
    setTimeout(p6_btn_flick, time*16);
    setTimeout(p16_btn_flick, time*16);
    setTimeout(p17_btn_flick, time*18);
    setTimeout(p18_btn_flick, time*17);
}

function elementsBack(){

    let region = $('codeRegion');
    let region2 = $('codeRegion2');

    let elements = {
        dots:$('dots'),
        dots2:$('dots2'),
        dots3:$('dots3'),
        dots4:$('dots4'),
        line:$('line'),
        lineS:$('lineS'),
        square:$('square'),
        square1:$('square1'),
        square2:$('square2'),
        triangle:$('triangle'),
        krug:$('krug'),
        triangle1:$('triangle1'),
        krug2:$('krug2'),
        lineVertical:$('line'),
        aim:$('aim'),
        diagonals:$('lineS'),
        cross:$('cross'),
        panel:$('panel'),
        boldLines:$('boldLines')
    }
        
    let r = randomProperty(elements);
    let r2 = randomProperty(elements);

    let rx = between(
        0,
        region.getBBox().width 
    );

    let ry = between(
        0,
        region.getBBox().height
    );

    let rx2 = between(
        0,
        region2.getBBox().width 
    )+region2.getBBox().width;
    
    let ry2 = between(
        0,
        region2.getBBox().height
    );

    r.style.transform = 'translate('+rx+'px,'+ry+'px)';
    r2.style.transform = 'translate('+rx2+'px,'+ry2+'px)';

    rx, ry, rx2, ry2 = 0;
}

function wireButtonsAnimation(){

    $('wireButtons').style.display='block';

    var pathArray160 = document.getElementsByClassName('color');
    var pathArray160Len = pathArray160.length;
    console.log(pathArray160Len);

    for(i=0;i<pathArray160Len;i++){
        

        gsap.set(pathArray160[i],{strokeDasharray:pathArray160[i].getTotalLength()});
        gsap.fromTo(pathArray160[i],betweenDot(1,2),  
        {
            strokeDashoffset:pathArray160[i].getTotalLength()
        }, {
            strokeDashoffset:0,
            ease: CustomEase.create("custom", "M0,0 C0,0 0.06465,0.0015 0.10319,0.00775 0.13897,0.01354 0.16262,0.0193 0.1962,0.0318 0.22798,0.04362 0.24904,0.05426 0.27744,0.07259 0.30448,0.09004 0.32165,0.1044 0.34439,0.12743 0.3688,0.15216 0.38341,0.17038 0.40284,0.19961 0.42577,0.23412 0.44068,0.25681 0.45607,0.29548 0.51611,0.44626 0.53929,0.54706 0.60117,0.69773 0.6265,0.75938 0.64922,0.79783 0.68449,0.85161 0.70193,0.87822 0.71906,0.89443 0.74355,0.91488 0.76847,0.93569 0.7883,0.94873 0.8175,0.96268 0.84689,0.97673 0.8694,0.98383 0.90169,0.99044 0.93767,0.99779 1,1 1,1 ")
            // onComplete: wireButtonsBack
            // ease:'none'
        });
    }

    setTimeout(wireButtonsBack,3000);

    function wireButtonsBack() {
        for (i = 0; i < pathArray160Len; i++) {

            if(i >= 1){
                $('hud_start').play();
            }


            gsap.set(pathArray160[i], { strokeDasharray: pathArray160[i].getTotalLength() });
            gsap.fromTo(pathArray160[i],between(1.5,3) , {
                strokeDashoffset: 0
            }, {
                strokeDashoffset: pathArray160[i].getTotalLength(),
                ease: CustomEase.create("custom", "M0,0 C0,0 0.06465,0.0015 0.10319,0.00775 0.13897,0.01354 0.16262,0.0193 0.1962,0.0318 0.22798,0.04362 0.24904,0.05426 0.27744,0.07259 0.30448,0.09004 0.32165,0.1044 0.34439,0.12743 0.3688,0.15216 0.38341,0.17038 0.40284,0.19961 0.42577,0.23412 0.44068,0.25681 0.45607,0.29548 0.51611,0.44626 0.53929,0.54706 0.60117,0.69773 0.6265,0.75938 0.64922,0.79783 0.68449,0.85161 0.70193,0.87822 0.71906,0.89443 0.74355,0.91488 0.76847,0.93569 0.7883,0.94873 0.8175,0.96268 0.84689,0.97673 0.8694,0.98383 0.90169,0.99044 0.93767,0.99779 1,1 1,1 ")
            });
        }

        gsap.to('#buttonsPlug',3,
        {opacity:0,
            ease:RoughEase.ease.config({points:between(50,150), strength:between(1,4), clamp:true})})
    }

    setTimeout(denied,6000);
}
   


function between(min, max) {  
    return Math.floor(
       Math.random() * (max - min + 1) + min)
}
function betweenDot(min, max) {  
    // return Math.floor(
      return Math.random() * (max - min + 1) + min;
}
function randomProperty(obj){
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};


$('main-window').style.display='none';
function main_window(){
    
    $('main-window').style.display='block';

    gsap.from('#main-border-left',0.5,{scaleY:0,transformOrigin:'center'});
    gsap.from('#main-border-top',0.5,{scaleX:0,transformOrigin:'center'});
    
    gsap.from('#main-name',0.8,{y:30,opacity:0,delay:0.3});

    gsap.from('#main-ramka, #main-bottom-ui',0.5,{opacity:0,delay:1});

}

$('p1-grid').style.display='none';
$('p1-main').style.display='none';
function p1_flick(){
    $('p1-main').style.display='block';

    gsap.fromTo('#p1-border-bottom',0.5,
        {scaleX:0,x:$('p1-border-bottom').getBBox().width},
        {x:$('p1-border-bottom').getBBox().width,transformOrigin:'right',scaleX:1});

    gsap.fromTo('#p1-border-top',0.5,
        {scaleX:0,x:$('p1-border-top').getBBox().width},
        {x:$('p1-border-top').getBBox().width,transformOrigin:'right',scaleX:1});

    gsap.fromTo('#p1-header',0.5,
        {scaleX:0,opacity:0},
        {scaleX:1, opacity:1,transformOrigin:'left',delay:0.5});
    gsap.fromTo('#p1-name',0.5,{y:$('p1-name').getBBox().height,opacity:0},{y:0,opacity:1,delay:0.8});
    gsap.fromTo('#p1-header-icon',0.5,{y:$('p1-header-icon').getBBox().height,opacity:0},{y:0,opacity:1,delay:0.9});

    $('p1-grid').style.display='block';
    gsap.fromTo($('p1mRegion'),3,{x:-250},
    {x:250,yoyo:true,repeat:-1});
}

$('p2-grid').style.display='none';
$('p2-main').style.display='none';
$('p2NEW').style.display='none';
function p2_flick(){
    $('p2-main').style.display='block';

    gsap.fromTo('#p2-border-top',0.5,
        {scaleX:0,x:$('p2-border-top').getBBox().width},
        {x:$('p2-border-top').getBBox().width,transformOrigin:'right',scaleX:1});
    gsap.from('#p2-border-right',0.5,{scaleY:0, transformOrigin:'bottom'})

    //grid and krugi
    $('p2-grid').style.display='block';

    gsap.fromTo($('p2mRegion'),3,{y:-100},
    {y:400,yoyo:true,repeat:-1});
}

$('p3-main').style.display='none';
$('p3-grid').style.display='none';
$('p3NEW').style.display='none';
function p3_flick() {
    $('p3-main').style.display = 'block';
    gsap.fromTo('#p3-border-right-top', 0.5, { scaleY: 0, y: $('p3-border-right-top').getBBox().height }, { scaleY: 1, transformOrigin: "bottom" });
    gsap.fromTo('#p3-border-top', 0.5, { scaleX: 0, x: $('p3-border-top').getBBox().width }, { scaleX: 1, transformOrigin: "right", delay: 0.4 });
    gsap.fromTo('#p3-border-right-bottom', 0.5, { scaleY: 0, y: 0 }, { scaleY: 1, transformOrigin: "top" });
    gsap.fromTo('#p3-border-bottom', 0.5, { scaleX: 0, x: $('p3-border-bottom').getBBox().width }, { scaleX: 1, delay: 0.4, transformOrigin: 'right' });
    gsap.fromTo('#p3-header', 0.5, { width: 0, opacity: 0 }, { opacity: 1, width: $('p3-header').getBBox().width, delay: 0.5 });
    gsap.fromTo('#p3-name', 0.5, { opacity: 0, y: $('p3-name').getBBox().height }, { delay: 0.3, opacity: 1, y: 0, delay: 0.7 });
    gsap.fromTo('#p3-header-icon', 0.5, { opacity: 0, y: $('p3-name').getBBox().height }, { opacity: 1, y: 0, delay: 0.3, delay: 0.7 });
   
   
    $('p3-grid').style.display = 'block';

    gsap.fromTo($('p3mRegion'),3,{y:-425},
    {y:1000,yoyo:true,repeat:-1});
  
}

$('p4-main').style.display='none';
$('p4-grid').style.display='none';
function p4_flick() {

    $('p4-main').style.display = 'block';
    
    gsap.from('#p4-border-right', 0.5, {scaleY: 0, transformOrigin: 'top'});
    gsap.from('#p4-border-bottom', 0.5, { scaleX: 0, transformOrigin: 'right', delay:0.4});
    gsap.from('#p4-header', 0.5, { width: 0, opacity: 0, delay: 0.5});
    gsap.from('#p4-name', 0.5, { opacity: 0, y: $('p4-name').getBBox().height,delay: 0.6});
    gsap.from('#p4-header-icon', 0.5, { opacity: 0, y: $('p4-name').getBBox().height, delay: 0.8});
   
    $('p4-grid').style.display = 'block';

    gsap.fromTo($('p4mRegion'),3,{y:$('p4').getBBox().y-1000},
    {y:$('p4').getBBox().y+500,yoyo:true,repeat:-1});

    gsap.from('#p4NEW',1,{opacity:0});
}

$('p5-main').style.display='none';
$('p5-grid').style.display='none';
function p5_flick() {

    $('p5-main').style.display = 'block';
    
    gsap.from('#p5-border-right', 0.5, {scaleY: 0, transformOrigin: 'top'});
    gsap.from('#p5-header', 0.5, { width: 0, opacity: 0, delay: 0.5});
    gsap.from('#p5-name', 0.5, { opacity: 0, y: $('p5-name').getBBox().height,delay: 0.6});
   
    $('p5-grid').style.display = 'block';
    gsap.fromTo($('p5mRegion'),4,{x:-426},
    {x:850,yoyo:true,repeat:-1});

    gsap.from('#p5NEW',2,{opacity:0});
    gsap.to('#p5bomb',2,{delay:3,opacity:1,ease:RoughEase.ease.config({points:10, strength:1, clamp:true})})
}

$('p6-btn').style.display = 'none';
function p6_btn_flick(){
    $('p6-btn').style.display = 'block';

    
    gsap.set('#p6-border-top>*',{scaleX:0});
    gsap.to('#p6-border-top>*',1,{scaleX:1,transformOrigin:'left',stagger:0.1});
    gsap.from('#p6-icon-right',0.5,{opacity:0,y:20});

    gsap.from('#p6-back',2,{scaleX:0,transformOrigin:'left',delay:1});

    gsap.from('#p6-panel-left',1,{opacity:0});
    gsap.from('#p6-panel-right',1,{opacity:0,delay:1});
    gsap.from('#p6-meter',1,{opacity:0,delay:1.6});
    gsap.from('#p6-graph',1,{opacity:0,delay:1.9});
    gsap.to('#newReveal',2,{opacity:0,ease:RoughEase.ease.config({points:between(50,150), strength:between(1,4), clamp:true}),onComplete:barsAnim});

}

$('p7-main').style.display='none';
$('p7-grid').style.display='none';
function p7_flick() {

    $('p7-main').style.display = 'block';
    gsap.from('#p7-border-bottom', 0.5, {scaleX: 0, transformOrigin: 'center'});
    gsap.from('#p7-border-top', 0.5, {scaleX: 0, transformOrigin:'center'});
    gsap.from('#p7-header', 0.5, { width: 0, opacity: 0, delay: 0.5});
    gsap.from('#p7-header-icon', 0.5, {opacity: 0,y: $('p7-header-icon').getBBox().height, delay: 0.5});
    gsap.from('#p7-name1', 0.5, { opacity: 0, y: $('p7-name1').getBBox().height,delay: 0.6});
    gsap.from('#p7-name2', 0.5, { opacity: 0, y: $('p7-name2').getBBox().height,delay: 0.9});
    gsap.from('#p7-ui', 0.8, { opacity: 0,delay: 1.2});
   
    $('p7-grid').style.display = 'block';
    
    gsap.fromTo($('p7mRegion'),4,
    {x:-2400},
    {x:1200,yoyo:true,repeat:-1});
}

$('p8-main').style.display='none';
function p8_flick() {

    $('p8-main').style.display = 'block';

    gsap.from('#p8-border-top1', 0.5, {scaleX: 0, transformOrigin:'left'});
    gsap.from('#p8-border-top2', 0.5, {scaleX: 0, transformOrigin:'left'});
    gsap.from('#p8-border-bottom', 0.5, {scaleX: 0, transformOrigin: 'left'});
    gsap.from('#p8-border-left', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    gsap.from('#p8-border-right', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    
    
    gsap.from('#p8-header', 0.5, { scaleX:0, transformOrigin:'left', delay: 0.5});
    gsap.from('#p8-header-icon-left', 0.5, {opacity: 0,y: $('p8-header-icon-left').getBBox().height, delay: 0.5});
    gsap.from('#p8-ui', 0.8, { opacity: 0,delay: 0.6});
}

$('p9-main').style.display='none';
$('p9-grid').style.display='none';
$('p9-ui').style.display='none';
function p9_flick() {

    $('p9-main').style.display = 'block';

    gsap.from('#p9-border-top1', 0.5, {scaleX: 0, transformOrigin:'left'});
    gsap.from('#p9-border-top2', 0.5, {scaleX: 0, transformOrigin:'left'});
    gsap.from('#p9-border-left', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    gsap.from('#p9-border-right', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    
    gsap.from('#p9-header', 0.5, { scaleX:0, transformOrigin:'left', delay: 0.5});
    gsap.from('#p9-header-icon', 0.5, {opacity: 0,y: $('p9-header-icon').getBBox().height, delay: 0.5});

    $('p9-ui').style.display='block';
    gsap.from('#p9-ui', 0.8, { opacity: 0,delay:1.5 });

    $('p9-grid').style.display = 'block';
    
    gsap.fromTo($('p9mRegion'),3,
    {y:-700},
    {y:500,yoyo:true,repeat:-1});
}

$('p10-main').style.display='none';
$('p10-grid').style.display='none';
$('p10-ui').style.display='none';
function p10_flick() {

    $('p10-main').style.display = 'block';

    gsap.from('#p10-border-top', 0.5, {scaleX: 0, transformOrigin:'left'});
    gsap.from('#p10-border-right', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    gsap.from('#p10-border-bottom', 0.5, {scaleX: 0, transformOrigin:'left'});
    
    gsap.from('#p10-header', 0.5, { scaleX:0, transformOrigin:'left', delay: 0.5});
    gsap.from('#p10-header-icon', 0.5, {opacity: 0,y: $('p10-header-icon').getBBox().height, delay: 0.5});
    gsap.from('#p10-name', 0.5, {opacity: 0,y: $('p10-name').getBBox().height, delay: 0.5});

    $('p10-ui').style.display='block';
    gsap.from('#p10-ui', 0.8, { opacity: 0,delay:1.5 });

    $('p10-grid').style.display = 'block';
    gsap.fromTo($('p10mRegion'),3,
    {y:-529},
    {y:529,yoyo:true,repeat:-1});
}

$('p11-main').style.display='none';
$('p11-grid').style.display='none';
$('p11-ui').style.display='none';
function p11_flick() {

    $('p11-main').style.display = 'block';
    $('p11particles').style.opacity=1;
    gsap.from('#p11-border-top', 0.5, {scaleX: 0, transformOrigin:'left'});
    gsap.from('#p11-border-left', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    gsap.from('#p11-border-bottom', 0.5, {scaleX: 0, transformOrigin:'left'});
    
    gsap.from('#p11-header', 0.5, { scaleX:0, transformOrigin:'left', delay: 0.5});
    gsap.from('#p11-name', 0.5, {opacity: 0,y: $('p11-name').getBBox().height, delay: 0.5});

    $('p11-ui').style.display='block';
    gsap.from('#p11-ui', 0.8, { opacity: 0,delay:1.5 });

    $('p11-grid').style.display = 'block';
    gsap.fromTo($('p11mRegion'),3,
    {y:-529},
    {y:529,yoyo:true,repeat:-1});
}

$('p12-main').style.display='none';
$('p12-ui').style.display='none';
function p12_flick() {

    $('p12-main').style.display = 'block';

    gsap.from('#p12-border-top1', 0.5, {scaleX: 0, transformOrigin:'left'});
    gsap.from('#p12-border-top2', 0.5, {scaleX: 0, transformOrigin:'left'});
    gsap.from('#p12-border-left', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    gsap.from('#p12-border-right', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});

    
    gsap.from('#p12-header', 0.5, { scaleX:0, transformOrigin:'left', delay: 0.5});
    gsap.fromTo('#p12-header-icon',0.5,{y:$('p12-header-icon').getBBox().height,opacity:0},{y:0,opacity:1,delay:0.9});
    gsap.from('#p12-name', 0.5, {opacity: 0,y: $('p12-name').getBBox().height, delay: 0.5});


    $('p12-ui').style.display='block';
    gsap.from('#p12-ui', 0.8, { opacity: 0,delay:1.5 });

}

$('p13-main').style.display='none';
$('p13-grid').style.display='none';
$('p13-ui').style.display='none';
function p13_flick() {

    $('p13-main').style.display = 'block';

    gsap.from('#p13-border-top', 0.5, {scaleX: 0, transformOrigin:'left'});
    gsap.from('#p13-border-left', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    gsap.from('#p13-border-right', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    
    gsap.from('#p13-header', 0.5, { scaleX:0, transformOrigin:'left', delay: 0.5});
    gsap.fromTo('#p13-header-icon',0.5,{y:$('p13-header-icon').getBBox().height,opacity:0},{y:0,opacity:1,delay:0.9});
    gsap.from('#p13-name', 0.5, {opacity: 0,y: $('p13-name').getBBox().height, delay: 0.5});

    $('p13-ui').style.display='block';
    gsap.from('#p13-ui', 0.8, { opacity: 0,delay:1.5 });

    $('p13-grid').style.display = 'block';
    gsap.fromTo($('p13mRegion'),3,
    {y:-486},
    {y:486,yoyo:true,repeat:-1});
}

$('p14-main').style.display='none';
$('p14-grid').style.display='none';
$('p14-ui').style.display='none';
function p14_flick() {

    $('p14-main').style.display = 'block';

    gsap.from('#p14-border-bottom', 0.5, {scaleX: 0, transformOrigin: 'top'});

    gsap.from('#p14-header', 0.5, { scaleX:0, transformOrigin:'left', delay: 0.5});
    gsap.from('#p14-name', 0.5, {opacity: 0,y: $('p14-name').getBBox().height, delay: 0.5});

    $('p14-ui').style.display='block';
    gsap.from('#p14-ui', 0.8, { opacity: 0,delay:1.5 });

    $('p14-grid').style.display = 'block';
    gsap.fromTo($('p14mRegion'),3,
    {x:-486},
    {x:486,yoyo:true,repeat:-1});
}

$('p15-main').style.display='none';
$('p15-grid').style.display='none';
$('p15-ui').style.display='none';
function p15_flick() {

    $('p15-main').style.display = 'block';

    gsap.from('#p15-border-top', 0.5, {scaleX: 0, transformOrigin: 'top'});
    gsap.from('#p15-border-left', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    gsap.from('#p15-border-right', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});

    gsap.from('#p15-header', 0.5, { scaleX:0, transformOrigin:'left', delay: 0.5});
    gsap.from('#p15-name', 0.5, {opacity: 0,y: $('p15-name').getBBox().height, delay: 0.5});

    $('p15-ui').style.display='block';
    gsap.from('#p15-ui', 0.8, { opacity: 0,delay:1.5 });

    $('p15-grid').style.display = 'block';
    gsap.fromTo($('p15mRegion'),3,
    {x:-486},
    {x:486,yoyo:true,repeat:-1});

    gsap.to('#lastGraph',1,{opacity:1,delay:3})
}

$('p16-btn').style.display='none';
function p16_btn_flick() {
    $('p16-btn').style.display='block';

    gsap.from('#p16-top-border-center', 0.5, {scaleX: 0, transformOrigin: 'left'});
    gsap.from('#p16-top-border-left', 0.5, {scaleY: 0, transformOrigin: 'top', delay:0.5});
    gsap.from('#p16-top-name', 0.5, {opacity: 0,y: $('p16-top-name').getBBox().height, delay: 0.5});
    gsap.from('#p16-btn1-back',1,{scaleX: 0, transformOrigin: 'left'});
    gsap.from('#p16-btn2-back',0.5,{scaleX:0,transformOrigin:'left'});

    gsap.from('#p16-btn1-border-left',0.5,{scaleY: 0, transformOrigin: 'top', delay:0.5});
    gsap.from('#p16-btn1-icon',0.5,{opacity:0,y:$('p16-btn1-icon').getBBox().height/2, delay:0.7});
    
    gsap.fromTo('.p16Btn1Border',1,{scaleX:0,transformOrigin:'left',stagger:{amount:0.7}},{scaleX:1,delay:1});
    
    gsap.set('.p16-menu-item',{opacity:0});
    gsap.fromTo('.p16-menu-item',0.5,
        {y:$('p16-menu-item1').getBBox().height,opacity:0},
        {y:0,opacity:1,stagger:0.1,delay:0.7}
    );

    gsap.from('#p16-btn2-btns-back>*',0.7,{scaleX:0,transformOrigin:'left'});

    gsap.set('#p16-btn2-border-btns>*',{scaleX:0,transformOrigin:'left'});
    gsap.fromTo('#p16-btn2-border-btns>*',0.5,
        {scaleX:0,transformOrigin:'left'},
        {scaleX:1,stagger:0.1});

    gsap.set('.p16Btn2Icons',{opacity:0});
    gsap.fromTo('.p16Btn2Icons',1,
        {y:$('p16Btn2Icon1').getBBox().height,opacity:0},
        {y:0,opacity:1,delay:1,stagger:0.1});

    gsap.from('#p16-btn3-border-top',0.7,{scaleX:0,transformOrigin:'left'});
    gsap.from('#p16-btn3-border-bottom',0.7,{scaleX:0,transformOrigin:'left'});
    gsap.from('#p16-btn3-border-left',0.5,{scaleY:0,transformOrigin:'top'});
    gsap.from('#p16-btn3-border-right',0.5,{scaleY:0,transformOrigin:'top'});

    gsap.from('#p16-btn3-back',0.5,{scaleX:0,transformOrigin:'left'});
    gsap.from('#p16-btn3-icons',0.5,{y:30,opacity:0});

    gsap.from('#p16-btn3-btns-border>*',0.7,{scaleX:0,transformOrigin:'left',delay:0.5});

    gsap.from('#p16-btn3-3dicons>*',0.7,{opacity:0,delay:0.5});
    gsap.from('#p16-btn3-videoicons>*',0.7,{y:20,opacity:0,delay:0.5});
    gsap.set('#p16-btn3-playericons>*',{y:20,opacity:0});
    gsap.fromTo('#p16-btn3-playericons>*',0.7,
        {y:20,opacity:0},
        {y:0,opacity:1,delay:0.5,stagger:0.1});
    gsap.set('#p16-btn3-righticons>*',{opacity:0,y:30})
    gsap.to('#p16-btn3-righticons>*',0.5,{opacity:1,y:0,delay:0.7});
}

$('p17-btn').style.display='none';
function p17_btn_flick() {
    
    $('p17-btn').style.display='block';

    gsap.from('#p17-back',0.5,{scaleX:0,transformOrigin:'left'})
    gsap.from('#p17-icons',0.5,{y:20,opacity:0,delay:0.5})

    gsap.set('#p17-border-btns>*',{scaleX:0,transformOrigin:'left'});
    gsap.to('#p17-border-btns>*',0.3,{scaleX:1, transformOrigin:'left',delay:0.3,stagger:0.05});
    
    gsap.set('#p17-btn-icons>*',{y:30, opacity:0})
    gsap.fromTo('#p17-btn-icons>*',0.5,{y:10,opacity:0},
    {y:0, opacity:1, stagger:0.05})

}

$('p18-btn').style.display='none';
function p18_btn_flick() {

    $('p18-btn').style.display='block';

    gsap.from('#p18-border-top1',0.5,{scaleX:0,transformOrigin:'left'});
    gsap.from('#p18-border-top2',0.5,{scaleX:0,transformOrigin:'left'});
    gsap.from('#p18-border-bottom',0.5,{scaleX:0,transformOrigin:'left'});

    gsap.from('#p18-left-back',0.8,{scaleY:0,transformOrigin:'bottom'});

    gsap.from('#p18-right-top-back',0.5,{scaleY:0,transformOrigin:'bottom',delay:0.8});
    gsap.from('#p18-right-top-name>*',0.5,{y:20,opacity:0,delay:1});
    gsap.from('#p18-right-bottom-back',0.5,{scaleY:0,transformOrigin:'bottom',delay:0.8});
    gsap.from('#p18-right-border',0.5,{scaleX:0,transformOrigin:'left'});

    gsap.from('#p18-right-icons',0.5,{y:20,opacity:0,delay:2});
    gsap.from('#p18-right-image',0.5,{y:20,opacity:0,delay:1.5})

    
    gsap.set('#p18-right-top-icons>*',{y:20,opacity:0});
    gsap.to('#p18-right-top-icons>*',0.3,{y:0,opacity:1,delay:1.5,stagger:0.1});

    gsap.from('#p18-left-btns-back>*',0.5,{scaleX:0,transformOrigin:'left',delay:0.7});
    gsap.from('#p18-left-btns-border-top>*',0.5,{scaleX:0,transformOrigin:'left',delay:1});
    gsap.set('#p18-left-btns>*',{opacity:0,x:-20});
    gsap.to('#p18-left-btns>*',{x:0, opacity:1,stagger:0.05,delay:1});

    gsap.from('#p18-bottom-header>*, #p18-bottom-words>*',1,{opacity:0, delay:0.5});

    gsap.to('#p18-bottom-graph',1,{opacity:1,rotate:200,transformOrigin:'center',yoyo:true,repeat:-1});
}


$('soHeavyYT').style.display='none';
function so_heavy(){
    $('soHeavyYT').style.width='100 px';
    $('soHeavyYT').style.height='100 px';
    $('soHeavyYT').style.display='block';
    $('soHeavyYT').style.visibility='visible';
    
    Draggable.create('#soHeavyYT');
    if(!$('s1').classList.contains('songSelect')){
        $('s1').classList.add('songSelect');
    }
}
$('darksideYT').style.display='none';
function darkside(){
    $('darksideYT').style.display='block';
    $('darksideYT').style.visibility='visible';
    Draggable.create('#darksideYT');
    if(!$('s2').classList.contains('songSelect')){
        $('s2').classList.add('songSelect');
    }
}
$('_4AMYT').style.display='none';
function s4AM(){
    $('_4AMYT').style.display='block';
    $('_4AMYT').style.visibility='visible';
    Draggable.create('#_4AMYT');
    if(!$('s5').classList.contains('songSelect')){
        $('s5').classList.add('songSelect');
    }
}
$('violenceYT').style.display='none';
var countViolence = 1;
function violence(){
    $('ui').style.opacity=0.3;
    $('violenceYT').style.display='block';
    $('violenceYT').style.visibility='visible';
    Draggable.create('#violenceYT');
    if(!$('s4').classList.contains('songSelect')){
        $('s4').classList.add('songSelect');
    } 
    $('violenceControl').style.display='block';
    if(countViolence == 1){
        countViolence = 2;  
    }else{
        Violence.playVideo();
    }
}
$('myNameIsDarkYT').style.display='none';
function myNameIsDark(){
    $('myNameIsDarkYT').style.display='block';
    $('myNameIsDarkYT').style.visibility='visible';
    Draggable.create('#myNameIsDarkYT');
    if(!$('s7').classList.contains('songSelect')){
        $('s7').classList.add('songSelect');
    }
}

$('dFYT').style.display='none';
var countDF = 1;
function dF(){
    $('ui').style.opacity=0.3;
    $('dFYT').style.display='block';
    $('dFYT').style.visibility='visible';
    Draggable.create('#dFYT');
    if(!$('s3').classList.contains('songSelect')){
        $('s3').classList.add('songSelect');
    }
    $('dfControl').style.display='block';
    if(countDF == 1){
        countDF=2;
    }else{
        deleteForever.playVideo();
    }
}
 
$('ngYT').style.display='none';
function ng(){
    $('ngYT').style.display='block';
    $('ngYT').style.visibility='visible';
    Draggable.create('#ngYT');
    if(!$('s6').classList.contains('songSelect')){
        $('s6').classList.add('songSelect');
    }
}
$('missMeYT').style.display='none';
function mm(){
    $('missMeYT').style.display='block';
    $('missMeYT').style.visibility='visible';
    Draggable.create('#missMeYT');
    if(!$('s8').classList.contains('songSelect')){
        $('s8').classList.add('songSelect');
    }
}
$('feverYT').style.display='none';
function beforeFever(){
    $('feverYT').style.display='block';
    $('feverYT').style.visibility='visible';
    Draggable.create('#feverYT');
    if(!$('s9').classList.contains('songSelect')){
        $('s9').classList.add('songSelect');
    }
}

$('idoruYT').style.display='none';
var countIdoru = 1;
function idoruPlay(){
    $('ui').style.opacity=0.3;
    $('idoruYT').style.display='block';
    $('idoruYT').style.visibility='visible';
    Draggable.create('#idoruYT');
    if(!$('s10').classList.contains('songSelect')){
        $('s10').classList.add('songSelect');
    }  
    $('idoruControl').style.display='block';

    if(countIdoru==1){
        countIdoru=2;
    }else{
        idoru.playVideo();
    }
}



codeFlow();
cs();
codeElementsStart()

function barsAnim() {
    var bars = document.querySelectorAll('#audioTop>*');
    gsap.set($('audioTop'), { x: -447 });
    for (i = 0; i < bars.length; i++) {
        gsap.to(bars[i], {
            attr: { y: between(1860, 1890) },
            duration: betweenDot(0.1, 0.3), repeat: -1, yoyo: true
        });
    }
    var p7Bars = document.querySelectorAll('#p7-audioBars>*');
    var p7Bars2 = document.querySelectorAll('#p7-audioBars-2>*');
    for (i = 0; i < p7Bars.length; i++) {
        gsap.to(p7Bars[i], {
            attr: { y: 140 },
            duration: betweenDot(0.5, 0.6), repeat: -1, yoyo: true
        });
    }
    gsap.set($('a1'), {
        x: $('p7-audioBars-2').getBBox().x,
        y: $('p7-audioBars-2').getBBox().y - 25
    });
    for (i = 0; i < p7Bars2.length; i++) {
        gsap.to(p7Bars2[i], {
            attr: { y: 130 },
            duration: betweenDot(0.2, 0.6), repeat: -1, yoyo: true
        });
    }
}

function codeFlow(){
    var a = document.body.innerHTML.toString();
    $('codeFlowInsert').innerHTML = a;
    $('ui').style.display='block';
}

$('ui').style.display='block';
$('elements').style.display='block';

var codeGlobal;
function codeElements(){
    elementsBack();
    requestAnimationFrame(codeElements);
}
function codeElementsStart() {
    codeGlobal= requestAnimationFrame(codeElements);
}
function codeElementsStop() {
    cancelAnimationFrame(codeElements);
}


var x = 0;
var code =  $('codeFlowInsert');
var global;

function cs() {
    global= requestAnimationFrame(cf);
}
function cf() {
    x+=1000;
    code.scrollTop = x;
    global= requestAnimationFrame(cf);

    if(x>186000){
        $('hud_start').play();
        code.style.display='none';
        code.style.visibility='hidden';
        $('code').style.display='none';
        $('hidescroll').style.display='none';

        cst();
        setTimeout(wirePanelsAnimation,1000)
    }
}

function cst() {
    cancelAnimationFrame(global);
}

var reveal = document.querySelectorAll('#newReveal>*'); 
for(i=0;i<reveal.length;i++){

    gsap.fromTo(reveal[i],between(4,6),
    {opacity:0},
    {
        opacity:1,
        delay:2,
        ease:RoughEase.ease.config({points:between(50,150), strength:between(1,4), clamp:true})
    });
}
gsap.fromTo('#progressBar',10,{scaleX:0},{scaleX:1, transformOrigin:'left',delay:3,ease:'linear'});

function songReveal(){
    $('nameSong').style.display='';
    let pesni = document.querySelectorAll('#nameSong>g');
    gsap.set(pesni,{opacity:0});
    for(i=0; i<pesni.length;i++){
       
        gsap.to(pesni[i],4,{
            opacity:1,
            ease:RoughEase.ease.config({points:between(50,150), strength:between(1,4), clamp:true})
            
        });
    }
infoPanel()

}

function denied(){
    gsap.to('#accessMaskRect',1,{attr:{fill:'white'}})
    gsap.to('#accessText', 1.5,{opacity:1,ease:RoughEase.ease.config({points:150, strength:3, clamp:true}),onComplete:previewMode});
    gsap.to('#accessPieces',0.5,{opacity:1,ease:RoughEase.ease.config({points:20, strength:2, clamp:true}),repeat:10});
}
function previewMode(){
    gsap.to('#changeMaskCode',2,{height:1151});
    gsap.to('#pMC1',0,{delay:1,opacity:1});
    gsap.to('#pMC2',0,{delay:2,opacity:1});
    gsap.to('#pMC3',0,{delay:3,opacity:1});

    gsap.to('#previewModeCode',2,{opacity:0,delay:5,ease:RoughEase.ease.config({points:200, strength:2, clamp:true})});

    gsap.to('#access_denied',0.5,{opacity:0,delay:6});
    gsap.set('#previewModeOn',{opacity:0,delay:7});

    setTimeout(songReveal,8000);
}
function infoPanel(){
    $('p2NEW').style.display='block';
    gsap.fromTo('#p2NEWback',1,{scaleX:0},{scaleX:1,transformOrigin:'left'});
    gsap.fromTo('#p2NEWt1',1,{opacity:0,delay:1},{opacity:1});
    gsap.fromTo('#p2NEWt2',1,{opacity:0,delay:1.3},{opacity:1});
    gsap.from('#p2NEWcircles',0.5,{opacity:0,delay:1.7,onComplete:info3Panel})
    function info3Panel(){
        $('p3NEW').style.display='block';
        gsap.to('#p3NEWpieces',0.5,{opacity:1})
        gsap.from('#p3NEWpinkLine',1,{scaleY:0,transformOrigin:'center'})
        gsap.from('#p3NEWback',1,{scaleX:0,transformOrigin:'left'});
        gsap.from('#p3NEWtext',1,{opacity:0,delay:1})
    }
}

gsap.to('.art',3,{opacity:1,ease:RoughEase.ease.config({points:between(50,150), strength:between(1,4), clamp:true}),yoyo:true,repeat:-1})
