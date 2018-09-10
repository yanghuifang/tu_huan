function op_pic(text1,pic1,text2,pic2,speed1,speed2) {
    window.onscroll=function () {
        let wh=window.innerHeight;
        let bh=document.documentElement.scrollTop;

        if(bh+wh>speed1){
            text1.style.opacity="1";
            pic1.style.opacity="1";
        }
        if(bh+wh>speed2){
            text2.style.opacity="1";
            pic2.style.opacity="1";
        }

    }
}