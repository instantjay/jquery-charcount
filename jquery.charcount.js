// www.github.com/instantjay/charcount

(function ( $ ) {
    $.fn.charCount = function (options) {

        // Default options
        var settings = $.extend({
            maxLength: null,
            delimiter: "/"
        }, options);

        for(i=0; i < this.length; i++) {
            // Initial setup
            var charCounter = $("[data-charcounter-for="+this[i].id+"]");

            charCounter.html("<span class='current-length'>0</span>");

            if(settings.maxLength !== null) {
                charCounter.append(settings.delimiter);
                charCounter.append("<span class='max-length'>"+settings.maxLength+"</span>");
            }

            // Assign event bindings
            var textFieldId = this[i].id;

            $("[id="+this[i].id+"]").on("keyup click", function(e) {
                var currentLength = $("[id="+textFieldId+"]").val().length;

                $(".current-length", charCounter).text(currentLength);

                if(settings.maxLength) {
                    if (currentLength > settings.maxLength) {
                        charCounter.addClass("max-length-exceeded");
                    }
                    else {
                        charCounter.removeClass("max-length-exceeded");
                    }
                }
            });

            this[i].click();
        }

        return this;
    };
}(jQuery));