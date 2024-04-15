<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>coke</title>
    <!--2024年4月14日-->
    <style>
        body {
            background: url('1.jpg') no-repeat center center fixed;
            background-size: cover;
            margin: 0;
            padding: 0;
            position: relative;
        }
        canvas {
            display: block;
        }
        /* 调整音乐播放器的样式 */
        #music-player {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: rgba(255, 255, 255, 0.5);
            padding: 10px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <!--获取歌曲信息并写入到文件-->
<?php
header("Content-Type:text/html;charset=UTF-8");
date_default_timezone_set("PRC");
$result = file_get_contents("https://api.uomg.com/api/rand.music?sort=热歌榜&format=json");
$arr = json_decode($result, true);
if ($arr['code'] == 1) {
    // 将数组转换为纯文本格式
    $text = "歌曲名称: " . $arr['data']['name'] . "\n";
    $text .= "歌曲地址: " . $arr['data']['url'] . "\n";
    $text .= "歌曲封面: " . $arr['data']['picurl'] . "\n";
    $text .= "歌手名称: " . $arr['data']['artistsname'] . "\n";

    // 将文本写入到文件中
    $file = fopen("song_info.txt", "w");
    fwrite($file, $text);
    fclose($file);
} else {
    echo $arr['msg'];
}
?>

    <!-- 添加音乐播放器 -->
    <div id="music-player">
    <?php
// 文件路径
$file_path = 'song_info.txt';

// 打开文件进行读取
$file = fopen($file_path, 'r');

// 逐行读取文件内容
while (!feof($file)) {
    // 读取一行内容
    $line = fgets($file);
    // 使用正则表达式提取歌曲地址中的ID部分
    if (preg_match('/id=(\d+)/', $line, $matches)) {
        $song_id = $matches[1];
        // 构建完整的 iframe 标签
        $iframe_code = "<iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=340 height=86 src=\"//music.163.com/outchain/player?type=2&id=$song_id&auto=1&height=66\"></iframe>";
        echo "$iframe_code";
        break; // 找到 ID 后结束循环
    }
}

// 关闭文件
fclose($file);
?>
    </div>

    <canvas id="snow"></canvas>

    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var canvas = document.getElementById('snow');
        var ctx = canvas.getContext('2d');

        // 设置 canvas 的大小为全屏
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // 加载雪花图片
        var snowflakeImage = new Image();
        snowflakeImage.src = 'snowflake.png';

        // 雪花的数量
        var numberOfSnowflakes = 100;
        var snowflakes = [];

        // 绘制雪花
        function drawSnowflakes() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < numberOfSnowflakes; i++) {
                var snowflake = snowflakes[i];
                ctx.drawImage(snowflakeImage, snowflake.x, snowflake.y, snowflake.size, snowflake.size);
            }

            moveSnowflakes();
        }

        // 移动雪花
        function moveSnowflakes() {
            for (var i = 0; i < numberOfSnowflakes; i++) {
                var snowflake = snowflakes[i];
                snowflake.y += snowflake.speed;
                if (snowflake.y > canvas.height) {
                    snowflake.y = 0;
                }
            }
        }

        // 初始化雪花
        function initializeSnowflakes() {
            for (var i = 0; i < numberOfSnowflakes; i++) {
                snowflakes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 20 + 10, // 随机大小
                    speed: Math.random() * 2 + 1 // 随机速度
                });
            }
        }

        // 使用 requestAnimationFrame 来持续绘制雪花
        function animate() {
            requestAnimationFrame(animate);
            drawSnowflakes();
        }

        // 初始化雪花并开始动画
        initializeSnowflakes();
        animate();
    });
    </script>
</body>
</html>
