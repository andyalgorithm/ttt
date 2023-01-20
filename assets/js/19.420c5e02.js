(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{329:function(t,a,e){t.exports=e.p+"assets/img/docker-x-1.6e0c333e.png"},414:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"docker基础-入门基础和helloworld"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker基础-入门基础和helloworld"}},[t._v("#")]),t._v(" Docker基础 - 入门基础和Helloworld")]),t._v(" "),a("blockquote",[a("p",[t._v("在了解了虚拟化技术和Docker之后，让我们上手Docker，看看Docker是怎么工作的。这里会介绍CentOS环境下Docker的安装和配置，以及会给你展示两个实例，给你一个直观的理解。再啰嗦下，有条件的情况下直接看"),a("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网在新窗口打开"),a("OutboundLink")],1),t._v(", 网上资料鱼龙混杂，版本也更新不及时。@pdai")])]),t._v(" "),a("ul",[a("li",[t._v("Docker基础 - 入门基础和Helloworld\n"),a("ul",[a("li",[a("a",{attrs:{href:"#docker-%E6%9E%B6%E6%9E%84"}},[t._v("Docker 架构")])]),t._v(" "),a("li",[t._v("Docker 安装\n"),a("ul",[a("li",[a("a",{attrs:{href:"#centos-%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82"}},[t._v("CentOS 版本要求")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%8D%B8%E8%BD%BD%E8%80%81%E7%9A%84docker%E5%8F%8A%E4%BE%9D%E8%B5%96"}},[t._v("卸载老的Docker及依赖")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AE%89%E8%A3%85%E4%B8%80%E4%BA%9B%E4%BE%9D%E8%B5%96%E5%BA%93"}},[t._v("安装一些依赖库")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AE%89%E8%A3%85docker-ce"}},[t._v("安装Docker CE")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E4%BB%93%E5%BA%93%E9%85%8D%E7%BD%AE"}},[t._v("仓库配置")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E9%95%9C%E5%83%8F%E6%9F%A5%E7%9C%8B%E5%92%8C%E6%8B%89%E5%8F%96"}},[t._v("镜像查看和拉取")])]),t._v(" "),a("li",[t._v("容器实例-ubuntu实例\n"),a("ul",[a("li",[a("a",{attrs:{href:"#%E4%BB%8E%E4%B8%80%E4%B8%AAubuntu%E7%9A%84hello-world%E8%AF%B4%E8%B5%B7"}},[t._v("从一个ubuntu的hello world说起")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%BF%90%E8%A1%8C%E4%BA%A4%E4%BA%92%E5%BC%8F%E7%9A%84%E5%AE%B9%E5%99%A8"}},[t._v("运行交互式的容器")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E8%BF%90%E8%A1%8C%E5%AE%B9%E5%99%A8%E8%87%B3%E5%90%8E%E5%8F%B0%E6%A8%A1%E5%BC%8F"}},[t._v("运行容器至后台模式")])])])])])])]),t._v(" "),a("h2",{attrs:{id:"docker-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-架构"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#docker-%E6%9E%B6%E6%9E%84"}},[t._v("#")]),t._v(" Docker 架构")]),t._v(" "),a("blockquote",[a("p",[t._v("理解如下的一些概念，你才知道安装什么")])]),t._v(" "),a("p",[t._v("Docker 使用客户端-服务器 (C/S) 架构模式，使用远程API来管理和创建Docker容器。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Docker 客户端(Client)")]),t._v(" : Docker 客户端通过命令行或者其他工具使用 Docker SDK (https://docs.docker.com/develop/sdk/) 与 Docker 的守护进程通信。")]),t._v(" "),a("li",[a("strong",[t._v("Docker 主机(Host)")]),t._v(" ：一个物理或者虚拟的机器用于执行 Docker 守护进程和容器。")])]),t._v(" "),a("p",[t._v("Docker 包括三个基本概念:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("镜像（Image）")]),t._v("：Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。")]),t._v(" "),a("li",[a("strong",[t._v("容器（Container）")]),t._v("：镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。")]),t._v(" "),a("li",[a("strong",[t._v("仓库（Repository）")]),t._v("：仓库可看着一个代码控制中心，用来保存镜像。")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(329),alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"docker-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#docker-%E5%AE%89%E8%A3%85"}},[t._v("#")]),t._v(" Docker 安装")]),t._v(" "),a("blockquote",[a("p",[t._v("从 2017 年 3 月开始 docker 在原来的基础上分为两个分支版本: Docker CE 和 Docker EE：Docker CE 即社区免费版；Docker EE 即企业版，强调安全，但需付费使用；按照官网上Docker Engine - Community包现在就是叫做Docker CE。这里将展示在CentOS上安装Docker。")])]),t._v(" "),a("h3",{attrs:{id:"centos-版本要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos-版本要求"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#centos-%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82"}},[t._v("#")]),t._v(" CentOS 版本要求")]),t._v(" "),a("p",[t._v("官网要求，使用CentOS7的稳定版本，同时：")]),t._v(" "),a("ul",[a("li",[t._v("启用"),a("code",[t._v("centos-extras")])]),t._v(" "),a("li",[t._v("推荐使用"),a("code",[t._v("overlay2")]),t._v("存储驱动")])]),t._v(" "),a("h3",{attrs:{id:"卸载老的docker及依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载老的docker及依赖"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E5%8D%B8%E8%BD%BD%E8%80%81%E7%9A%84docker%E5%8F%8A%E4%BE%9D%E8%B5%96"}},[t._v("#")]),t._v(" 卸载老的Docker及依赖")]),t._v(" "),a("blockquote",[a("p",[t._v("为什么你可能还需要删除较低的Docker安装？因为较旧版本的Docker被称为docker或docker-engine（它是一个简化Docker安装的命令行工具，通过一个简单的命令行即可在相应的平台上安装Docker，比如VirtualBox、 Digital Ocean、Microsoft Azure）")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum remove "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-client "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-client-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-common "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-latest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-latest-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-logrotate "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n                  docker-engine\n")])])]),a("h3",{attrs:{id:"安装一些依赖库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装一些依赖库"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E5%AE%89%E8%A3%85%E4%B8%80%E4%BA%9B%E4%BE%9D%E8%B5%96%E5%BA%93"}},[t._v("#")]),t._v(" 安装一些依赖库")]),t._v(" "),a("ul",[a("li",[t._v("yum-utils 提供 yum-config-manager 类库")]),t._v(" "),a("li",[t._v("device-mapper-persistent-data 和 lvm2 被devicemapper 存储驱动依赖")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" yum-utils "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  device-mapper-persistent-data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  lvm2\n")])])]),a("p",[t._v("设置稳定版本的库")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum-config-manager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --add-repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://download.docker.com/linux/centos/docker-ce.repo\n")])])]),a("h3",{attrs:{id:"安装docker-ce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker-ce"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E5%AE%89%E8%A3%85docker-ce"}},[t._v("#")]),t._v(" 安装Docker CE")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-y")]),t._v(" docker-ce\n")])])]),a("p",[t._v("安装完之后启动")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),a("p",[t._v("测试是否安装成功")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemctl status docker")]),t._v("\n● docker.service - Docker Application Container Engine\n   Loaded: loaded "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/usr/lib/systemd/system/docker.service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" vendor preset: disabled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   Active: active "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("running"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" since Mon "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("-02-17 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":57:45 CST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 39s ago\n     Docs: https://docs.docker.com\n Main PID: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26029")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dockerd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Tasks: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n   Memory: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),t._v(".9M\n   CGroup: /system.slice/docker.service\n           └─26029 /usr/bin/dockerd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-H")]),t._v(" fd:// "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--containerd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/run/containerd/containerd\n")])])]),a("h2",{attrs:{id:"仓库配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库配置"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E4%BB%93%E5%BA%93%E9%85%8D%E7%BD%AE"}},[t._v("#")]),t._v(" 仓库配置")]),t._v(" "),a("blockquote",[a("p",[t._v("Docker 安装好以后，我们就要开始为拉取镜像准备了；国内从 DockerHub 拉取镜像有时会特别慢，此时可以"),a("strong",[t._v("配置镜像加速器")]),t._v("。")])]),t._v(" "),a("p",[t._v("Docker 官方和国内很多云服务商都提供了国内加速器服务，比如：")]),t._v(" "),a("ul",[a("li",[t._v("阿里云的加速器：https://help.aliyun.com/document_detail/60750.html")]),t._v(" "),a("li",[t._v("网易加速器：http://hub-mirror.c.163.com")]),t._v(" "),a("li",[t._v("Docker官方中国加速器：https://registry.docker-cn.com")]),t._v(" "),a("li",[t._v("ustc 的镜像：https://docker.mirrors.ustc.edu.cn")]),t._v(" "),a("li",[t._v("daocloud：https://www.daocloud.io/mirror#accelerator-doc（注册后使用）")])]),t._v(" "),a("p",[a("strong",[t._v("这里配置 Docker官方中国的加速器")]),t._v("：")]),t._v(" "),a("p",[t._v("对于使用 systemd 的系统，请在 /etc/docker/daemon.json 中写入如下内容（如果文件不存在请新建该文件）")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"registry-mirrors"')]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.docker-cn.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("之后重新启动服务")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),a("h2",{attrs:{id:"镜像查看和拉取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像查看和拉取"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E9%95%9C%E5%83%8F%E6%9F%A5%E7%9C%8B%E5%92%8C%E6%8B%89%E5%8F%96"}},[t._v("#")]),t._v(" 镜像查看和拉取")]),t._v(" "),a("blockquote",[a("p",[t._v("拉一个docker镜像试试吧？")])]),t._v(" "),a("p",[t._v("拉取hello world")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker pull hello-world:latest")]),t._v("\nlatest: Pulling from library/hello-world\n1b930d010525: Pull complete\nDigest: sha256:9572f7cdcee8591948c2963463447a53466950b3fc15a247fcad1917ca215a2f\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" hello-world:latest\ndocker.io/library/hello-world:latest\n")])])]),a("p",[t._v("看本地仓库是否有这个库")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker images")]),t._v("\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nhello-world         latest              fce289e99eb9        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" months ago       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".84kB\n")])])]),a("p",[t._v("运行这个镜像的实例，即容器")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker run hello-world")]),t._v("\n\nHello from Docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(". The Docker client contacted the Docker daemon.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(". The Docker daemon pulled the "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello-world"')]),t._v(" image from the Docker Hub.\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(". The Docker daemon created a new container from that image "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" runs the\n    executable that produces the output you are currently reading.\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(". The Docker daemon streamed that output to the Docker client, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" sent it\n    to your terminal.\n\nTo try something "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" ambitious, you can run an Ubuntu container with:\n $ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\nShare images, automate workflows, and "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" with a "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),t._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])])]),a("blockquote",[a("p",[t._v("注意, 如果你在没有镜像的时候，直接"),a("code",[t._v("docker run hello-world")]),t._v("也是可以的；它会先检查本地是否有这个镜像，没有的话会先从指定仓库中拉取。")])]),t._v(" "),a("h2",{attrs:{id:"容器实例-ubuntu实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器实例-ubuntu实例"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E5%AE%B9%E5%99%A8%E5%AE%9E%E4%BE%8B-ubuntu%E5%AE%9E%E4%BE%8B"}},[t._v("#")]),t._v(" 容器实例-ubuntu实例")]),t._v(" "),a("blockquote",[a("p",[t._v("上面我们跑了一个官方的Hello-world容器实例, 这里通过介绍运行ubuntu的实例来全面理解如何跑一个Docker实例")])]),t._v(" "),a("h3",{attrs:{id:"从一个ubuntu的hello-world说起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从一个ubuntu的hello-world说起"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E4%BB%8E%E4%B8%80%E4%B8%AAubuntu%E7%9A%84hello-world%E8%AF%B4%E8%B5%B7"}},[t._v("#")]),t._v(" 从一个ubuntu的hello world说起")]),t._v(" "),a("p",[t._v("Docker 允许你在容器内运行应用程序， 使用 docker run 命令来在容器内运行一个应用程序。这里同样是个Hello World，不同在于它是在容器内部运行的。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# docker run ubuntu:latest /bin/echo "Hello world"')]),t._v("\nUnable to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" image "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ubuntu:latest'")]),t._v(" locally\nlatest: Pulling from library/ubuntu\n5c939e3a4d10: Pull complete\nc63719cdbe7a: Pull complete\n19a861ea6baf: Pull complete\n651c9d2d6c4f: Pull complete\nDigest: sha256:8d31dad0c58f552e890d68bbfb735588b6b820a46e459672d96e585871acc110\nStatus: Downloaded newer image "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" ubuntu:latest\nHello world\n")])])]),a("p",[t._v("我们看下各个参数的含义：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("docker")]),t._v(": Docker 的二进制执行文件。")]),t._v(" "),a("li",[a("code",[t._v("run")]),t._v(": 与前面的 docker 组合来运行一个容器。")]),t._v(" "),a("li",[a("code",[t._v("ubuntu:latest")]),t._v(" 指定要运行的镜像，Docker 首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。")]),t._v(" "),a("li",[a("code",[t._v('/bin/echo "Hello world"')]),t._v(": 在启动的容器里执行的命令")])]),t._v(" "),a("p",[t._v('以上命令完整的意思可以解释为：Docker 以 ubuntu 最新的（默认是latest) 镜像创建一个新容器，然后在容器里执行 bin/echo "Hello world"，然后输出结果。')]),t._v(" "),a("h3",{attrs:{id:"运行交互式的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行交互式的容器"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E8%BF%90%E8%A1%8C%E4%BA%A4%E4%BA%92%E5%BC%8F%E7%9A%84%E5%AE%B9%E5%99%A8"}},[t._v("#")]),t._v(" 运行交互式的容器")]),t._v(" "),a("blockquote",[a("p",[t._v("以上面例子，容器跑的是Ubuntu是一个系统实例，能否进入系统进行交互呢？")])]),t._v(" "),a("p",[t._v('我们通过 docker 的两个参数 -i -t，让 docker 运行的容器实现"对话"的能力：')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker run -i -t ubuntu:latest")]),t._v("\nroot@414bf796cbe4:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'hello world'")]),t._v("\nhello world\nroot@414bf796cbe4:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),a("p",[t._v("各个参数解析：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("-t")]),t._v(": 在新容器内指定一个伪终端或终端。")]),t._v(" "),a("li",[a("code",[t._v("-i")]),t._v(": 允许你对容器内的标准输入 (STDIN) 进行交互。")])]),t._v(" "),a("p",[t._v("我们可以通过运行 exit 命令或者使用 CTRL+D 来退出容器")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root@414bf796cbe4:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# exit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),a("h3",{attrs:{id:"运行容器至后台模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行容器至后台模式"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"#%E8%BF%90%E8%A1%8C%E5%AE%B9%E5%99%A8%E8%87%B3%E5%90%8E%E5%8F%B0%E6%A8%A1%E5%BC%8F"}},[t._v("#")]),t._v(" 运行容器至后台模式")]),t._v(" "),a("blockquote",[a("p",[t._v("我们先来看, 当我们跑完上面例子之后，我们看下后台是否有docker容器实例？")])]),t._v(" "),a("p",[t._v("显然没有任何容器实例")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker ps")]),t._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n")])])]),a("p",[t._v("所以我们需要"),a("code",[t._v("-d")]),t._v("参数，来让容器实例在后台运行，比如：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# docker run -d ubuntu:latest /bin/sh -c "while true; do echo hello world; sleep 1; done"')]),t._v("\n1a51d2f023c947f2be2d9a78eb863e854ca302c89bf354654c409e23e7dd25d7\n")])])]),a("p",[t._v('在输出中，我们没有看到期望的 "hello world"，而是一串长字符')]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("2b1b7a428627c51ab8810d541d759f072b4fc75487eed05812646b8534a2fe63\n")])])]),a("p",[t._v("这个长字符串叫做容器 ID，对每个容器来说都是唯一的，我们可以通过容器 ID 来查看对应的容器发生了什么。")]),t._v(" "),a("p",[t._v("首先，我们需要确认容器有在运行，可以通过 docker ps 来查看：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker ps")]),t._v("\nCONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS               NAMES\n1a51d2f023c9        ubuntu:latest       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/sh -c \'while t…"')]),t._v("   About a minute ago   Up About a minute                       gifted_brown\n")])])]),a("p",[t._v("输出详情介绍：")]),t._v(" "),a("ul",[a("li",[t._v("CONTAINER ID: 容器 ID。")]),t._v(" "),a("li",[t._v("IMAGE: 使用的镜像。")]),t._v(" "),a("li",[t._v("COMMAND: 启动容器时运行的命令。")]),t._v(" "),a("li",[t._v("CREATED: 容器的创建时间。")]),t._v(" "),a("li",[t._v("STATUS: 容器状态(状态有7种)。\n"),a("ul",[a("li",[t._v("created（已创建）")]),t._v(" "),a("li",[t._v("restarting（重启中）")]),t._v(" "),a("li",[t._v("running（运行中）")]),t._v(" "),a("li",[t._v("removing（迁移中）")]),t._v(" "),a("li",[t._v("paused（暂停）")]),t._v(" "),a("li",[t._v("exited（停止）")]),t._v(" "),a("li",[t._v("dead（死亡）")])])]),t._v(" "),a("li",[t._v("PORTS: 容器的端口信息和使用的连接类型（tcp\\udp）。")]),t._v(" "),a("li",[t._v("NAMES: 自动分配的容器名称。")])]),t._v(" "),a("p",[t._v("我们通过"),a("code",[t._v("docker logs")]),t._v(" 命令，查看指定容器内的标准输出:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker logs 1a51d2f023c9")]),t._v("\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\nhello world\n")])])]),a("p",[t._v("最后我们看下，如何关闭后台实例")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker stop 1a51d2f023c9")]),t._v("\n1a51d2f023c9\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker ps")]),t._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@pdai ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])])]),a("hr"),t._v(" "),a("p",[t._v("著作权归@pdai所有 原文链接：https://pdai.tech/md/devops/docker/docker-02-basic.html")])])}),[],!1,null,null,null);a.default=r.exports}}]);