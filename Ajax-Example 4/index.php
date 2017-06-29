<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        for($i=0;$i<30;$i++)
        {
            echo '<div class="fade" style="float: left;display: none;margin:10px;text-align: center;padding-top: 40px;background-color: red;width: 200px;height: 60px;">
                  Merhaba JQuery!
                  </div>';
        }
    ?>
-
    <script type="text/javascript" src="jquery-3.2.0.min.js"></script>
    <script type="text/javascript" src="fadeIn.js"></script>
</body>
</html>