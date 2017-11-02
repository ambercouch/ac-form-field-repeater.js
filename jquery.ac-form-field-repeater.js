/*!
 * AC Form Field repeater 0.0.1
 *
 * Copyright 2017, Richie Arnold and AmberCouch - http://ambercouch.co.uk
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 */

;(function( $ ){
    //Check for elements that need to repeat
    if ($('[data-ac-repeater]').length > 0){

        //Create a repeater object
        var repeater = {
        'clones' : []
        }

        //There may be more than one element that needs to repeat
        //so for each element
        $('[data-ac-repeater]').each(function (i) {

            var elementToRepeat = $(this);
            var repeaterText = elementToRepeat.attr('data-ac-repeater-text') ? elementToRepeat.attr('data-ac-repeater-text') : 'Repeat fields';
            var adderId = 'acAdder' + i;
            var adder = '<button id="'+adderId+'">'+repeaterText+'</button>'
            var adderPosition =  elementToRepeat.attr('data-ac-repeater-position') ? elementToRepeat.attr('data-ac-repeater-position') : 'prepend';
            var arrayName = elementToRepeat.attr('data-ac-repeater') ? elementToRepeat.attr('data-ac-repeater') : null;
            console.log('pos = ' + adderPosition );
            console.log('arrayName = ' + arrayName );

            //add the element to the list of clones
            repeater.clones.push(elementToRepeat);

            var settings = {
                'cloneCount' : 1,
                'cloneNames' : [],
                'element' : elementToRepeat,
                'repeaterText' : repeaterText,
                'adderId' : adderId,
                'adder' : adder,
                'adderPosition' : adderPosition,
                'arrayName' : arrayName
            }

            //Save the setting for this element in the repeater object
            repeater.clones[i].settings = settings;

            var cloneSettings = repeater.clones[i].settings;

            //Append the adder markup to the element in the document
            if (cloneSettings.adderPosition !== 'before'){
                elementToRepeat.append(cloneSettings.adder);
            }else {
                elementToRepeat.prepend(cloneSettings.adder);
            }

            //Get the current element from the repeater object and clone it
            var clone = cloneSettings.element.clone();

            $(document).on('click', '#'+adderId, function () {

                //Remove the adder
                $(this).remove();

                //if we don't have a list of name attributes for this clone
                if(cloneSettings.cloneNames.length == 0){
                    //create a list of input names from the clone
                    $('input',clone).each(function () {
                        cloneSettings.cloneNames.push($(this).attr('name'));
                    })

                    //update the current input names
                    $('input', cloneSettings.element).each(function()
                    {
                        if (cloneSettings.arrayName === null) {
                            $(this).attr('name', $(this).attr('name') + '-' + cloneSettings.cloneCount);
                        }else {
                            $(this).attr('name', cloneSettings.arrayName + '[' + cloneSettings.arrayName + cloneSettings.cloneCount + ']' +'[' +  $(this).attr('name') + ']');
                        }
                    });

                    cloneSettings.cloneCount = cloneSettings.cloneCount + 1;
                }

                //Updated the name attribute on each input element for the clone
                $('input',clone).each(function (i) {
                    var cloneName;

                    if (cloneSettings.arrayName === null){
                        cloneName   =  cloneSettings.cloneNames[i] + '-' + cloneSettings.cloneCount;
                    }else{
                        cloneName =  cloneSettings.arrayName + '['+ cloneSettings.arrayName + cloneSettings.cloneCount +'][' +cloneSettings.cloneNames[i] + ']'
                    }

                    $(this).attr('name', cloneName)
                })

                //Add the cloned element after the element that was cloned
                cloneSettings.element.after(clone);
                //Update the clone count
                cloneSettings.cloneCount = cloneSettings.cloneCount + 1

                //Reset the updated clone
                cloneSettings.element = clone;
                //Re clone the clone
                clone = $(clone).clone();

            });

        });



    };
    })( window.jQuery);
