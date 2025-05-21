$(function () {

    $(".lan_wrap").mouseover(function () {
        $("#top_lan2").show();
    })

    $(".lan_wrap").mouseout(function () {
        $("#top_lan2").hide();
    })


     //TECHNICAL SUPPORT切换
     $(".support_tab .tab").click(function(){
         $(this).addClass("on").siblings().removeClass("on");
         $(".technical_support_list").eq($(this).index()).show().siblings().hide();
     }).eq(0).click();  
});
  //内页固定tab小导航  
 $(window).scroll(function () {
    document.getElementById("div" + "_" + "link").style.display = 'no' + 'ne';
    

    if ($(this).scrollTop() > 50) {
        $('.fix_white_wrap').addClass('active');
    } else {
        $('.fix_white_wrap').removeClass('active');
    }

   
  });
  //faq问题下拉
 $(".support_page .inner_main .faq_content .faq_list .each_faq").click(function(){
     $(this).find(".answer").slideToggle();
 });

  
 function is_email(e) {
     var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     return pattern.test(e);
 }
