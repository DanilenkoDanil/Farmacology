const percent_animation = `
            <div class="percent-container">
    <button class="percent" id="percent5" style="background-image: url('../slides/Enterol2560/E1/5.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
                Reveal.next();
            }, 2000);
        "></button>
    <button class="percent" id="percent4" style="background-image: url('../slides/Enterol2560/E1/4.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
                Reveal.next();
            }, 2000);
        "></button>
    <button class="percent" id="percent3" style="background-image: url('../slides/Enterol2560/E1/3.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
                Reveal.next();
            }, 2000);
        "></button>
    <button class="percent" id="percent2" style="background-image: url('../slides/Enterol2560/E1/2.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
                Reveal.next();
            }, 2000);
        "></button>
    <button class="percent" id="percent1" style="background-image: url('../slides/Enterol2560/E1/1.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
                Reveal.next();
            }, 2000);
        "></button>
</div>
 `

const e_26 = `
    <div class="pill"
        onclick="addTemporarySlide({image: '/slides/Enterol2560/E (28).png', type: 'Enterol',})">
    </div>
    <div class="bubble-text"
        onclick="addTemporarySlide({image: '/slides/Enterol2560/E (27).png', type: 'Enterol',})">
    </div>
`

const e_42 = `
<div class="circle-buttons-container">
							<img src="./slides/Enterol v3/Е42/Group 81.png" class="circle-buttons" id="circle-btn-1" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (48).png', type: 'EnterolV3'});" />
							<img src="./slides/Enterol v3/Е42/Group 82.png" class="circle-buttons" id="circle-btn-2" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (46).png', type: 'EnterolV3'});" />
							<img src="./slides/Enterol v3/Е42/Group 83.png" class="circle-buttons" id="circle-btn-3" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (47).png', type: 'EnterolV3'});" />
							<img src="./slides/Enterol v3/Е42/Group 84.png" class="circle-buttons" id="circle-btn-4" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (49).png', type: 'EnterolV3'});" />
							<img src="./slides/Enterol v3/Е42/Group 85.png" class="circle-buttons" id="circle-btn-5" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (45).png', type: 'EnterolV3'});" />
							<img src="./slides/Enterol v3/Е42/Group 86.png" class="circle-buttons" id="circle-btn-6"
								 onclick="const slides6 = [
									{ type: 'EnterolV3', image: '/slides/Enterol v3/Е (50).png' },
									{ type: 'EnterolV3', image: '/slides/Enterol v3/Е (51).png' },
									{ type: 'EnterolV3', image: '/slides/Enterol v3/Е (52).png' },
									{ type: 'EnterolV3', image: '/slides/Enterol v3/Е (53).png' },
									{ type: 'EnterolV3', image: '/slides/Enterol v3/Е (54).png' },
									{ type: 'EnterolV3', image: '/slides/Enterol v3/Е (55).png' }
								];addTemporarySlides(slides6);" />
							<img src="./slides/Enterol v3/Е42/Group 87.png" class="circle-buttons" id="circle-btn-7" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (44).png', type: 'EnterolV3'});" />
							<img src="./slides/Enterol v3/Е42/Group 88.png" class="circle-buttons" id="circle-btn-8" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (43).png', type: 'EnterolV3'});" />
						</div>
`

const e_30 = `
    <div class="circle-buttons-container">
        <img src="./slides/Enterol v3/Е30/Group 74.png" class="circle-buttons2" id="circle-btn-21"
             onclick="const slidesBtn21 = [
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (31).png' },
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (32).png' }
            ];addTemporarySlides(slidesBtn21);" />
        <img src="./slides/Enterol v3/Е30/Group 75.png" class="circle-buttons2" id="circle-btn-22"
             onclick="const slidesBtn22 = [
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (33).png' },
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (34).png' }
            ];addTemporarySlides(slidesBtn22);" />
        <img src="./slides/Enterol v3/Е30/Group 76.png" class="circle-buttons2" id="circle-btn-23"
             onclick="const slidesBtn23 = [
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (35).png' },
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (36).png' }
            ];addTemporarySlides(slidesBtn23);" />
        <img src="./slides/Enterol v3/Е30/Group 77.png" class="circle-buttons2" id="circle-btn-24" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (41).png', type: 'EnterolV3'});" />
        <img src="./slides/Enterol v3/Е30/Group 78.png" class="circle-buttons2" id="circle-btn-25"
             onclick="const slidesBtn25 = [
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (37).png' },
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (38).png' }
            ];addTemporarySlides(slidesBtn25);" />
        <img src="./slides/Enterol v3/Е30/Group 79.png" class="circle-buttons2" id="circle-btn-26" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (39).png', type: 'EnterolV3'});" />
        <img src="./slides/Enterol v3/Е30/Group 80.png" class="circle-buttons" id="circle-btn-27" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (40).png', type: 'EnterolV3'});" />
    </div>
`

const m_1 = `
    <div class="m_1_button_ing"
        onclick="addTemporarySlides(arrayM1_1)">
    </div>
    <div class="m_1_button_asp"
        onclick="addTemporarySlides(arrayM1_2)">
    </div>
    <div class="m_1_button_izo"
        onclick="addTemporarySlides(arrayM1_3)">
    </div>
`


const a_1 = `

`