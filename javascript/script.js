$(document).ready(function(){
    $('.slider-container').slick({
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        arrows: true,
        dots: true
    });
  });

  const dropDownButtons =     document.querySelectorAll('.expandButton');

  const expandingSections =
  document.querySelectorAll('.expandable')

  const slideOutButtons =     document.querySelectorAll('.slideButton');

  const expandingSlideSections =
  document.querySelectorAll('.expandableslide')
  
  console.log(dropDownButtons);
  
  function dropDownAnswer() {
    let targetExpandableDiv = this.dataset.targetButton; 
    
    dropDownButtons.forEach( button => {
        if (button.dataset.targetButton == targetExpandableDiv){
      button.classList.toggle('active')
    } else {
        button.classList.remove('active')

    }
    
})
    
    
    expandingSections.forEach(section => {
      if (targetExpandableDiv == section.dataset.targetMore){
        section.classList.toggle('collapse');
      }
      else {
        section.classList.add('collapse');
        // this.classList.remove('active');
      }
    })

  }

  function unsquish() {
    let targetExpandableDiv = this.dataset.targetButton; 
    
    slideOutButtons.forEach( button => {
        if (button.dataset.targetButton == targetExpandableDiv){
      button.classList.toggle('active')
    } else {
        button.classList.remove('active')
    }
    
})
    
    
    expandingSlideSections.forEach(section => {
      if (targetExpandableDiv == section.dataset.targetMore){
        section.classList.toggle('squishy');
      }
      else {
        section.classList.add('squishy');
        // this.classList.remove('active');
      }
    })

  }
  
  dropDownButtons.forEach(button => {
    button.addEventListener('click', dropDownAnswer)
  })

  
  slideOutButtons.forEach(button => {
    button.addEventListener('click', unsquish)
  })