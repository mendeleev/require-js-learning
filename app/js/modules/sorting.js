/**
 * Created by anton on 27.03.16.
 */

define("modules/sorting", ['jquery'], function ($) {

    console.log('sorting');

    //return {
    //    getComparator : getComparator
    //};

    var $content = $('.gallery');

    $('#sort').on('change', function() {
        var comparator = getComparator($(this).val(), $(this).siblings(':checked').val());
        var array = $('.item');
        array.sort(comparator);
        $content.append(array);
    });

    $('[name="order"]').on("change", function () {
        var comparator = getComparator($(this).siblings('#sort').val(), $(this).val());
        var array = $('.item');
        array.sort(comparator);
        $content.append(array);
    });

    function compareACS(a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
            return b.localeCompare(a);
        } else if (typeof a === 'number' && typeof b === 'number') {
            return a-b;
        }
    }

    function compareDESC(a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
            return a.localeCompare(b);
        } else if (typeof a === 'number' && typeof b === 'number') {
            return b-a;
        }
    }

    function sortCounter(a, b, compare) {
        var counterA = parseInt($(a).children('.counter').html());
        var counterB = parseInt($(b).children('.counter').html());

        return compare(counterA, counterB);
    }

    function sortNick(a, b, compare) {
        var counterA = $(a).children('.nick').html();
        var counterB = $(b).children('.nick').html();

        return compare(counterB, counterA);
    }

    function sortId(a, b, compare) {
        var counterA = parseInt($(a).children('.counter').attr('id'));
        var counterB = parseInt($(b).children('.counter').attr('id'));

        return compare(counterA, counterB);
    }

    function getComparator(criteria, order) {
        var comparator;
        switch (criteria) {
            case 'id' :
            {
                comparator = sortId;
                break;
            }
            case 'counter' : {
                comparator = sortCounter;
                break;
            }

            case 'nick' : {
                comparator = sortNick;
                break;
            }

            default: {
                comparator = sortId;
                break;
            }
        }

        var compare;
        switch (order) {
            case 'ACS': {
                compare = compareACS;
                break;
            }
            case 'DESC' : {
                compare = compareDESC;
                break;
            }
            default : {
                compare = compareACS;
                break;
            }
        }

        return function (a, b) {
            return comparator(a, b, compare);
        }
    }

    function swap(a, b) {
        $(a).animate({
            top: $(b).offset().top,
            left: $(b).offset().left
        }, 500);


        $(a).animate({
            top: $(b).offset().top,
            left: $(b).offset().left
        }, 500);
    }
});
