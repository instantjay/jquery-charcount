jQuery Character Counter
================

Add a live-updating character counter anywhere on a page to one or multiple text input fields, textareas.

Optional Parameters
================

<h3>maxLength</h3>
Is there a default allowed length for this text field?
Default: null

<h3>enforceMaxLength</h3>
Requires maxLength to be set. If you want to prevent input after maxLength has been reached, set this to true.
Default: false

<h3>maxLengthReachedCallback</h3>
Requires maxLength to be set. A callback that is triggered when the input hits the specified maxLength, and on every consecutive input that is above maxLength.
Default: null

<h3>delimiter</h3>
If you have specified a maxLength and wish to modify the default styling 'x/y' to i.e. 'x of y', you may modify this parameter.
Default: /

Example
================

<b>HTML</b>

    <textarea id="mytextarea"></textarea>
    <span data-charcounter-for="mytextarea"></span>

<b>Javascript</b>

    $("textarea").charCount();

Will initialize simple character counters on the matching elements, and link the output to each element matching it's ID.

    $("textarea").charCount({maxLength: 100, maxLengthReachedCallback: function(elem)
        {
            ...
        });
    }

Will initialize character counters on the matching elements, with the non-enforced maxLength of 100 characters. When maxLength is hit,
the code inside the callback will be fired.

See the examples/ folder for more detailed examples.