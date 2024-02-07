<?php
    $env = parse_ini_file('.env');
    $login = $env['USERNAME'];
    $password = $env['PASSWORD'];

    $vagon_no = htmlspecialchars(trim($_GET["vagon_no"]));
    // print_r($vagon_no);

    $ar_vagon_data = array();

    // Get vagon data
    $xml_str = file_get_contents('https://www.railwagonlocation.com/xml/export.php?name='.$login.'&password='.$password.'&request_type=get_one_vagon&vagon_no=' . $vagon_no);
    // $xml_str = file_get_contents('https://www.railwagonlocation.com/xml/export.php?name=ves_XML&password=HkJQtuxW&request_type=get_one_vagon&vagon_no=' . $vagon_no);
    // print_r($xml_str);
    $xml = simplexml_load_string($xml_str);
    // ves_XML
    // HkJQtuxW

        if(!isset($xml->vagon) || $xml->vagon == '') {
            http_response_code(404);
            exit;
        }
       // Номер вагона
       $ar_vagon_data['vagon_no'] = $xml->vagon->vagon_info->vagon_no;
       // Станция отправления
       $ar_vagon_data['from_name'] = $xml->vagon->vagon_info->from_name;
       // Станция назначения
       $ar_vagon_data['to_name'] = $xml->vagon->vagon_info->to_name;
       // Дата отправки
       $ar_vagon_data['send_date'] = $xml->vagon->vagon_info->send_date;
       // Станция последней операции
       $ar_vagon_data['current_position'] = $xml->vagon->position->current_position;
       // Дата и время последней операции
       $ar_vagon_data['current_position_date'] = $xml->vagon->position->current_position_date;
       // Последняя операция с вагоном
       $ar_vagon_data['operation'] = $xml->vagon->position->operation;
       // Расстояние до станции назначения
       $ar_vagon_data['distance_end'] = $xml->vagon->position->distance_end;
       // Груз
       $ar_vagon_data['state'] = $xml->vagon->position->state;
       // Широта текущего местоположения
       $ar_vagon_data['current_position_latitude'] = $xml->vagon->position->current_position_latitude;
       // Долгота текущего местоположения
       $ar_vagon_data['current_position_longitude'] = $xml->vagon->position->current_position_longitude;
       // Дата примерного прибытия
       $ar_vagon_data['eta'] = $xml->vagon->vagon_info->eta;

    echo json_encode($ar_vagon_data);



?>

