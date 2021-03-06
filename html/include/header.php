<!DOCTYPE html>
<html lang="ru">
  <head>
    <title><?=$title?></title>
    <meta charset="utf-8">
    <meta name="keywords" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <link rel="shortcut icon" href="images/favicons/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="images/favicons/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicons/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="images/favicons/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="96x96" href="images/favicons/android-chrome-96x96.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png">
    <link rel="manifest" href="images/favicons/manifest.json">
    <link rel="yandex-tableau-widget" href="images/favicons/yandex-browser-manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="images/favicons/mstile-144x144.png">
    <meta name="msapplication-config" content="images/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="/css/main.min.css">
    <link rel="stylesheet" href="/css/style.css?<?=rand()?>">
    <link rel="stylesheet" href="/css/media.css?<?=rand()?>">

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(62114872, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
    });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/62114872" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-163997531-1"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
     
    gtag('config', 'UA-163997531-1');
    </script>
  </head>
  <?php include dirname(__DIR__) . '/mail.php'; ?>