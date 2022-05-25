const showSlideSix = () => {
    const slide_six = document.querySelector(".slide_six");
    const happy_birthday_image = document.querySelector(".happy_birthday_image");
    const happy_birthday_image_2 = document.querySelector(".happy_birthday_image_2");
    const gift_image = document.querySelector(".gift_image");
    const slide_six_one = document.querySelector(".slide_six_one");
    const slide_six_two = document.querySelector(".slide_six_two");
    const slide_six_three = document.querySelector(".slide_six_three");
    const slide_six_four = document.querySelector(".slide_six_four");
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");

    let slide_six_one_overshoot = 200;
    if (window.innerWidth < 480) {
        slide_six_one_overshoot = 40;
    }

    slide_six.style.display = "block";

    const happy_birthday_image_tl = anime.timeline({
        targets: happy_birthday_image,
        easing: 'easeOutElastic',
    })

    const happy_birthday_image_2_tl = anime.timeline({
        targets: happy_birthday_image_2,
        easing: 'easeOutElastic',
    })

    const gift_image_tl = anime.timeline({
        targets: gift_image,
        easing: 'easeOutElastic',
    })

    const slide_six_one_tl = anime.timeline({
        targets: slide_six_one,
        easing: 'easeInSine',
    })

    const slide_six_two_tl = anime.timeline({
        targets: slide_six_two,
        easing: 'easeInSine',
    })
    const slide_six_three_tl = anime.timeline({
        targets: slide_six_three,
        easing: 'easeInSine',
    })
    const slide_six_four_tl = anime.timeline({
        targets: slide_six_four,
        easing: 'easeInSine',
    })

    const right_tl = anime.timeline({
        targets: right,
        easing: 'easeInSine',
    })

    const left_tl = anime.timeline({
        targets:left,
        easing: 'easeInSine',
    })

    happy_birthday_image_tl
    .add({
        delay: 0,
        translateX: 400,
        translateY: -400,
        duration: 0,
        opacity: [0],
    })
    .add({
        translateX: 0,
        translateY: 0,
        delay: 500,
        duration: 500,
        opacity: [1],
    })
    happy_birthday_image_2_tl
    .add({
        delay: 0,
        translateY: -400,
        duration: 0,
        opacity: [0],
    })
    .add({
        translateY: 0,
        delay: 500,
        duration: 500,
        opacity: [1],
    })
    
    gift_image_tl
    .add({
        delay: 0,
        translateX: -400,
        translateY: 400,
        duration: 0,
        opacity: [0],
    })
    .add({
        translateX: 0,
        translateY: 0,
        delay: 500,
        duration: 500,
        opacity: [1],
    })

    slide_six_one_tl
    .add({
        translateX: -1000,
        delay: 0,
        duration: 0,
        opacity: [0]
    })
    .add({
        translateX: slide_six_one_overshoot,
        delay:1000,
        duration: 500,
        opacity: [1]
    })
    .add({
        translateX: 0,
        delay:500,
        duration: 100,
        opacity: [1]
    })

    slide_six_two_tl
    .add({
        translateX: 1000,
        delay: 0,
        duration: 0,
        opacity: [0],
        rotate: 90,
    })
    .add({
        delay: 1700,
        translateX: 0,
        duration: 400,
        opacity: [1]
    })

    slide_six_three_tl
    .add({
        translateX: -1000,
        delay: 0,
        duration: 0,
        opacity: [0],
    })
    .add({
        delay: 2400,
        translateX: 0,
        duration: 400,
        opacity: [1]
    })

    slide_six_four_tl
    .add({
        translateY: 100,
        delay: 0,
        duration: 0,
        opacity: [0],
    })
    .add({
        delay: 2400,
        translateY: 0,
        duration: 400,
        opacity: [1]
    })

    right_tl
    .add({
        translateX: -100,
        delay: 0,
        duration: 0,
        opacity: [0],
    })
    .add({
        delay: 3500,
        translateX: 0,
        duration: 400,
        opacity: [1]
    })

    left_tl
    .add({
        translateX: 100,
        delay: 0,
        duration: 0,
        opacity: [0],
    })
    .add({
        delay: 3500,
        translateX: 0,
        duration: 400,
        opacity: [1]
    })

}

const showSlideFive = () => {
    const slide_five = document.querySelector(".slide_five");

    slide_five.style.display = "block"; 

    const slide_five_tl = anime.timeline({
        targets: slide_five,
        easing: 'easeInSine',
        complete: function() {
            slide_five.style.display = "none"; 
            showSlideSix();
        }
    })

    slide_five_tl
    .add({
        delay: 0,
        duration: 0,
        opacity: [0],
    })
    .add({
        delay: 500,
        duration: 100,
        opacity: [1],
    })
    .add({
        delay: 2500,
        duration: 100,
        opacity: [0],
    })
    
}

const showSlideFour = () => {
    const slide_four = document.querySelector(".slide_four");
    const slide_four_one = document.querySelector(".slide_four_one");
    const slide_four_one_one = document.querySelector(".slide_four_one_one");
    const slide_four_two = document.querySelector(".slide_four_two");
    const slide_four_three = document.querySelector(".slide_four_three");
    const slide_four_four = document.querySelector(".slide_four_four");

    slide_four.style.display = "block"; 


    const slide_four_tl = anime.timeline({
        targets: slide_four,
        easing: 'easeInSine',
        complete: function() {
            slide_four.style.display = "none"; 
            showSlideFive();
        }
    })
    

    const slide_four_one_tl = anime.timeline({
        targets: slide_four_one,
        easing: 'easeOutElastic',
    })

    const slide_four_two_tl = anime.timeline({
        targets: slide_four_two,
        easing: 'easeInSine',
    })

    const slide_four_three_tl = anime.timeline({
        targets: slide_four_three,
        easing: 'easeInSine',
    })

    const slide_four_four_tl = anime.timeline({
        targets: slide_four_four,
        easing: 'easeInSine',
    })

    let loopCompleted = 0;
    const slide_four_one_one_tl = anime.timeline({
        targets: slide_four_one_one,
        easing: 'easeInSine',
        loop: 6,
        loopComplete: function(anim) {
        loopCompleted++;
        if (loopCompleted == 1) {
            slide_four_one_one.innerHTML = "Rejekinya";
            slide_four_one_one.style.color = "#04B100";
        } else if (loopCompleted == 2) {
            slide_four_one_one.innerHTML = "Lancar Kuliahnya";
            slide_four_one_one.style.color = "#E8007D";
        } else if (loopCompleted == 3) {
            slide_four_one_one.innerHTML = "Semangat di-Tim";
            slide_four_one_one.style.color = "#1300E8";
        } else if (loopCompleted == 4) {
            slide_four_one_one.innerHTML = "Tinggi badannya :D";
            slide_four_one_one.style.color = "#00A2E8";
        } else if (loopCompleted == 5) {
            slide_four_one_one.innerHTML = ".............";
            slide_four_one_one.style.color = "#E80000";
        }
        }
    })


    slide_four_one_tl
    .add({
        delay: 0,
        translateY: -500,
        duration: 0,
        opacity: [1],
    })
    .add({
        translateY: 0,
        duration: 500,
        opacity: [1],
    })

    slide_four_one_one_tl
    .add({
        delay: 0,
        translateY: 50,
        duration: 0,
        opacity: [0],
    })
    .add({
        delay: 1000,
        translateY: 0,
        duration: 100,
        opacity: [1],
    })
    .add({
        delay: 1000,
        translateY: -50,
        duration: 100,
        opacity: [0],
    })

    slide_four_two_tl
    .add({
        delay: 0,
        duration: 0,
        opacity: [0],
    })
    .add({
        delay: 9750,
        duration: 100,
        opacity: [1],
    })
    .add({
        delay: 1000,
        duration: 100,
        opacity: [0],
    })

    slide_four_three_tl
    .add({
        delay: 0,
        duration: 0,
        opacity: [0],
    })
    .add({
        delay: 9750,
        duration: 100,
        opacity: [1],
    })
    .add({
        delay: 1000,
        duration: 100,
        opacity: [0],
    })

    slide_four_four_tl
    .add({
        delay: 0,
        duration: 0,
        opacity: [0],
    })
    .add({
        translateY: -300,
        delay: 12000,
        duration: 100,
        opacity: [1],
    })
    .add({
        delay: 1000,
        duration: 100,
        opacity: [0],
    })

    slide_four_tl
    .add({
        delay: 14000,
        duration: 200,
        opacity: [0]
    })
}

const showSlideThree = () => {
    // SLIDE 3
    const slide_three = document.querySelector('.slide_three');
    const lonceng = document.querySelector('#lonceng');
    const foto = document.querySelector('#akilah');
    const terompet1 = document.querySelector('#terompet1');
    const terompet2 = document.querySelector('#terompet2');
    const message = document.querySelector('#message_text');
    const typingbox = document.querySelector('.typing_box');
    const send_button = document.querySelector(".send_button");
    

    slide_three.style.display = "flex";

    const slide_three_tl = anime.timeline({
        targets: slide_three,
        easing: 'easeInSine',
        complete: function() {
            slide_three.style.display = "none";   
            showSlideFour();
        }
    })


    const lonceng_tl = anime.timeline({
        targets: lonceng,
        easing: 'easeOutElastic',
    })
    
    const foto_tl = anime.timeline({
        targets: foto,
        easing: 'easeOutElastic',
    })

    const terompet1_tl = anime.timeline({
        targets: terompet1,
        easing: 'easeInSine',
    })

    const terompet2_tl = anime.timeline({
        targets: terompet2,
        easing: 'easeInSine',
    })

    const send_button_tl = anime.timeline({
        targets: send_button,
        easing: 'easeInSine',
    })

    const message_tl = anime.timeline({
        targets: message,
        easing: 'easeInSine',
        complete: function() {
            new TypeIt("#message", {
            }).go();        
        }
    })
    const typing_box_tl = anime.timeline({
        targets: typingbox,
        easing: 'easeInSine',
    })

    foto_tl
    .add({
        delay: 200,
        scale: 0,
        duration: 0,
        opacity: [0],

    })
    .add({
        scale: 1,
        duration: 1000,
        opacity: [1],

    })

    terompet2_tl
    .add({
        delay: 0,
        translateX: -1000,
        duration: 0,
        opacity: [0],

    })
    .add({
        translateX: 0,
        duration: 400,
        opacity: [1],

    })

    terompet1_tl
    .add({
        delay: 0,
        translateX: 1000,
        duration: 0,
        opacity: [0],

    })
    .add({
        translateX: 0,
        duration: 400,
        opacity: [1],

    })


    message_tl
    .add({
        delay: 800,
        translateX: -1000,
        duration: 0,
        opacity: [0],

    })
    .add({
        translateX: 0,
        duration: 400,
        opacity: [1],

    })

    typing_box_tl
    .add({
        delay: 800,
        translateX: -1000,
        duration: 0,
        opacity: [0],

    })
    .add({
        translateX: 0,
        duration: 400,
        opacity: [1],

    })

    send_button_tl
    .add({
        delay: 800,
        translateX: 1000,
        duration: 0,
        opacity: [0],

    })
    .add({
        translateX: 0,
        duration: 400,
        opacity: [1],

    })

    lonceng_tl
    .add({
        delay: 1600,
        translateX: 400,
        translateY: -400,
        rotate: 360,
        duration: 0,
        opacity: [0],
    })
    .add({
        translateY: 0,
        translateX: 0,
        duration: 2000,
        rotate: 0,
        opacity: [1],
        
    })

    slide_three_tl
    .add({
        delay: 6000,
        duration: 200,
        opacity: [0]
    })
    
}

const showSlideTwo = () => {
    // SLIDE 2
    const slide_two = document.querySelector('.slide_two');
    const slide_two_one = document.querySelector('.slide_two_one');
    const slide_two_two = document.querySelector('.slide_two_two');

    slide_two.style.display = "flex";

    const slide_two_one_tl = anime.timeline({
        targets: slide_two_one,
        easing: 'easeInSine',
    })

    const slide_two_two_tl = anime.timeline({
        targets: slide_two_two,
        easing: 'easeInSine',
        complete: function() {
            slide_two.style.display = "none";
            showSlideThree();
        }
    })

    slide_two_one_tl
    .add({
        delay: 0,
        translateY: -100,
        duration: 0,
        opacity: [0],
    })
    .add({
        translateY: 0,
        duration: 400,
        opacity: [1],
    })
    .add({
        delay: 2000,
        translateY: -100,
        duration: 400,
        opacity: [0],
    })

    slide_two_two_tl
    .add({
        delay: 0,
        translateY: 100,
        duration: 0,
        opacity: [0],

    })
    .add({
        translateY: 0,
        duration: 400,
        opacity: [1],

    })
    .add({
        delay: 2000,
        translateY: 100,
        duration: 400,
        opacity: [0],
    })
}

const showSlideOne = () => {
    // SLIDE 1
    const slide_one = document.querySelector('.slide_one');
    const slide_one_one = document.querySelector('.slide_one_one');
    const slide_one_two = document.querySelector('.slide_one_two');
    const slide_one_three = document.querySelector('.slide_one_three');

    slide_one.style.display = "flex";

    const slide_one_one_tl = anime.timeline({
        targets: slide_one_one,
        easing: 'easeInSine',
    })

    const slide_one_two_tl = anime.timeline({
        targets: slide_one_two,
        easing: 'easeInSine',
    })

    const slide_one_three_tl = anime.timeline({
        targets: slide_one_three,
        easing: 'easeInSine',
        complete: function() {
            slide_one.style.display = "none";
            showSlideTwo();
        }
    })

    slide_one_one_tl
    .add({
        delay: 0,
        translateX: -1000,
        duration: 0,
        opacity: [0],
    })
    .add({
        translateX: 0,
        duration: 600,
        opacity: [1],
    })
    .add({
        delay: 2000,
        translateX: -1000,
        duration: 400,
        opacity: [0],
    })

    slide_one_two_tl
    .add({
        delay: 0,
        translateX: 1000,
        duration: 0,
        opacity: [0],

    })
    .add({
        translateX: 0,
        duration: 600,
        opacity: [1],

    })
    .add({
        delay: 2000,
        translateX: 1000,
        duration: 400,
        opacity: [0],
    })

    slide_one_three_tl
    .add({
        delay: 0,
        translateY: 50,
        duration: 0,
        opacity: [0],
    })
    .add({
        delay: 600,
        translateY: 0,
        duration: 500,
        opacity: [1],
    })
    .add({
        delay: 1600,
        translateY: 50,
        duration: 400,
        opacity: [0],
    })
}

showSlideOne();