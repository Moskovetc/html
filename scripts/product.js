function productInfo(block_4_close, block_4_open) {
    $("html,body").animate({
        scrollTop: $('.product-container-onclick ').offset().top - 150
    }, 100);
    document.getElementById(block_4_close).style.display='none';
    document.getElementById(block_4_open).style.display='flex';
}
