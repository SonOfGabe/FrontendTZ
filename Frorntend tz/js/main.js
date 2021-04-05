window.onload = function() {
    var timer;
    var el = document.getElementById('a');
  
    var firing = false;
    var singleClick = function(){
      var nonhideelem = document.getElementById('non-hide');
      var hideelem = document.getElementsByClassName('hide');
      var oneclickhide = document.getElementById('oneclick');
      var dblclickhide = document.getElementById('dblclick');
      if(dblclickhide.style.display == "unset"){
          dblclickhide.style.display = "none";
          oneclickhide.style.display = "unset";
      }
      nonhideelem.style.display = "none";
      hideelem[0].style.display = "flex";
      hideelem[1].style.display = "unset";
      hideelem[1].style.transition = "all ease 0.8s";    
      hideelem[2].style.display = "unset";
      hideelem[2].style.transition = "all ease 0.8s";
    };
  
    var doubleClick = function(){ 
      var hideelem = document.getElementsByClassName('hide');
      var nonhideelem = document.getElementById('non-hide');
      nonhideelem.style.display = "none";
      hideelem[0].style.display = "flex";
      hideelem[1].style.display = "unset";
      hideelem[2].style.display = "unset";
      var oneclickhide = document.getElementById('oneclick');
      var dblclickhide = document.getElementById('dblclick');
      oneclickhide.style.display = "none";
      dblclickhide.style.display = "unset";

    };
  
    var firingFunc = singleClick;
  
    el.onclick = function() {
      if(firing){
        firingFunc = doubleClick; 
        return;
      }
  
      firing = true;
      timer = setTimeout(function() { 
         firingFunc(); 
  
         firingFunc = singleClick;
         firing = false;
      }, 220);
  
    }
  }



let animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 6000;


            let animItemPoint = 100 + window.innerHeight - animItemHeight / animStart;
            if (index == 3) {
                animItemPoint = 20+ window.innerHeight - animItemHeight / animStart;  
            }
            

            if(animItemHeight > window.innerHeight){
                animItemPoint = 300+window.innerHeight - window.innerHeight / animStart;
                if (index == 4) {
                    animItemPoint = 200 + window.innerHeight - animItemHeight / animStart;  
                }
                if (index == 5) {
                    animItemPoint = 200 + window.innerHeight - animItemHeight / animStart;  
                }
            }


            if(pageYOffset > (animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');

                }
            }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 0);
 

}