<template>
    <div class="topbar-wrap">
        <div class="topbar">
            <a class="logo" href="/">知乎</a>
            <div class="search-box">
                <input type="text" class="search-box-content" placeholder="搜索你感兴趣的内容..." v-model="searchContent" @keyup.enter="search">
                <button type="button" class="search-box-button" @click="search"></button>
            </div>
            <ul class="top-nav">
                <li><a v-link="{path: '/'}">首页</a></li>
                <li><a href="javascript:;">话题</a></li>
                <li><a href="javascript:;">发现</a></li>
                <li><a href="javascript:;">消息</a></li>
            </ul>
            <div class="top-nav-profile-wrap">
                <button type="button" class="top-ask">提问</button>
                <a class="top-nav-profile-info" href="javascript:;">
                    <img class="avatar" :src="user.avatarUrl">
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
                searchContent: '',
                user: {
                    name: '奔跑的Q丶',
                    avatarUrl: 'http://zhaoshibo.net/avatar.jpg'
                }
            }
        },
        methods: {
            search() {
                window.open(`https://www.zhihu.com/search?type=content&q=${this.searchContent}`, '_blank')
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .topbar-wrap {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        width: 100%;
        height: 46px;
        background: #0767c8;
        background: linear-gradient(to bottom, #086ed5, #055db5);
        border-bottom: 1px solid #044e97;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .25),
        inset 0 1px 0 rgba(255, 255, 255, .15);

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
                vertical-align: middle;
            }

            .search-box {
                position: relative;
                display: inline-block;
                width: 367px;
                height: 33px;
                margin-left: 15px;
                box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2),
                0 1px 0 rgba(255, 255, 255, .1);
                vertical-align: middle;

                &-content {
                    width: 100%;
                    height: 33px;
                    line-height: 33px;
                    padding: 7px 50px 7px 10px;;
                    background-color: #e1eaf2;
                    border: 1px solid #045bb2;
                    border-radius: 4px;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2),
                    0 1px 0 rgba(255, 255, 255, .1);
                    transition: all .2s ease-in-out;
                    font-size: 14px;
                    color: #49525c;

                    &:focus {
                        background-color: #fff;
                        box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2),
                        0 1px 15px rgba(255, 255, 255, .3);
                    }
                }

                &-button {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    width: 40px;
                    background: #0767c8;
                    background: linear-gradient(to bottom, #0e7bef, #0d73da);
                    border: 1px solid #045bb2;
                    border-radius: 0 4px 4px 0;

                    &::before {
                        content: '';
                        display: block;
                        width: 15px;
                        height: 15px;
                        margin: 0 auto;
                        background: url("../assets/zhihu-sprites2.png") -82px 0 no-repeat;
                    }
                }
            }

            .top-nav {
                display: inline-block;
                margin-left: 18px;

                > li {
                    display: inline-block;

                    > a {
                        display: block;
                        width: 54px;
                        height: 46px;
                        line-height: 46px;
                        text-align: center;
                        color: #f2f4f5;
                        text-shadow: 0 1px 1px rgba(0, 0, 0, .12);
                        font-size: 14px;

                        &.active {
                            background: #075fb6;
                            background: linear-gradient(to bottom, #055fb8, #095fb3);
                            box-shadow: inset 0 0 2px rgba(0, 0, 0, .12);
                        }

                        &:visited,
                        &:active {
                            color: #eee;
                        }

                        &:hover {
                            color: #fff;
                        }
                    }
                }
            }

            .top-nav-profile-wrap {
                float: right;
                position: relative;
                min-width: 186px;
                margin-left: 15px;
                z-index: 10;

                .top-ask {
                    width: 66px;
                    height: 32px;
                    line-height: 30px;
                    border: 1px solid #045bb2;
                    border-radius: 4px;
                    background: #0e78e7;
                    background: linear-gradient(to bottom, #0e7bef, #0d73da);
                    box-shadow: 0 1px 2px rgba(0, 0, 0, .05), inset 0 1px 1px rgba(255, 255, 255, .15);
                    color: #fff;
                    font-size: 14px;
                    text-align: center;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, .12);
                    outline: 0;
                    cursor: pointer;
                    transition: all .2s ease-in-out;
                    vertical-align: middle;

                    &:active {
                        background: #096ed5;
                        background: linear-gradient(top, #0e7ceb, #0c6fd3);
                        border: 1px solid #0659ac;
                        box-shadow: 0 1px 0 rgba(255, 255, 255, .06),
                                    inset 0 1px 2px rgba(0, 0, 0, .2);
                    }
                }
                .top-nav-profile-info {
                    display: inline-block;
                    width: 120px;
                    height: 45px;
                    line-height: 45px;
                    font-size: 14px;
                    text-shadow: 0 1px 1px rgba(0, 0, 0, .12);
                    color: #fff;
                    vertical-align: middle;
                    text-align: center;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;

                    .avatar {
                        width: 25px;
                        height: 25px;
                        border-radius: 3px;
                        vertical-align: middle;
                        border: 1px solid rgba(0, 0, 0, .1);
                        box-shadow: 0 1px 0 rgba(255, 255, 255, .1);
                        background-color: transparent;
                    }

                    &:hover {
                        background-color: #095fb3;
                    }
                }
            }
        }
    }
</style>
