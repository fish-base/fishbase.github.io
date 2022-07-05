
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

