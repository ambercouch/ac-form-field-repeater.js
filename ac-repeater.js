if ($('[data-ac-repeater]').length > 0){

                var cloneCount = 1;
                var cloneNames = []
                var element = $('[data-ac-repeater]')
                var repeaterText = element.attr('data-ac-repeater-text') ? element.attr('data-ac-repeater-text') : 'Repeat fields';
                var adder = '<span id="acrAdder">'+repeaterText+'</span>'

                element.prepend(adder);

                var clone = element.clone();

                $(document).on('click', '#acrAdder', function () {
                    $(this).remove();

                    if(cloneNames.length == 0){
                        console.log('cn empty')
                        $('input',clone).each(function () {
                            cloneNames.push($(this).attr('name'));
                        })
                    }

                    console.log(cloneNames);

                    $('input',clone).each(function (i) {

                        var cloneName =  cloneNames[i] + '-' + cloneCount;

                        $(this).attr('name', cloneName)
                    })


                    element.after(clone);
                    cloneCount = cloneCount + 1

                    element = clone;
                    clone = $(clone).clone();

                })

            };
