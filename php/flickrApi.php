<?php
header('Access-Control-Allow-Origin: *');
$url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd9b83549e96136e3a4a5c5748f5cf4e&tags=tudublin&format=json&nojsoncallback=1';

$dataResponse = json_decode(file_get_contents($url));

$pictures = $dataResponse->photos->photo;
$urls = array();
foreach ($pictures as $photo) {
    $farmId = $photo->farm;
    $serverId = $photo->server;
    $photoId = $photo->id;
    $secret = $photo->secret;

    $photoUrl = 'https://farm' .$farmId. '.staticflickr.com/' .$serverId. '/' .$photoId. '_' .$secret. '_c.jpg';
    array_push($urls, $photoUrl);
}
    print(json_encode($urls))


?>
