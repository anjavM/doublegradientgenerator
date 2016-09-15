$(function() {

    var gradients = ["#74d4ce,#482f6c", "#2d785f,#81f619", "#a558af,#31cb8a", "#d4cc68,#da4a6d"];
    var gradient = gradients[Math.floor(Math.random()*gradients.length)];

    // randomized bg gradient!
    $('body').css({
        "background": "linear-gradient(" + gradient + ")",
        "background": "-o-linear-gradient(" + gradient + ")",
        "background": "-moz-linear-gradient(" + gradient + ")",
        "background": "linear-gradient(" + gradient + ")"
    });



    $('.color-one').colorpicker({
        container: true,
        inline: true
    });

    $('.color-two').colorpicker({
        container: true,
        inline: true
    });

    $('.fa-exchange').click(function() {
        var colorOne = $('.color-one input').val();
        var colorTwo = $('.color-two input').val();

        colorOne = [colorTwo, colorTwo = colorOne][0];

    });

    var textCode = $('.textcode');

    // ALL FUNCTIONS FOR GENERATING:
    function generate() {
        var colorOne = $('.color-one input').val();
        var colorTwo = $('.color-two input').val();
        var code = $('p.code');
        var preview = $('.previewgradient');


        preview.css({
            "background": "-webkit-linear-gradient(" + colorOne + "," + colorTwo + ")",
            "background": "-o-linear-gradient(" + colorOne + "," + colorTwo + ")",
            "background": "-moz-linear-gradient(" + colorOne + "," + colorTwo + ")",
            "background": "linear-gradient(" + colorOne + "," + colorTwo + ")"
        });

        code.html(
            "background: -webkit-linear-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background: -o-linear-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background: -moz-linear-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background: linear-gradient(" + colorOne + "," + colorTwo + ");"
        );

        textPreview.css ({
            "-webkit-background-clip": 'text',
            "-webkit-text-fill-color": "transparent",
            "background-image": "-webkit-linear-gradient(" + colorOne + "," + colorTwo + ")",
            "background-image": "-o-linear-gradient(" + colorOne + "," + colorTwo + ")",
            "background-image": "-moz-linear-gradient(" + colorOne + "," + colorTwo + ")",
            "background-image": "linear-gradient(" + colorOne + "," + colorTwo + ")"
        });

        textCode.html(
            "-webkit-background-clip: text; <br>" +
            "-webkit-text-fill-color: transparent; <br>" +
            "background-image: -webkit-linear-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -o-linear-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -moz-linear-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background-image: linear-gradient(" + colorOne + "," + colorTwo + ");"
        );

    }


    function generateRadial() {
        var colorOne = $('.color-one input').val();
        var colorTwo = $('.color-two input').val();

        var code = $('p.code');
        var preview = $('.previewgradient');

        code.html(
            "background: -webkit-radial-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background: -o-radial-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background: -moz-radial-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background: radial-gradient(" + colorOne + "," + colorTwo + ");"
        );

        preview.css({
            "background": "-radial-linear-gradient(" + colorOne + "," + colorTwo + ")",
            "background": "-o-radial-gradient(" + colorOne + "," + colorTwo + ")",
            "background": "-moz-radial-gradient(" + colorOne + "," + colorTwo + ")",
            "background": "radial-gradient(" + colorOne + "," + colorTwo + ")"
        });

        textPreview.css ({
            "-webkit-background-clip": 'text',
            "-webkit-text-fill-color": "transparent",
            "background-image": "-webkit-radial-gradient(" + colorOne + "," + colorTwo + ")",
            "background-image": "-o-radial-gradient(" + colorOne + "," + colorTwo + ")",
            "background-image": "-moz-radial-gradient(" + colorOne + "," + colorTwo + ")",
            "background-image": "radial-gradient(" + colorOne + "," + colorTwo + ")"
        });

        textCode.html(
            "-webkit-background-clip: text; <br>" +
            "-webkit-text-fill-color: transparent; <br>" +
            "background-image: -webkit-radial-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -o-radial-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -moz-radial-gradient(" + colorOne + "," + colorTwo + "); <br>" +
            "background-image: radial-gradient(" + colorOne + "," + colorTwo + ");"
        );
    }


    function generateVertical() {
        var colorOne = $('.color-one input').val();
        var colorTwo = $('.color-two input').val();

        var code = $('p.code');
        var preview = $('.previewgradient');

        preview.css({
            "background": "-webkit-linear-gradient(left," + colorOne + "," + colorTwo + ")",
            "background": "-o-linear-gradient(right," + colorOne + "," + colorTwo + ")",
            "background": "-moz-linear-gradient(right," + colorOne + "," + colorTwo + ")",
            "background": "linear-gradient(to right," + colorOne + "," + colorTwo + ")"
        });

        code.html(
            "background: -webkit-linear-gradient(left," + colorOne + "," + colorTwo + "); <br>" +
            "background: -o-linear-gradient(right," + colorOne + "," + colorTwo + "); <br>" +
            "background: -moz-linear-gradient(right," + colorOne + "," + colorTwo + "); <br>" +
            "background: linear-gradient(to right," + colorOne + "," + colorTwo + ");"
        );

        textPreview.css ({
            "-webkit-background-clip": 'text',
            "-webkit-text-fill-color": "transparent",
            "background-image": "-webkit-linear-gradient(left," + colorOne + "," + colorTwo + ")",
            "background-image": "-o-linear-gradient(right," + colorOne + "," + colorTwo + ")",
            "background-image": "-moz-linear-gradient(right," + colorOne + "," + colorTwo + ")",
            "background-image": "linear-gradient(to right," + colorOne + "," + colorTwo + ")"
        });

        textCode.html(
            "-webkit-background-clip: text; <br>" +
            "-webkit-text-fill-color: transparent; <br>" +
            "background-image: -webkit-radial-gradient(left," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -o-radial-gradient(right," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -moz-radial-gradient(right," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: radial-gradient(to right," + colorOne + "," + colorTwo + ");"
        );

    }

    function generateDownLeft() {
        var colorOne = $('.color-one input').val();
        var colorTwo = $('.color-two input').val();

        var code = $('p.code');
        var preview = $('.previewgradient');

        preview.css({
            "background": "-webkit-linear-gradient(-145deg," + colorOne + "," + colorTwo + ")",
            "background": "-o-linear-gradient(-145deg," + colorOne + "," + colorTwo + ")",
            "background": "-moz-linear-gradient(-145deg," + colorOne + "," + colorTwo + ")",
            "background": "linear-gradient(-145deg," + colorOne + "," + colorTwo + ")"
        });

        code.html(
            "background: -webkit-linear-gradient(-145deg" + colorOne + "," + colorTwo + "); <br>" +
            "background: -o-linear-gradient(-145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background: -moz-linear-gradient(-145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background: linear-gradient(-145deg," + colorOne + "," + colorTwo + ");"
        );

        textPreview.css ({
            "-webkit-background-clip": 'text',
            "-webkit-text-fill-color": "transparent",
            "background-image": "-webkit-linear-gradient(-145deg," + colorOne + "," + colorTwo + ")",
            "background-image": "-o-linear-gradient(-145deg," + colorOne + "," + colorTwo + ")",
            "background-image": "-moz-linear-gradient(-145deg," + colorOne + "," + colorTwo + ")",
            "background-image": "linear-gradient(-145deg," + colorOne + "," + colorTwo + ")"
        });

        textCode.html(
            "-webkit-background-clip: text; <br>" +
            "-webkit-text-fill-color: transparent; <br>" +
            "background-image: -webkit-radial-gradient(-145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -o-radial-gradient(-145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -moz-radial-gradient(-145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: radial-gradient(-145deg," + colorOne + "," + colorTwo + ");"
        );
    }

    function generateUpLeft() {
        var colorOne = $('.color-one input').val();
        var colorTwo = $('.color-two input').val();

        var code = $('p.code');
        var preview = $('.previewgradient');

        preview.css({
            "background": "-webkit-linear-gradient(-45deg," + colorOne + "," + colorTwo + ")",
            "background": "-o-linear-gradient(-45deg," + colorOne + "," + colorTwo + ")",
            "background": "-moz-linear-gradient(-45deg," + colorOne + "," + colorTwo + ")",
            "background": "linear-gradient(-45deg," + colorOne + "," + colorTwo + ")"
        });

        code.html(
            "background: -webkit-linear-gradient(-45deg" + colorOne + "," + colorTwo + "); <br>" +
            "background: -o-linear-gradient(-45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background: -moz-linear-gradient(-45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background: linear-gradient(-45deg," + colorOne + "," + colorTwo + ");"
        );

        textPreview.css ({
            "-webkit-background-clip": 'text',
            "-webkit-text-fill-color": "transparent",
            "background-image": "-webkit-linear-gradient(-45deg," + colorOne + "," + colorTwo + ")",
            "background-image": "-o-linear-gradient(-45deg," + colorOne + "," + colorTwo + ")",
            "background-image": "-moz-linear-gradient(-45deg," + colorOne + "," + colorTwo + ")",
            "background-image": "linear-gradient(-45deg," + colorOne + "," + colorTwo + ")"
        });

        textCode.html(
            "-webkit-background-clip: text; <br>" +
            "-webkit-text-fill-color: transparent; <br>" +
            "background-image: -webkit-radial-gradient(-45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -o-radial-gradient(-45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -moz-radial-gradient(-45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: radial-gradient(-45deg," + colorOne + "," + colorTwo + ");"
        );
    }

    function generateDownRight() {
        var colorOne = $('.color-one input').val();
        var colorTwo = $('.color-two input').val();

        var code = $('p.code');
        var preview = $('.previewgradient');

        preview.css({
            "background": "-webkit-linear-gradient(145deg," + colorOne + "," + colorTwo + ")",
            "background": "-o-linear-gradient(145deg," + colorOne + "," + colorTwo + ")",
            "background": "-moz-linear-gradient(145deg," + colorOne + "," + colorTwo + ")",
            "background": "linear-gradient(145deg," + colorOne + "," + colorTwo + ")"
        });

        code.html(
            "background: -webkit-linear-gradient(145deg" + colorOne + "," + colorTwo + "); <br>" +
            "background: -o-linear-gradient(145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background: -moz-linear-gradient(145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background: linear-gradient(145deg," + colorOne + "," + colorTwo + ");"
        );

        textPreview.css ({
            "-webkit-background-clip": 'text',
            "-webkit-text-fill-color": "transparent",
            "background-image": "-webkit-linear-gradient(145deg," + colorOne + "," + colorTwo + ")",
            "background-image": "-o-linear-gradient(145deg," + colorOne + "," + colorTwo + ")",
            "background-image": "-moz-linear-gradient(145deg," + colorOne + "," + colorTwo + ")",
            "background-image": "linear-gradient(145deg," + colorOne + "," + colorTwo + ")"
        });

        textCode.html(
            "-webkit-background-clip: text; <br>" +
            "-webkit-text-fill-color: transparent; <br>" +
            "background-image: -webkit-radial-gradient(145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -o-radial-gradient(145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -moz-radial-gradient(145deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: radial-gradient(145deg," + colorOne + "," + colorTwo + ");"
        );

    }


    function generateUpRight() {
        var colorOne = $('.color-one input').val();
        var colorTwo = $('.color-two input').val();

        var code = $('p.code');
        var preview = $('.previewgradient');

        preview.css({
            "background": "-webkit-linear-gradient(45deg," + colorOne + "," + colorTwo + ")",
            "background": "-o-linear-gradient(45deg," + colorOne + "," + colorTwo + ")",
            "background": "-moz-linear-gradient(45deg," + colorOne + "," + colorTwo + ")",
            "background": "linear-gradient(45deg," + colorOne + "," + colorTwo + ")"
        });

        textPreview.css ({
            "-webkit-background-clip": 'text',
            "-webkit-text-fill-color": "transparent",
            "background-image": "-webkit-linear-gradient(45deg," + colorOne + "," + colorTwo + ")",
            "background-image": "-o-linear-gradient(45deg," + colorOne + "," + colorTwo + ")",
            "background-image": "-moz-linear-gradient(45deg," + colorOne + "," + colorTwo + ")",
            "background-image": "linear-gradient(45deg," + colorOne + "," + colorTwo + ")"
        });

        code.html(
            "background: -webkit-linear-gradient(45deg" + colorOne + "," + colorTwo + "); <br>" +
            "background: -o-linear-gradient(45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background: -moz-linear-gradient(45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background: linear-gradient(45deg," + colorOne + "," + colorTwo + ");"
        );

        textCode.html(
            "-webkit-background-clip: text; <br>" +
            "-webkit-text-fill-color: transparent; <br>" +
            "background-image: -webkit-radial-gradient(45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -o-radial-gradient(45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: -moz-radial-gradient(45deg," + colorOne + "," + colorTwo + "); <br>" +
            "background-image: radial-gradient(45deg," + colorOne + "," + colorTwo + ");"
        );
    }

    $('.color-two').on('mousemove', function() {
        generate();
    });

    $('.color-one').on('mousemove', function() {
        generate();
    });

    var radial = $('input[value=radial]');
    var linear = $('input[value=linear]');
    var vertical = $('input[value=vertical]');
    var upLeft = $('input[value=diagonal-up-left]');
    var upRight = $('input[value=diagonal-up-right]');
    var downLeft = $('input[value=diagonal-down-left]');
    var downRight = $('input[value=diagonal-down-right]');

    radial.on('click', function() {
        if (radial.prop('checked'), true) {
            $('.color-two').on('mousemove', function() {
                generateRadial();
            });

            $('.color-one').on('mousemove', function() {
                generateRadial();
            });

            generateRadial();
        }
    });


    linear.on('click', function() {
        if (linear.prop('checked'), true) {
            $('.color-two').on('mousemove', function() {
                generate();
            });

            $('.color-one').on('mousemove', function() {
                generate();
            });

            generate();
        }
    });


    vertical.on('click', function() {
        if (radial.prop('checked'), true) {
            $('.color-two').on('mousemove', function() {
                generateVertical();
            });

            $('.color-one').on('mousemove', function() {
                generateVertical();
            });

            generateVertical();
        }
    });

    upLeft.on('click', function() {
        if (upLeft.prop('checked'), true) {
            $('.color-two').on('mousemove', function() {
                generateUpLeft();
            });

            $('.color-one').on('mousemove', function() {
                generateUpLeft();
            });

            generateUpLeft();
        }
    });


    upRight.on('click', function() {
        if (upRight.prop('checked'), true) {
            $('.color-two').on('mousemove', function() {
                generateUpRight();
            });

            $('.color-one').on('mousemove', function() {
                generateUpRight();
            });

            generateUpRight();
        }
    });

    downLeft.on('click', function() {
        if (downLeft.prop('checked'), true) {
            $('.color-two').on('mousemove', function() {
                generateDownLeft();
            });

            $('.color-one').on('mousemove', function() {
                generateDownLeft();
            });

            generateDownLeft();
        }
    });

    downRight.on('click', function() {
        if (downRight.prop('checked'), true) {
            $('.color-two').on('mousemove', function() {
                generateDownRight();
            });

            $('.color-one').on('mousemove', function() {
                generateDownRight();
            });

            generateDownRight();
        }
    });

    linear.on('click', function() {
        if (linear.prop('checked'), true) {
            $('.color-two').on('mousemove', function() {
                generate();
            });

            $('.color-one').on('mousemove', function() {
                generate();
            });

            generate();
        }
    });


    var code= $('.code');

    var clipboard = new Clipboard('.code');
    var copied = $('.copied');

    code.on('click', function () {
        clipboard.on('success', function(e) {
            copied.text('Copied automatically!');

            copied.css("display", "block");
            copied.fadeOut(1000);


         });

         clipboard.on('error', function(e) {
             copied.text('Error!');

             copied.css("display", "block");
             copied.fadeOut(1000);
         });
     });

     var textPreview = $('.text-preview p');
     var typeText = $('.typetext');
     var fontSize = $('.fontsize');

     typeText.on("keyup", function () {
         textPreview.text($(this).val());
     });


     fontSize.on("keyup", function(e) {
         textPreview.css ({
             "font-size": $(this).val()+ "px"
         });

         if ($(this).val() > 80) {
            textPreview.css ({
                "font-size": "80px"
            });
         }
     });


    var textClipboard = new Clipboard('.textcode');
    var textCopied = $('.text-copied');

         textCode.on('click', function () {
                textClipboard.on('success', function(e) {
                 textCopied.text('Copied automatically!');

                 textCopied.css("display", "block");
                 textCopied.fadeOut(1000);


              });

             textClipboard.on('error', function(e) {
                  textCopied.text('Error!');

                  textCopied.css("display", "block");
                  textCopied.fadeOut(1000);
              });
          });
});
