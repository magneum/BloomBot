<?php

echo share('test.rar');

function share($sFile)
{   
$cfile = new CURLFile($sFile,'file/rar','sample_name');
$request = curl_init('https://file.io/?expires=1m');
curl_setopt($request, CURLOPT_POST, true);
curl_setopt(
    $request,
    CURLOPT_POSTFIELDS,
    array(
      'file' => $cfile
    ));

curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
Return curl_exec($request);
curl_close($request);
}
?>
