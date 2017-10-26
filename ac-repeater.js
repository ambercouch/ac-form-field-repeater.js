if ($('[data-ac-repeater]').length > 0){
    var repeater = {
        'clones' : []
    }

    $('[data-ac-repeater]').each(function (i) {

        repeater.clones.push($(this));

        repeater.clones[i].settings = 'tester' + i;

        var element = $(this);
        var repeaterText = element.attr('data-ac-repeater-text') ? element.attr('data-ac-repeater-text') : 'Repeat fields';
        var adderId = 'acAdder' + i;

        var settings = {
            'cloneCount' : 1,
            'cloneNames' : [],
            'element' : element,
            'repeaterText' : repeaterText,
            'adderId' : adderId,
            'adder' : '<span id="'+adderId+'">'+repeaterText+'</span>'
        }


        repeater.clones[i].settings = settings;

        var cloneSettings = repeater.clones[i].settings;

        console.log(cloneSettings.adder)

        element.prepend(cloneSettings.adder);

        var clone = cloneSettings.element.clone();

        $(document).on('click', '#'+adderId, function () {
            $(this).remove();

            if(cloneSettings.cloneNames.length == 0){
                console.log('cn empty')
                $('input',clone).each(function () {
                    cloneSettings.cloneNames.push($(this).attr('name'));
                })
            }

            console.log(cloneSettings.cloneNames);

            $('input',clone).each(function (i) {

                var cloneName =  cloneSettings.cloneNames[i] + '-' + cloneSettings.cloneCount;

                $(this).attr('name', cloneName)
            })


            cloneSettings.element.after(clone);
            cloneSettings.cloneCount = cloneSettings.cloneCount + 1

            cloneSettings.element = clone;
            clone = $(clone).clone();

        });

    });



};
