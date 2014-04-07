jQuery Character Counter
================

Add a live-updating character counter anywhere on a page to one or multiple text input fields, textareas.

Optional Parameters
================

<h2>maxLength</h2>

Is there a default allowed length for this text field?
Default: null

<h2>delimiter</h2>
If you have specified a maxLength and wish to modify the default styling 'x/y' to i.e. 'x of y', you may modify this parameter
Default: /

How do I initialize one or more counters?
================

    $("textarea").charCount();

Will initialize a character counter with default options on the given elements. See the examples/ folder for more.