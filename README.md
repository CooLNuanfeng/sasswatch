#### 安装

    npm install -g sasswatch



#### 运行

    sass


#### 参数说明


    -V, --version              版本号
    -e, --entry [path]         入口文件路径
    -o, --output [path]        编译输出路径
    -s, --output-style [type]  编译形式 compressed|compact|nested|expanded 默认 compressed
    -b, --browsers [config]    autoprefixer 兼容版本
    -h, --help                 帮助信息


#### 使用实例

    sass -e sass/ -o css/ -s compact -b l2v


#### browserslist

    {
        'l2v' : 'last 2 versions',
        'l2cv': 'last 2 Chrome versions',
        'l2mv': 'last 2 major versions',
        'l2iosmv' : 'last 2 iOS major versions',
        'gt5' : '> 5%',
        '5US' : '> 5% in US',
        '5AS' : '> 5% in alt-AS',
        '5Stats' : '> 5% in my stats',
        'ie' : 'ie 6-8',
        'gtf20' : 'Firefox > 20',
        'gef20' : 'Firefox >= 20',
        'lt20' : 'Firefox < 20',
        'lef20' : 'Firefox <= 20',
        'fesr' : 'Firefox ESR',
        'ios7' : 'iOS 7',
        'unrlv': 'unreleased versions',
        'unrclv':'unreleased Chrome versions',
        'notie' : 'not ie <= 8'
    }
