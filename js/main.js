

/**    菜单栏上滑显示  下滑 消失 ** */

let t1 = 0;
let t2 = 0;
let timer = null; // 定时器

/** 节流 */
let scrolling = false;

document.onscroll = function() {
    scrolling = true;

}
let t3 = 0;
setInterval( function(){
   
    if(scrolling){
        scrolling = false;
        
        clearTimeout(timer);    
       t1 = document.documentElement.scrollTop || document.body.scrollTop;      
       timer = setTimeout(isScrollEnd, 200);  
    }
    }
,200)
/** 
function isScrollEnd() {
    t2 = document.documentElement.scrollTop || document.body.scrollTop;
    let head_1 = document.getElementById('nav_button');

    /**if(t2 > t3){        
    console.log(head_1)
      console.log(t3,t2)
      t3 = t2;
            if(t3>100){        
                console.log(head_1.style.display)
                head_1.style.visibility = 'hidden';
                
                console.log('no -display')
                }
    }else {
        console.log('上')
        console.log(t3,t2) 
        t3 = t2;
            if(t3>100){
            
            console.log(head_1.style.display)
            head_1.style.visibility = 'visible';
            
            console.log('display')
            }
    }**/
  

  function isScrollEnd(){
    t2 = document.documentElement.scrollTop || document.body.scrollTop;
    let head_1 = document.getElementById('nav_button');

    if(t3>100 || t2>100){
        if(t2 > t3){
            t3 = t2;
            head_1.style.visibility = 'hidden';
        }else {
            t3 = t2;
            head_1.style.visibility = 'visible';
    }
            }
  }

















/*   **    * */



$(function () {
    click_small_btn();
    header_search_btn();
    mouse_scroll_change();
    banner_img_url_click();
    click_show_hide_article_btn_box_item();
    mousehover_changeimgsrc();
});

//手机端页面按钮点击三横变一×
function click_small_btn() {
    $(".header_nav_small_btn").click(function () {
        $(this).toggleClass("click_small_btn");
        //手机端导航点击显示隐藏
        $(".header_nav").toggle("slow",function () {
            if($(".header_nav_small_btn").css("display")=="block"){
                if($(".search_box").css("display")=="block"){
                    $(".search_box").hide(350);
                }
            }
        });
    });
}


