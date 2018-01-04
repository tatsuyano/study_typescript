import * as $ from 'jquery';
import  '../app/build/jquery.maxlength';

// $(() => {
//     $(document.body).html("hello");
// });

$('textarea.limited').maxlength({
    'feedback' : '.charsLeft'
});
