// www.github.com/instantjay/charcount

(function ( $ ) {
    $.fn.charCount = function (options) {
        function calculateCurrentLength(inputElement) {
            return inputElement.val().length;
        }

        function assignEventHandlers(inputElement, outputElement) {
            inputElement.on("keyup click", function(e) {
                var currentLength = calculateCurrentLength(inputElement);

                if(maxLength) {
                    if (currentLength >= maxLength) {
                        if(settings.enforceMaxLength) {
                            // If pasting text into the input field, we might overshoot the maxLength by a lot
                            var lengthDiff = maxLength - currentLength;

                            if(lengthDiff < 0) {
                                var newText = inputElement.val().slice(0, lengthDiff);
                                inputElement.val(newText);
                            }
                        }

                        outputElement.addClass("max-length-exceeded");
                    }
                    else {
                        outputElement.removeClass("max-length-exceeded");
                    }
                }

                $(".current-length", outputElement).text(calculateCurrentLength(inputElement));
            });
        }

        // Default options
        var settings = $.extend({
            maxLength: null,
            enforceMaxLength: false,
            delimiter: "/"
        }, options);

        for(i=0; i < this.length; i++) {
            // Initial setup
            var inputElement = $(this[i]);
            var counterOutputElement = $("[data-charcounter-for="+inputElement.attr('id')+"]");

            // Determine maxLength for this very instance
            var maxLength = settings.maxLength;
            if(inputElement.attr("data-max-length")) { // "Does user wish to override settings for this element?"
                maxLength = inputElement.attr("data-max-length");
            }

            // Add mark-up to the output element
            counterOutputElement.html("<span class='current-length'>0</span>");

            if(maxLength !== null) {
                counterOutputElement.append(settings.delimiter);
                counterOutputElement.append("<span class='max-length'>"+maxLength+"</span>");
            }

            // Assign event bindings
            assignEventHandlers(inputElement, counterOutputElement);

            // Do first-time char count of element
            inputElement.click(); // I wanna get rid of this hack-ish solution to init the counters
        }

        return this;
    };
}(jQuery));