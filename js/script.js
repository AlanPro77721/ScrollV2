document.addEventListener('DOMContentLoaded', () => {

    //Registrar Plugin//
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin); //Registro tambien ScrollToPlugin//

    //Variable de botones//
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    let menuOpen = false;

    //Animacion para container2//
    gsap.fromTo("#container2 h2", 
        { //Posiciones iniciales//
            x: -200,
            opacity: 0,
        },
        { //Posiciones finales//
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#container2 h2",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play reverse play reverse" //ciclo//
            }
        }
    ); //Aqui acaba la animacion 1//

    gsap.fromTo("#container3 h2", 
        { //Posiciones iniciales//
            x: 200,
            opacity: 0,
        },
        { //Posiciones finales//
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#container3 h2",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play reverse play reverse" //ciclo//
            }
        }
    );

    gsap.fromTo("#container4 h2", 
        { //Posiciones iniciales//
            y: 200,
            opacity: 0,
        },
        { //Posiciones finales//
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#container4 h2",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play reverse play reverse" //ciclo//
            }
        }
    );

    gsap.fromTo("#container1 h1", 
        { //Posiciones iniciales//
            y: -200,
            opacity: 0,
        },
        { //Posiciones finales//
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#container1 h1",
                start: "bottom 80%",
                end: "bottom 30%",
                toggleActions: "play reverse play reverse" //ciclo//
            }
        }
    );

    //Animar el cuadro//
    gsap.to("#cuadroScroll", {
        rotation: 360,
        backgroundColor: "#000000", 
        ease: "none",
        scrollTrigger:{
            trigger: "body",
            start: "top",
            end: "bottom bottom",
            scrub: true //Sincroniza todo con el movimiento del scroll//
        }
    });


    gsap.to("#cuadroScroll2", {
        rotation: 360,
        x: 1420,
        duration: 6,
        backgroundColor: "#000000", 
        ease: "none",
        scrollTrigger:{
            trigger: "body",
            start: "left",
            end: "right bottom",
            scrub: true //Sincroniza todo con el movimiento del scroll//
        }
    });

    //Animacion de menu lateral//
    const menuTween = gsap.to(sideMenu, { //Propiedades de la animacion//
        x: -300,
        duration: 0.5,
        paused: true,
        ease: "power2.out"
    });

    menuBtn.addEventListener('click', () =>{
        menuOpen = !menuOpen; //Invirtiendo el valor logico//

        if(menuOpen){
            menuTween.play();
        }else{
            menuTween.reverse();
        }
    });

    //Scroll a secciones de mi index//

    document.querySelectorAll('#sideMenu button') .forEach(btn => {
        btn.addEventListener('click', () =>{
            const target = document.querySelector(btn.dataset.target);

            if(target){
                gsap.to( window, {
                    scrollTo: {
                        y:target,
                        offsetY: 0
                    },
                    duartion: 1,
                    ease:"power2.inOut"
                }

                );

                menuTween.reverse();
                menuOpen = false;
            }
        });
    });

});