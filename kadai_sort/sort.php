<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>PHP基礎編</title>
</head>
<body>
    <p>
        <?php
        
        function sort_2way($array, $order) { 
            if ($order === TRUE) {
                sort($array); 
                echo "昇順ソートします。<br>";
            } else {
                rsort($array); 
                echo "降順ソートします。<br>";
            }
            foreach ($array as $value) { 
                echo $value . "<br>"; 
            }
            echo "<br>"; 
        }
        $nums= [15, 4, 18, 23, 10];
        sort_2way($nums, TRUE);
        sort_2way($nums, FALSE);
        ?>
    </p>
</body>
</html>