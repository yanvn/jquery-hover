(function($) {

    $(window).load(function() {

        var section     = $('#mbc-products');
        let hoverBoxes  = section.find('.hover_box');
        let boxes       = [];
        let profile     = [];
        let animate     = [];
        let colours     = [];
        let background  = [];
        let hover       = [];
        let tnKey       = null;
        let fxActive    = false;

        let total       = 8;
        let cols        = total / 2;
        let rows        = total / cols;
        let boxw        = section.width() / cols;
        let boxh        = section.height() / rows;

        //main background color
        background = ['#113362', '#007AC0'];

        //the colour of all the boxes are bellow here
        colours[0] = ['#131b47', '#1a4e8b'];
        colours[1] = '#1a4e8b';
        colours[2] = '#FFFFFF';
        colours[3] = '#23B5E9';
        colours[4] = '#FFFFFF';
        colours[5] = '#23B5E9';
        colours[6] = '#1079b2';
        colours[7] = '#FFFFFF';
        colours[8] = '#3d3a3e';

        profile[0] = { x1: 0, y1: 15, x2: 1, y2: 10, x3: -9, y3: 11, x4: 0, y4: 1 };
        profile[1] = { x1: 0, y1: 10, x2: 0, y2: 10, x3: 0, y3: 1, x4: -10, y4: 11 };
        profile[2] = { x1: 0, y1: 10, x2: 0, y2: 10, x3: 0, y3: 0, x4: 0, y4: 0 };
        profile[3] = { x1: 0, y1: 10, x2: 0, y2: 10, x3: 0, y3: 10, x4: 0, y4: 0 };
        profile[4] = { x1: 0, y1: 0, x2: -10, y2: 10, x3: 0, y3: -10, x4: 0, y4: -15 };
        profile[5] = { x1: -10, y1: 10, x2: 0, y2: 0, x3: 10, y3: -15, x4: 0, y4: -10 };
        profile[6] = { x1: 0, y1: 0, x2: 0, y2: 0, x3: 15, y3: -10, x4: 0, y4: -15 };
        profile[7] = { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: -10, x4: 0, y4: -10 };

        animate[0] = {
            0: { x1: 0, y1: 0, x2: 11, y2: 5, x3: 11, y3: 21, x4: 0, y4: 1 },
            1: { x1: 10, y1: 5, x2: 0, y2: 10, x3: 0, y3: 1, x4: 10, y4: 21 },
            4: { x1: 0, y1: 0, x2: 10, y2: 20, x3: 0, y3: -10, x4: 0, y4: 0 },
            5: { x1: 10, y1: 20, x2: 0, y2: 0, x3: 0, y3: -15, x4: 0, y4: -10 }
        };

        animate[2] = {
            3: { x1: 0, y1: 10, x2: 0, y2: 0, x3: 0, y3: 15, x4: 0, y4: 0 },
            7: { x1: 0, y1: 0, x2: 0, y2: 15, x3: 0, y3: -10, x4: 0, y4: -10 }
        }

        animate[3] = {
            0: { x1: 0, y1: 15, x2: 1, y2: 10, x3: 1, y3: 10, x4: 0, y4: 10 },
            1: { x1: 0, y1: 10, x2: 0, y2: 10, x3: 0, y3: 1, x4: 0, y4: 11 },
            4: { x1: 0, y1: -10, x2: 0, y2: 10, x3: 10, y3: -10, x4: 0, y4: 0 },
            5: { x1: 0, y1: 10, x2: 0, y2: 0, x3: 0, y3: -15, x4: 10, y4: -10 }
        };

        animate[4] = {
            0: { x1: 0, y1: 15, x2: 1, y2: 10, x3: -9, y3: 10, x4: 0, y4: 0 },
            1: { x1: 0, y1: 10, x2: 0, y2: 10, x3: 0, y3: 1, x4: -10, y4: 11 },
            4: { x1: 0, y1: 0, x2: -10, y2: 10, x3: 0, y3: 0, x4: 0, y4: -15 },
            5: { x1: -10, y1: 10, x2: 0, y2: 0, x3: 15, y3: -10, x4: 0, y4: 0 },
            6: { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: -10, x4: 15, y4: -10 }
        };

        animate[5] = {
            5: { x1: -10, y1: 10, x2: 0, y2: 0, x3: -15, y3: -15, x4: 0, y4: -10 },
            6: { x1: 0, y1: 0, x2: 0, y2: 0, x3: 10, y3: 0, x4: -20, y4: -15 },
            7: { x1: 0, y1: 0, x2: 0, y2: 0, x3: 0, y3: -10, x4: 10, y4: 0 }
        };

        animate[6] = {
            3: { x1: 0, y1: 10, x2: 0, y2: 10, x3: 0, y3: -15, x4: 0, y4: 0 },
            6: { x1: 0, y1: 0, x2: 0, y2: 0, x3: -15, y3: 0, x4: 0, y4: -15 },
            7: { x1: 0, y1: 0, x2: 0, y2: -20, x3: 0, y3: 0, x4: -15, y4: 0 }
        }

        let profileAni = jQuery.extend(true, {}, profile);

        section.prepend($('<canvas id="canvasHover"/>'));
        section.find('.mcb-section').css('background', 'none');
        section.find('#canvasHover').css('position', 'absolute');
        section.find('#canvasHover').css('width', '100%');

        var canvas  = document.getElementById('canvasHover');
        var ctx     = canvas.getContext('2d');

        canvas.width = section.width();
        canvas.height = section.height();

        prepare();

        function prepare(hoverKey, fprofile) {

            //ctx.clearRect(0, 0, canvas.width, canvas.height);

            var grd = ctx.createLinearGradient(0,0,170,0);
            grd.addColorStop(0, background[0]);
            grd.addColorStop(1, background[1]);
            ctx.fillStyle=grd;
            ctx.fillRect(0,0, canvas.width,canvas.height);

            var r = 0;
            var b = 0;

            for (key = 0; key < total; key++) {

                thekey = key;

                b = key > 0 ? b+1 : b;

                if (b == cols) {
                    b = 0; r++;
                }

                boxes[key] = {
                    x1: b * boxw, x2: b * boxw + boxw, x3: b * boxw + boxw, x4: b * boxw,
                    y1: r * boxh, y2: r * boxh, y3: r * boxh + boxh, y4: r * boxh + boxh
                };

                for (i=0; i <= 4; i++) {

                    var xProfile = fprofile ? fprofile : jQuery.extend(true, {}, profile);

                    if (xProfile[key]) {

                        var x = xProfile[key]['x'+i];
                        var y = xProfile[key]['y'+i];
                        if (typeof x == 'number') boxes[key]['x'+i] = boxes[key]['x'+i] + x;
                        if (typeof y == 'number') boxes[key]['y'+i] = boxes[key]['y'+i] + y;

                    }

                }

                var effect = {};
                effect.color = colours[key];
                effect.boxes = boxes[key];

                render(effect);

            };

        }

        function render(effect) {

            if (typeof effect.color !== 'string') {
                var grd = ctx.createLinearGradient(0,0,170,0);
                grd.addColorStop(0, effect.color[0]);
                grd.addColorStop(1, effect.color[1]);
                ctx.fillStyle=grd;
            }
            else ctx.fillStyle = effect.color;

            ctx.beginPath();
            ctx.moveTo(effect.boxes.x1, effect.boxes.y1);
            ctx.lineTo(effect.boxes.x2, effect.boxes.y2);
            ctx.lineTo(effect.boxes.x3, effect.boxes.y3);
            ctx.lineTo(effect.boxes.x4, effect.boxes.y4);
            ctx.closePath();
            ctx.fill();

        }

        function effectIn(key) {

            if (fxActive && key != null && key !== tnKey) {
                setTimeout(() => {
                    fxActive = false;
                    effectIn(key);
                }, 120);
                return false;
            }

            fxActive = true;
            tnKey = key;

            $.each(animate[key], function(k, aniVal) {

                $.each(aniVal, function(kval, bval) {
                    //if (k == 0 && kval == 'x2') console.log(profileAni[k][kval]);
                    if (bval < profileAni[k][kval]) profileAni[k][kval]--;
                    if (bval > profileAni[k][kval]) profileAni[k][kval]++;
                });

            });

            var tkey = jQuery.extend(true, {}, key);
            var tsprofile = jQuery.extend(true, {}, profileAni);

            prepare(tkey, tsprofile);

        }

        function effectOut(key) {

            fxActive = true;

            $.each(animate[key], function(k, aniVal) {
                $.each(aniVal, function(kval, bval) {
                    //if (k == 0 && kval == 'x2') console.log(profileAni[k][kval]);
                    if (bval <= profileAni[k][kval] && profileAni[k][kval] < profile[k][kval]) profileAni[k][kval]++;
                    if (bval >= profileAni[k][kval] && profileAni[k][kval] > profile[k][kval]) profileAni[k][kval]--;
                });
            });

            var tkey = jQuery.extend(true, {}, key);
            var tsprofile = jQuery.extend(true, {}, profileAni);

            prepare(tkey, tsprofile);

        }

        function effect(e, key) {

            switch(e) {

                case 'effectIn':
                    setTimeout(() => effectIn(key), 10);
                    setTimeout(() => effectIn(key), 20);
                    setTimeout(() => effectIn(key), 30);
                    setTimeout(() => effectIn(key), 40);
                    setTimeout(() => effectIn(key), 60);
                    setTimeout(() => effectIn(key), 80);
                    setTimeout(() => effectIn(key), 90);
                    setTimeout(() => effectIn(key), 100);
                    setTimeout(() => effectIn(key), 110);
                    setTimeout(() => effectIn(key), 120);
                    setTimeout(() => effectIn(key), 130);
                    setTimeout(() => effectIn(key), 140);
                    setTimeout(() => effectIn(key), 150);
                    setTimeout(() => effectIn(key), 160);
                    setTimeout(() => effectIn(key), 170);
                    setTimeout(() => effectIn(key), 180);
                    setTimeout(() => effectIn(key), 190);
                    setTimeout(() => effectIn(key), 200);
                    setTimeout(() => effectIn(key), 210);
                    setTimeout(() => effectIn(key), 220);
                    setTimeout(() => effectIn(key), 230);
                    setTimeout(() => effectIn(key), 240);
                    setTimeout(() => effectIn(key), 250);
                    setTimeout(() => fxActive = false, 250);
                    break;

                case 'effectOut':
                    setTimeout(() => effectOut(key), 5);
                    setTimeout(() => effectOut(key), 10);
                    setTimeout(() => effectOut(key), 15);
                    setTimeout(() => effectOut(key), 20);
                    setTimeout(() => effectOut(key), 25);
                    setTimeout(() => effectOut(key), 30);
                    setTimeout(() => effectOut(key), 35);
                    setTimeout(() => effectOut(key), 40);
                    setTimeout(() => effectOut(key), 45);
                    setTimeout(() => effectOut(key), 50);
                    setTimeout(() => effectOut(key), 55);
                    setTimeout(() => effectOut(key), 60);
                    setTimeout(() => effectOut(key), 65);
                    setTimeout(() => effectOut(key), 70);
                    setTimeout(() => effectOut(key), 75);
                    setTimeout(() => effectOut(key), 80);
                    setTimeout(() => effectOut(key), 85);
                    setTimeout(() => effectOut(key), 90);
                    setTimeout(() => effectOut(key), 100);
                    setTimeout(() => effectOut(key), 105);
                    setTimeout(() => effectOut(key), 110);
                    setTimeout(() => effectOut(key), 115);
                    setTimeout(() => effectOut(key), 120);
                    setTimeout(() => fxActive = false, 120);
                    break;

            }

        }

        $.each(hoverBoxes, function(key, hoverBox) {

            var box     = $(hoverBox);
            box.hover(() => {

                if (animate[key]) {

                    hover[key] = !hover[key] ? true : false

                    if (hover[key] == true) effect('effectIn', key);
                    if (hover[key] == false) effect('effectOut', key);

                }

            });

        });

  });


})(jQuery);
