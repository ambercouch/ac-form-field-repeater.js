//Check for elements that need to repeat
if ($('[data-ac-repeater]').length > 0){

    //Create a repeater object
    var repeater = {
    'clones' : []
    }

    //There may be more than one element that needs to repeat
    //so for each element
    $('[data-ac-repeater]').each(function (i) {

        var element = $(this);
        var repeaterText = element.attr('data-ac-repeater-text') ? element.attr('data-ac-repeater-text') : 'Repeat fields';
        var adderId = 'acAdder' + i;

        //add the element to the list of clones
        repeater.clones.push(element);

        var settings = {
            'cloneCount' : 1,
            'cloneNames' : [],
            'element' : element,
            'repeaterText' : repeaterText,
            'adderId' : adderId,
            'adder' : '<span id="'+adderId+'">'+repeaterText+'</span>'
        }

        //Save the setting for this element in the repeater object
        repeater.clones[i].settings = settings;

        var cloneSettings = repeater.clones[i].settings;

        //Prepend the adder markup to the element in the document
        element.prepend(cloneSettings.adder);

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
            }

            //Updated the name attribute on each input element for the clone
            $('input',clone).each(function (i) {

                var cloneName =  cloneSettings.cloneNames[i] + '-' + cloneSettings.cloneCount;

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
