jQuery Character Counter
================

Add a live-updating character counter anywhere on a page to one or multiple text input fields, textareas.

Optional Parameters
================

<h3>maxLength</h3>

Is there a default allowed length for this text field?
Default: null

<h3>delimiter</h3>
If you have specified a maxLength and wish to modify the default styling 'x/y' to i.e. 'x of y', you may modify this parameter
Default: /

Example
================

<b>HTML</b>

    <textarea id="mytextarea"></textarea>
    <span data-charcounter-for="mytextarea"></span>

<b>Javascript</b>

    $("textarea").charCount();

Will initialize a character counter on the given elements. See the examples/ folder for more detailed examples.