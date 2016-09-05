<template>
    <div class="topbar-wrap">
        <div class="topbar">
            <a class="logo" href="/">知乎</a>
            <div class="search-box">
                <input type="text" class="search-box-content" placeholder="搜索你感兴趣的内容..." v-model="searchContent"
                       @keyup.enter="search">
                <button type="button" class="search-box-button" @click="search"></button>
            </div>
            <ul class="top-nav">
                <li><a v-link="{path: '/'}">首页</a></li>
                <li><a href="javascript:;">话题</a></li>
                <li><a href="javascript:;">发现</a></li>
                <li><a href="javascript:;">消息</a></li>
            </ul>
            <div class="top-nav-profile-wrap">
                <button type="button" class="top-ask" @click="askModalShow = true">提问</button>
                <a class="top-nav-profile-info" href="javascript:;">
                    <img class="avatar" :src="user.avatarUrl">
                    {{user.name}}
                </a>
                <ul class="top-nav-profile-list">
                    <li>
                        <a class="top-nav-link active">
                            <i class="icon icon-home"></i>
                            我的主页
                        </a>
                    </li>
                    <li>
                        <a class="top-nav-link">
                            <i class="icon icon-pm"></i>
                            私信
                        </a>
                    </li>
                    <li>
                        <a class="top-nav-link">
                            <i class="icon icon-settings"></i>
                            设置
                        </a>
                    </li>
                    <li>
                        <a class="top-nav-link">
                            <i class="icon icon-logout"></i>
                            退出
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="modal-ask-wrap" v-show="askModalShow">
            <div class="modal-ask">
                <div class="modal-ask-title">
                    <span class="modal-ask-title-text">提问</span>
                    <span class="modal-ask-close" @click="askModalShow = false"></span>
                </div>
                <div class="modal-ask-content-wrap">
                    <div class="modal-ask-content">
                        <p>
                            知乎是一个真诚、友善、认真、互助的社区<br>
                            我们希望每一个疑惑都有解答，好的问题更容易得到好答案
                            <a href="//www.zhihu.com/question/19555761" target="_blank">如何提一个好问题？</a>
                        </p>
                        <p>
                            <b>提问应遵循真实、客观、简洁、明确、规范的原则</b><br>
                            1、提问应尽可能简洁明了，避免「请问」「有谁知道」「谢谢！」等与问题本身无关的附加语。<br>
                            2、应避免使用「为神马」「童鞋」「肿么办」等网络用语。<br>
                            3、基于个人判断或传言的问题，在提问时应在补充说明里详细说明原由<br>
                            4、避免太宽泛问题，如调查性的问题容易变成每个人都可以发表观点，但对其他人没有价值。<br>
                        </p>
                        <p>
                            <b>知乎禁止这些提问</b><br>
                            1、和已有问题完全重复的问题，<b>为避免重复，提问前可以先进行搜索</b><br>
                            2、招聘 / 求职、交易 / 合作、寻人 / 征友、召集 / 赠送、求码类内容<br>
                            3、投票类问题。例如：你支持方舟子还是韩寒？<br>
                            4、作业或其他希望代为完成个人任务类的内容，以及针对个人具体病情的求医问药类问题<br>
                            完整的提问建议可查看
                            <a href="//www.zhihu.com/question/19806261" target="_blank">知乎的提问规范有哪些？</a><br>
                        </p>
                        <div class="before-ask-form">
                            <b>提问前请先搜索</b>
                            <div style="position: relative; margin-top: 18px;">
                                <input type="text" class="before-ask-input" placeholder="请输入你的问题"
                                       aria-autocomplete="list" autocomplete="off">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                searchContent: '',
                askModalShow: false,
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
                    position: relative;
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
                    z-index: 10;

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

                        + .top-nav-profile-list {
                            display: block;
                        }
                    }

                }

                .top-nav-profile-list {
                    display: none;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 120px;
                    padding-top: 46px;
                    background-color: #095fb3;
                    color: #fff;

                    &:hover {
                        display: block;
                    }

                    li {
                        height: 40px;

                        .top-nav-link {
                            display: inline-block;
                            width: 100%;
                            height: 40px;
                            line-height: 40px;
                            text-shadow: 0 1px 1px rgba(0, 0, 0, .12);
                            font-size: 14px;
                            color: #fff;
                            border-top: 1px solid #0d5aa5;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            cursor: pointer;

                            &:hover,
                            &.active {
                                background-color: #0267cc;
                            }

                            .icon {
                                display: inline-block;
                                width: 20px;
                                height: 20px;
                                margin: 0 11px 0 15px;
                                background-image: url('../assets/zhihu-sprites.png');
                                background-repeat: no-repeat;
                                vertical-align: -7px;

                                &.icon-home {
                                    background-position: -6px -7px;
                                }

                                &.icon-pm {
                                    background-position: -6px -34px;
                                }

                                &.icon-settings {
                                    background-position: -6px -60px;
                                }

                                &.icon-logout {
                                    background-position: -6px -87px;
                                }
                            }
                        }

                        &:first-of-type .top-nav-link {
                            border-top: none;
                        }
                    }
                }
            }
        }

        .modal-ask-wrap {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 99;
            background-color: rgba(0, 0, 0, .2);
            display: flex;
            justify-content: center;

            .modal-ask {
                position: absolute;
                z-index: 99;
                width: 550px;
                margin-top: 14vh;
                border-radius: 8px;
                border: 1px solid #888;
                box-shadow: 0 0 80px 0 rgba(0, 0, 0, .4);
                background: #fff;
                text-align: left;

                .modal-ask-title {
                    position: relative;
                    margin: -1px -1px 0;
                    padding: 10px 15px;
                    line-height: 14px;
                    background: #1D7FE2;
                    background: linear-gradient(to bottom, #1D7FE2, #0865C2);
                    border: 1px solid #0D6EB8;
                    border-radius: 6px 6px 0 0;
                    box-shadow: 0 1px 0 rgba(255, 255, 255, .1) inset, 0 1px 1px rgba(0, 0, 0, .2);

                    &-text {
                        color: #fff;
                        text-shadow: 0 1px 1px rgba(0, 0, 0, .4);
                        font-size: 15px;
                        font-weight: 700;
                    }

                    .modal-ask-close {
                        position: absolute;
                        top: 50%;
                        right: 3px;
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        margin-top: -15px;
                        text-indent: -9999px;
                        cursor: pointer;
                        background-position: -60px -53px;
                        background-image: url('../assets/zhihu-sprites.png');
                        background-repeat: no-repeat;
                        vertical-align: middle;
                    }
                }

                .modal-ask-content-wrap {
                    padding: 0 17px;
                    margin: 19px 0;

                    .modal-ask-content {
                        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                        font-size: 13px;
                        line-height: 1.7;
                        word-wrap: break-word;
                        color: #222;

                        b {
                            font-size: 14px;
                        }

                        p {
                            margin-bottom: 18px;
                        }
                    }

                    .before-ask-form {
                        margin-top: 30px;

                        .before-ask-input {
                            width: 100%;
                            border-radius: 2px;
                            padding: 8px 10px;
                            font-size: 13px;
                            line-height: 15px;
                            box-shadow: 0 1px 1px rgba(0, 0, 0, .1) inset;
                            border-radius: 3px;
                            background: #fff;
                            border: 1px solid #ccc;
                            color: #222;
                        }
                    }
                }
            }
        }
    }
</style>
