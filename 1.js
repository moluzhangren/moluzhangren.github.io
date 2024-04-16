
//绘制雪花

document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('snow');
    var ctx = canvas.getContext('2d');

    // 设置 canvas 的大小为全屏
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 加载雪花图片
    var snowflakeImage = new Image();
    snowflakeImage.src = '1.png';

    // 雪花的数量
    var numberOfSnowflakes = 100;
    var snowflakes = [];

    // 绘制雪花
    function drawSnowflakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < numberOfSnowflakes; i++) {
            var snowflake = snowflakes[i];
            snowflake.rotation += snowflake.rotationSpeed; // 更新旋转角度
            ctx.save(); // 保存当前绘图状态
            ctx.translate(snowflake.x, snowflake.y); // 将坐标原点移至雪花中心
            ctx.rotate(snowflake.rotation); // 旋转雪花
            ctx.drawImage(snowflakeImage, -snowflake.size / 2, -snowflake.size / 2, snowflake.size, snowflake.size);
            ctx.restore(); // 恢复之前保存的绘图状态
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
                speed: Math.random() * 2 + 1, // 随机速度
                rotation: 0, // 初始旋转角度为0
                rotationSpeed: Math.random() * 0.02 // 随机旋转速度
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

//音乐播放器

// 当前播放的音乐 ID
let currentMusicId = null;
// 页面加载完成后开始播放音乐
window.onload = function() {
    playRandomMusic();
};
// 播放随机音乐
function playRandomMusic() {
    // 发起 HTTP 请求获取 JSON 数据
    fetch("https://api.uomg.com/api/rand.music?sort=热歌榜&format=json")
        .then(response => response.json())
        .then(data => {
            if (data.code === 1 && data.data && data.data.url) {
                const musicUrl = data.data.url;  // 获取歌曲播放链接
                const musicId = extractMusicId(musicUrl);  // 从链接中提取音乐 ID
                // 如果当前音乐 ID 与新获取的音乐 ID 不同，则替换音乐
                if (musicId !== currentMusicId) {
                    currentMusicId = musicId;
                    replaceMusicPlayer(musicId);
                    console.log("歌曲播放链接：" + musicUrl);
                } else {
                    // 如果音乐 ID 相同，则继续播放当前音乐
                    console.log("当前音乐仍在播放，无需替换");
                }
            } else {
                console.error("获取音乐失败：" + data.msg);
                alert("获取音乐失败，请稍后重试");
            }
        })
        .catch(error => {
            console.error('获取音乐失败：', error);
            alert("获取音乐失败，请稍后重试");
        });
}
// 从音乐链接中提取音乐 ID
function extractMusicId(url) {
    const idRegex = /id=(\d+)/;
    const match = url.match(idRegex);
    if (match && match[1]) {
        return match[1];
    } else {
        console.error("无法从音乐链接中提取音乐 ID");
        return null;
    }
}
// 替换音乐播放器
function replaceMusicPlayer(musicId) {
    // 移除旧的 iframe 元素
    const musicPlayerDiv = document.getElementById("music-player");
    musicPlayerDiv.innerHTML = '';
    // 创建新的 iframe 元素
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "no");
    iframe.setAttribute("border", "0");
    iframe.setAttribute("marginwidth", "0");
    iframe.setAttribute("marginheight", "0");
    iframe.setAttribute("width", "330");
    iframe.setAttribute("height", "86");
    iframe.setAttribute("src", `//music.163.com/outchain/player?type=2&id=${musicId}&auto=1&height=66`);

    // 将新的 iframe 添加到页面中的 music-player 元素中
    musicPlayerDiv.appendChild(iframe);
}
// 播放下一首音乐
function playNextMusic() {
    playRandomMusic();
}

//显示时间

function updateTime() {
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
var day = now.getDay();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();

var weekDays = ["日", "一", "二", "三", "四", "五", "六"];

// 如果秒数是个位数，则在前面添加一个零
if (second < 10) {
    second = "0" + second;
}
if (minute < 10) {
    minute = "0" + minute;
}

var timeString = "<div id='clock'><span style='font-size: larger'>" + hour + "</span>:<span style='font-size: larger'>" + minute + "</span>:<span style='font-size: larger'>" + second + "</span></div><br>";
timeString += "<span style='font-size: smaller'>" + year + "年" + month + "月" + date + "日 星期" + weekDays[day] + "</span><br>";
// 在此添加初月初几的计算方法

document.getElementById("time").innerHTML = timeString;
}

// 初月初几的计算方法可以根据具体需求自行添加

// 每秒更新一次时间
setInterval(updateTime, 1000);

// 页面加载时先执行一次，避免页面打开时空白
updateTime();

//一言

// 使用Fetch API获取一言数据
fetch('https://v1.hitokoto.cn/')
    .then(response => response.json())
    .then(data => {
        const yiyanDiv = document.getElementById('yiyan');
        yiyanDiv.textContent = data.hitokoto;
    })
    .catch(error => {
        console.error('获取一言失败:', error);
    });
