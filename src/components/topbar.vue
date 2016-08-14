<template>
    <div class="topbar-wrap">
        <div class="topbar">
            <a class="logo" href="/">知乎</a>
            <div class="search-box">
                <input type="text" placeholder="搜索你感兴趣的内容...">
                <button type="button" class="search-box-button"></button>
            </div>
            <ul class="top-nav">
                <li><a href="javascript:;">首页</a></li>
                <li><a href="javascript:;">话题</a></li>
                <li><a href="javascript:;">发现</a></li>
                <li><a href="javascript:;">消息</a></li>
            </ul>
            <div class="top-nav-profile-wrap">
                <button type="button" class="top-ask">提问</button>
                <a href="javascript:;">
                    <img class="avatar" :src="user.avatarUrl" width="27" height="27">
                    {{user.name}}
                </a>
                <ul class="top-nav-profile">

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    name: '奔跑的Q丶',
                    avatarUrl: 'http://zhaoshibo.net/avatar.jpg'
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .topbar-wrap {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        width: 100%;
        height: 45px;
        background: #0767c8;
        background: linear-gradient(to bottom,#086ed5,#055db5);
        border-bottom: 1px solid #044e97;
        box-shadow: 0 1px 2px rgba(0,0,0,.25),
                    inset 0 1px 0 rgba(255,255,255,.15);

        .topbar {
            width: 960px;
            margin: 0 auto;

            .logo {
                display: inline-block;
                width: 61px;
                height: 100%;
                background: url("../assets/zhihu-logo.png") 0 8px no-repeat;
                line-height: 45px;
                color: #fff;
                font-size: 32px;
                text-indent: -9999px;
            }
        }
    }
</style>
