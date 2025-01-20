const mapping = {
    pediatr: [
        {
            image: "/slides/Enterol2560/E (1).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (2).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (25).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (5).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (20).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (19).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (21).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (26).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (8).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (9).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (11).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (13).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (14).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (6).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (5).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (23).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (2).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (18).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (16).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (17).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (23).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Bebykol2560/Б (3).png",
            type: "Bebykol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Bebykol2560/Б (4).png",
            type: "Bebykol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (7).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (2).png",
            type: "Otipax",
            special_animation: 'Base'
        }
    ],
    gastro: [
        {
            image: "/slides/Enterol2560/E (1).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (2).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (20).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (19).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (21).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (22).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (26).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Asacol/A (0).png",
            type: "Asacol",
            special_animation: "Special",
            animation_file: `
                <div class="background-container" >
                <img class="image" src='/Farmacology/slides/Asacol/A (0).png'>
                    <div class="visit-container" style="
                        position: absolute;
                        top: 50%; /* Центровка кнопок */
                        left: 50%;
                        transform: translate(-50%, -50%);
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        ">

                        <button class="visit" id="visit1" onclick="slideToStart()"></button>
                        <button class="visit" id="visit2" onclick="loadSlides('slide-0')"></button>
                        <button class="visit" id="visit3" onclick="loadSlides('slide-0')"></button>
                        <button class="visit" id="visit4" onclick="loadSlides('slide-0')"></button>
                        <button class="visit" id="visit5" onclick="loadSlides('slide-0')"></button>
                    </div>

                    <button class="invisible-button" onclick="slideToStart();"></button>
                    <button class="invisible-left-button" onclick="Reveal.prev();"></button>
                    <button class="invisible-right-button" onclick="Reveal.next();"></button>
            </div>`
        },
        {
            image: "/slides/Stresam2560/C (14).png",
            type: "Stresam",
            special_animation: 'Base'
        },
        {
            image: "/slides/Stresam2560/C (1).png",
            type: "Stresam",
            special_animation: 'Base'
        },
        {
            image: "/slides/Stresam2560/C (12).png",
            type: "Stresam",
            special_animation: 'Base'
        },
        {
            image: "/slides/Stresam2560/C (1).png",
            type: "Stresam",
            special_animation: 'Base'
        }
    ],
    pediatric_gastro: [
        {
            image: "/slides/Enterol2560/E (1).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (2).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (20).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (19).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (21).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (22).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (26).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Bebykol2560/Б (4).png",
            type: "Bebykol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Bebykol2560/Б (6).png",
            type: "Bebykol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Bebykol2560/Б (8).png",
            type: "Bebykol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Asacol/A (0).png",
            type: "Asacol",
            special_animation: 'Base'
        }
    ],
    advanced_family: [
        {
            image: "/slides/Enterol2560/E (1).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (2).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (20).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (19).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (5).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (18).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (21).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (22).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (9).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Stresam2560/C (2).png",
            type: "Stresam",
            special_animation: 'Base'
        },
        {
            image: "/slides/Stresam2560/C (11).png",
            type: "Stresam",
            special_animation: 'Base'
        },
        {
            image: "/slides/Stresam2560/C (1).png",
            type: "Stresam",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (1).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (5).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (6).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (7).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (15).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (16).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/ACerumen2560/АЦ (1).png",
            type: "ACerumen",
            special_animation: 'Base'
        }
    ],
    beginner_family: [
        {
            image: "/slides/Enterol2560/E (1).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (2).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (5).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (6).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (3).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (4).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (7).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (9).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Stresam2560/C (2).png",
            type: "Stresam",
            special_animation: 'Base'
        },
        {
            image: "/slides/Stresam2560/C (11).png",
            type: "Stresam",
            special_animation: 'Base'
        },
        {
            image: "/slides/Stresam2560/C (1).png",
            type: "Stresam",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (1).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (5).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (6).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (7).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (15).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (16).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/ACerumen2560/АЦ (2).png",
            type: "ACerumen",
            special_animation: 'Base'
        }
    ],
    ent: [
        {
            image: "/slides/Marimer2560/M (2).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (18).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (16).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (17).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Marimer2560/M (23).png",
            type: "Marimer",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (4).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (5).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (6).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (7).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/Otipax2560/O (2).png",
            type: "Otipax",
            special_animation: 'Base'
        },
        {
            image: "/slides/ACerumen2560/АЦ (1).png",
            type: "ACerumen",
            special_animation: 'Base'
        },
        {
            image: "/slides/ACerumen2560/АЦ (2).png",
            type: "ACerumen",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (9).png",
            type: "Enterol",
            special_animation: 'Base'
        },
        {
            image: "/slides/Enterol2560/E (26).png",
            type: "Enterol",
            special_animation: 'Base'
        },
    ]
}



const slideButtonConfig = {
    Enterol: [
        { id: 'btn-back', icon: '/Farmacology/slides/Enterol2560/1icons/svg/logout-circle-1.svg', x: 8, y: 84, width: 5, height: 5, action: 'Reveal.prev();' },
        { id: 'btn-home', icon: '/Farmacology/slides/Enterol2560/1icons/svg/home-door.svg', x: 14, y:84, width: 5, height: 5, action: "addTemporarySlide({image: '/slides/Enterol2560/E (1).png', type: 'Enterol',});" },
        { id: 'btn-info', icon: '/Farmacology/slides/Enterol2560/1icons/svg/info.svg', x: 19, y: 84, width: 5, height: 5, action: "addTemporarySlide({image: '/slides/Enterol2560/E (Ssi).png', type: 'Enterol',});" },
        { id: 'btn-settings', icon: '/Farmacology/slides/Enterol2560/1icons/svg/clip_path_group.svg', x: 24, y:84, width: 5, height: 5, action: "addTemporarySlide({image: '/slides/Enterol v3/E (30).png', type: 'EnterolV3',});" },
        { id: 'btn-star', icon: '/Farmacology/slides/Enterol2560/1icons/svg/Shape.svg', x: 29, y: 84, width: 5, height: 5, action: "addTemporarySlide({image: '/slides/Enterol v3/Е (42).png', type: 'EnterolV3',});" },
        { id: 'btn-next', icon: '/Farmacology/slides/Enterol2560/1icons/svg/logout-circle.svg', x: 34, y: 84, width: 5, height: 5, action: 'Reveal.next();' },
    ],
    EnterolV3: [
        { id: 'btn-back', icon: '/Farmacology/slides/Enterol2560/1icons/svg/logout-circle-1.svg', x: 34, y: 86, width: 5, height: 5, action: 'Reveal.prev();' },
        { id: 'btn-home', icon: '/Farmacology/slides/Enterol2560/1icons/svg/home-door.svg', x: 40, y:86, width: 5, height: 5, action: "addTemporarySlide({image: '/slides/Enterol v3/E (30).png', type: 'Enterol',});" },
        { id: 'btn-info', icon: '/Farmacology/slides/Enterol2560/1icons/svg/info.svg', x: 46, y: 86, width: 5, height: 5, action: "addTemporarySlide({image: '/slides/Enterol v3/E (42).png', type: 'EnterolV3',});" },
        { id: 'btn-settings', icon: '/Farmacology/slides/Enterol2560/1icons/svg/clip_path_group.svg', x: 52, y:86, width: 5, height: 5, action: "addTemporarySlide({image: '/slides/Enterol2560/E (1).png', type: 'Enterol',});" },
        { id: 'btn-star', icon: '/Farmacology/slides/Enterol2560/1icons/svg/Shape.svg', x: 58, y: 86, width: 5, height: 5, action: "addTemporarySlide({image: '/slides/Enterol2560/E (Ssi).png', type: 'Enterol',});" },
        { id: 'btn-next', icon: '/Farmacology/slides/Enterol2560/1icons/svg/logout-circle.svg', x: 64, y: 86, width: 5, height: 5, action: 'Reveal.next();' },
    ],
    Bebykol: [
        { id: 'btn-back', icon: '/Farmacology/slides/Bebykol2560/icons/545330_2024.png', x: 7, y: 84, width: 5, height: 5, action: 'Reveal.prev();' },
        { id: 'btn-star', icon: '/Farmacology/slides/Bebykol2560/icons/232324.png', x: 10, y: 84, width: 5, height: 5, action: 'Reveal.next();' },
        { id: 'btn-home', icon: '/Farmacology/slides/Bebykol2560/icons/323234.png', x: 14.8, y: 84, width: 5, height: 5, action: 'Reveal.slide(0);' },
        { id: 'btn-info', icon: '/Farmacology/slides/Bebykol2560/icons/14.png', x: 18.8, y: 84, width: 5, height: 5, action: 'Reveal.slide(0);' },
        { id: 'btn-settings', icon: '/Farmacology/slides/Bebykol2560/icons/Bebykol_2560_1600_2024.png', x: 22.8, y: 84, width: 5, height: 5, action: 'Reveal.slide(0);' },
    ],
    Stresam: [
        { id: 'btn-back', icon: '/Farmacology/slides/Bebykol2560/icons/545330_2024.png', x: 7, y: 84, width: 5, height: 5, action: 'Reveal.prev();' },
        { id: 'btn-star', icon: '/Farmacology/slides/Bebykol2560/icons/232324.png', x: 9.8, y: 84, width: 5, height: 5, action: 'Reveal.next();' },
        { id: 'btn-home', icon: '/Farmacology/slides/Bebykol2560/icons/323234.png', x: 13.8, y: 84, width: 5, height: 5, action: 'Reveal.slide(0);' },
        { id: 'btn-info', icon: '/Farmacology/slides/Bebykol2560/icons/14.png', x: 17.8, y: 84, width: 5, height: 5, action: 'Reveal.slide(0);' },
        { id: 'btn-settings', icon: '/Farmacology/slides/Bebykol2560/icons/Bebykol_2560_1600_2024.png', x: 21.8, y: 84, width: 5, height: 5, action: 'Reveal.slide(0);' },
    ],
};


