<!--======== 前略 ========-->
<!--======== 前略 ========-->

<p>
        <?php
        // 与えられた引数$numを2倍にし、その値を戻り値として返す関数を定義する
        function double($num) {
            return $num * 2;
        }

        // 関数の戻り値を出力する        
        echo double(30);
        ?>
    </p>
    <p>
        <?php
        // 引数の型宣言を行い、引数を整数型に限定する
        function type_hinting_argument(int $num) {
            return $num * 2;
        }

        // 型宣言と異なるデータ型の引数を渡す（引数が強制的に整数型に変換される）       
        echo type_hinting_argument(1.618);
        ?>
    </p>
</body>

</html>