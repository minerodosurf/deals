(function ($, root, undefined) {
  $(document).ready(function(){
    $('.deals-gallery .owl-carousel').owlCarousel({
                                                   loop:true,
                                                   margin:15,
                                                   nav:true,
                                                   autoHeight:true, lazyLoad:true,
                                                   responsive:{
                                                     0:{
                                                       items:1
                                                     },
                                                     580:{
                                                       items:1
                                                     },
                                                     768:{
                                                       items:2
                                                     },
                                                     1024:{
                                                       items:2,
                                                       margin:25
                                                     }
                                                   },
                                                   navText: [
                                                     '<i class="fa fa-angle-left"></i>',
                                                     '<i class="fa fa-angle-right"></i>'
                                                   ]
                                                 });
  });
})(jQuery, this);
