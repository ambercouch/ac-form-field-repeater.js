            if ($('[data-ac-repeater]').length > 0){
                var cloneCount = 1;
                var adder = '<span id="acrAdder">Repeat fields</span>'
                var element = $('[data-ac-repeater]')
                var clone = element.clone();
                element.prepend(adder);

                $(document).on('click', '#acrAdder', function () {
                    console.log('clicker');
                    $('input',clone).each(function () {
                        var cloneName = $(this).attr('name');
                        var cloneNameNew = cloneName + cloneCount;
                        $(this).attr('name', cloneNameNew)

                    })
                    element.after(clone);
                        console.log(clone);
                    //element.after(clone);
                })
                console.log('repeater')

            }else {
                console.log('no repeater')

            };
