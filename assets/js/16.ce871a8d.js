(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{254:function(s,t,n){"use strict";n.r(t);var a=n(28),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"如何更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何更新"}},[s._v("#")]),s._v(" 如何更新")]),s._v(" "),n("blockquote",[n("p",[s._v("主要介绍下前后端都是如何进行版本更新的")])]),s._v(" "),n("h2",{attrs:{id:"前端更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端更新"}},[s._v("#")]),s._v(" 前端更新")]),s._v(" "),n("blockquote",[n("p",[s._v("由于前端都是静态文件，更新起来非常简单，直接下载最新的"),n("a",{attrs:{href:"https://github.com/opendevops-cn/codo/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("release"),n("OutboundLink")],1),s._v("包解压即可")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('rm -rf /var/www/codo/\nCODO_VER="codo-beta-0.3.2"   #这里改为最新的relase版本\nif ! which wget &>/dev/null; then yum install -y wget >/dev/null 2>&1;fi\n[ ! -d /var/www ] && mkdir -p /var/www\ncd /var/www && wget https://github.com/opendevops-cn/codo/releases/download/${CODO_VER}/${CODO_VER}.tar.gz\ntar zxf ${CODO_VER}.tar.gz\n')])])]),n("h2",{attrs:{id:"后端更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后端更新"}},[s._v("#")]),s._v(" 后端更新")]),s._v(" "),n("blockquote",[n("p",[s._v("后端都是微服务的，更新某个模块只需要对单个模块操作即可")])]),s._v(" "),n("ul",[n("li",[s._v("举个例子，没有修改表结构的更新")])]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进到你的模块目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/codo/codo-cmdb  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#先给你自己的settings备份下，省的频繁修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" settings.py settings.py-bak    \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取最新代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#覆盖回来")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" settings.py-bak settings.py    \n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新打包镜像")]),s._v("\ndocker build "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -t codo_cmdb    \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#compose启动")]),s._v("\ndocker-compose up -d            \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看日志是否有错误")]),s._v("\ntailf /var/log/supervisor/cmdb.log  \n\n")])])]),n("ul",[n("li",[s._v("假如后端修改了表结构我怎么更新呢？")])]),s._v(" "),n("blockquote",[n("p",[s._v("如果后端修改了表结构，我们的更新文档都会说明哪些需要"),n("code",[s._v("ALTER TABLE")]),s._v(",比如CMDB资产配置新增了华为云的支持，")])]),s._v(" "),n("ul",[n("li",[s._v("问题1：我不想重新初始化，里面有数据，想直接改表结构")])]),s._v(" "),n("div",{staticClass:"language-mysql extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n#先进到你的数据库，每个模块都是对应一个版本库的\n\nALTER TABLE `asset_configs` ADD `project_id` VARCHAR(120) NOT NULL ;\nALTER TABLE `asset_configs` ADD `huawei_cloud` VARCHAR(120) NOT NULL ;\nALTER TABLE `asset_configs` ADD `huawei_instance_id` VARCHAR(120) NOT NULL ;  \n\n")])])]),n("ul",[n("li",[s._v("然后更新你的代码")])]),s._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进到你的模块目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/codo/codo-cmdb  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#先给你自己的settings备份下，省的频繁修改")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" settings.py settings.py-bak    \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取最新代码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull  \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#覆盖回来")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" settings.py-bak settings.py    \n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新打包镜像")]),s._v("\ndocker build "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -t codo_cmdb    \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#compose启动")]),s._v("\ndocker-compose up -d            \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看日志是否有错误")]),s._v("\ntailf /var/log/supervisor/cmdb.log  \n")])])]),n("ul",[n("li",[s._v("问题2：我不想改表结构怎么办？")])]),s._v(" "),n("blockquote",[n("p",[s._v("如果你是新部署的用户/没数据的用户，你完全可以给这个库/表删除了执行初始化操作")])]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker exec -ti cmdb_codo_cmdb_1 /usr/local/bin/python3 /var/www/codo-cmdb/db_sync.py\n\n#最后同样，如上，更新最新代码即可\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);