<?php defined('BASEPATH') or exit ('No se permite acceso directo');?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Plantilla MVC</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <base href="<?php echo BASE_DOMAIN_DIR_URL?>">
        <link rel="stylesheet" type="text/css" href="webroot/css/home.css">
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,700italic,400italic">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="icon" type="image/x-icon" href="webroot/img/fav-ico.ico">
        <script type="text/javascript" src="webroot/js/jquery-3.3.1.min.js"></script>
        <script type="text/javascript" src="webroot/js/home.js"></script>
    </head>
    <body>
        <header> 
            <nav id="navbar">
                <div id="nav-border"></div>
                <div id="enter">                
                    <div id="home">
                        <img class="nav-icon" src="webroot/img/homepage-icon.png">                  
                    </div>
                    <div onclick="inyectarModal()">LOG IN</div>                 
                    <div>USER</div>                                            
                </div>
                <div style="clear: both;"></div>    
            </nav>
            <div id= modal></div>
            <div id="crear-remedio" onclick="">
                <img src="webroot/img/crear_remedio.png">
            </div>
        </header>
        <main> 

            <?php echo $content_for_layout;?> 

        </main>
        
    </body>
</html>