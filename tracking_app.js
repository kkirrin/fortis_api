jQuery(document).ready(function($) {

    $("#form-vagons").submit(function() {
        var th = $(this),
        vagon_no = th.find('[name="vagon_no"]').val();
        console.log(th)
        // console.log(vagon_no )
        $.ajax({
            type: "GET",
            url: "tracking_handler.php",
            data: { vagon_no: vagon_no },
            success: function(response) {
                // console.log(response)
                

                // Remove alert if exists
                if(document.querySelectorAll('.alert').length > 0) {
                  document.querySelectorAll('.alert').forEach((alert) => {
                      alert.remove();
                  });
                }
                response = JSON.parse(response)

                var vagon_no = '"' + response.vagon_no[0] + '"',
                    vagon_eta = '"' + response.eta[0] + '"',
                    current_position_latitude = '"' + response.current_position_latitude[0] + '"',
                    current_position_longitude = '"' + response.current_position_longitude[0] + '"';


                $('#table-vagons').removeClass('hidden');
                $('#vagon_no').text(vagon_no);
                $('#from_name').text(response.from_name[0]);
                $('#to_name').text(response.to_name[0]);
                $('#send_date').text(response.send_date[0]);
                $('#current_position').text(response.current_position[0]);
                $('#current_position_date').text(response.current_position_date[0]);
                $('#operation').text(response.operation[0]);
                $('#distance_end').text(response.distance_end[0]);
                $('#state').text(response.state[0]);
                $('#eta').text(vagon_eta);

                if ($('#vagonMap').length) {
                    $('#vagonMap').remove();
                }

                $('.wagon-map-wrap').append('<div id="vagonMap"></div>');

                var script = document.createElement('script');

                var map_script = 'ymaps.ready(function(vagon_no) {\n' +
                    'var vagonMap = new ymaps.Map("vagonMap", {\n' +
                    '    center: [' + current_position_latitude + ',' + current_position_longitude + ']' + ',\n' +
                    '    zoom: 11\n' +
                    '});\n' +
                    'var vagonPlacemark = new ymaps.Placemark(vagonMap.getCenter(), {\n' +
                    '    balloonContentHeader: ' + vagon_no + ',\n' +
                    '    balloonContentBody: \'Ориентировочная дата прибытия: ' + vagon_eta + '\'\n' +
                    '}, {\n' +
                    '    balloonPanelMaxMapArea: 0\n' +
                    '});\n' +
                    '\n' +
                    'vagonMap.geoObjects.add(vagonPlacemark);\n' +
                    '\n' +
                    '// Балун откроется в точке «привязки» балуна — т. е. над меткой.\n' +
                    'vagonPlacemark.balloon.open();\n' +
                '});';
                
                script.innerHTML = map_script;
                document.head.appendChild(script);
                
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 2000);
            },
            error: function(error){
                // Hide table and remove map if exists
                console.log(error)
                if ($('#vagonMap').length) {
                    document.getElementById('table-vagons').classList.add('hidden');
                    document.getElementById('vagonMap').remove();
                }

                // Remove alert if exists
                if(document.querySelectorAll('.alert').length > 0) {
                    document.querySelectorAll('.alert').forEach((alert) => {
                        alert.remove();
                    });
                }

                // Create alert div
                const div = document.createElement('div');
                // Add class
                div.className = 'alert';
                // Set content
                div.textContent = 'Номер вагона введен неверно';
                // Append alert
                document.getElementById('form-vagons').appendChild(div);
            }
        });
    return false;
    });


});
