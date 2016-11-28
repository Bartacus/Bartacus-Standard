################
#### HELPER ####
################
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:app/config/typoscript/helper/ParseFunc.ts">

####################
#### PAGE CLASS ####
####################
lib.page.class = COA
lib.page.class {
    // Page alias or id as fallback
    10 = TEXT
    10 {
        field = alias // uid
        noTrimWrap = |page-||
    }
    // Current level of the page within the tree structure
    20 = TEXT
    20 {
        data = level:1
        noTrimWrap = | pagelevel-||
    }
    // Language
    30 = TEXT
    30 {
        data = TSFE:sys_language_uid
        noTrimWrap = | language-||
    }
    // Backend layout
    40 = TEXT
    40 {
        data = levelfield:-1, backend_layout_next_level, slide
        override.field = backend_layout
        ifEmpty = default
        noTrimWrap = | backendlayout-||
    }
    // Layout
    50 = TEXT
    50 {
        field = layout
        noTrimWrap = | layout-||
    }
}

##############
#### PAGE ####
##############
page = PAGE
page {
    typeNum = 0

    10 = TEMPLATE
    10 {
        template = FILE
        template.file = EXT:project/Resources/Private/Templates/master.html
        marks {
            CLASSES < lib.page.class

            SUBTEMPLATE = TEMPLATE
            SUBTEMPLATE {
                template = FILE
                template.file.stdWrap.cObject = CASE
                template.file.stdWrap.cObject {
                    key.data = levelfield:-1, backend_layout_next_level, slide
                    key.override.field = backend_layout

                    pagets__default = TEXT
                    pagets__default.value = EXT:project/Resources/Private/Templates/default.html

                    default = TEXT
                    default.value = EXT:project/Resources/Private/Templates/default.html
                }

                marks {
                    CONTENT0 < bartacus.content.get

                    CONTENT1 < bartacus.content.get
                    CONTENT1.select.where = colPos=1

                    CONTENT2 < bartacus.content.get
                    CONTENT2.select.where = colPos=2
                }
            }
        }
    }

    meta {
        # New notation available since TYPO3 7.4
        # see https://forge.typo3.org/issues/67360 for more details
        viewport = {$page.meta.viewport}
        robots = {$page.meta.robots}
        google = {$page.meta.google}
        apple-mobile-web-app-capable = {$page.meta.apple-mobile-web-app-capable}
        description = {$page.meta.description}
        description {
            override.field = description
        }
        author = {$page.meta.author}
        author {
            override.field = author
        }
        keywords = {$page.meta.keywords}
        keywords {
            override.field = keywords
        }
        X-UA-Compatible = {$page.meta.compatible}
        X-UA-Compatible {
            attribute = http-equiv
        }

        # OpenGraph Tags
        og:title {
            attribute = property
            field = title
        }
        og:site_name {
            attribute = property
            data = TSFE:tmpl|setup|sitetitle
        }
        og:description = {$page.meta.description}
        og:description {
            attribute = property
            field = description
        }
        og:image {
            attribute = property
            stdWrap.cObject = FILES
            stdWrap.cObject {
                references {
                    data = levelfield:-1, media, slide
                }
                maxItems = 1
                renderObj = COA
                renderObj {
                    10 = IMG_RESOURCE
                    10 {
                        file {
                            import.data = file:current:uid
                            treatIdAsReference = 1
                            width = 1280c
                            height = 720c
                        }
                        stdWrap {
                            typolink {
                                parameter.data = TSFE:lastImgResourceInfo|3
                                returnLast = url
                                forceAbsoluteUrl = 1
                            }
                        }
                    }
                }
            }
        }
    }

    bodyTag = <!--[if lt IE 7]><body class="ie6"><![endif]--><!--[if IE 7]><body class="ie7"><![endif]--><!--[if IE 8]><body class="ie8"><![endif]--><!--[if IE 9]><body class="ie9"><![endif]--><!--[if (gt IE 9)|!(IE)]><!--><body><!--<![endif]-->

    includeCSS {
        styles = /css/main.min.css
    }

    includeJS {
        js = /js/header.min.js
    }

    includeJSFooter {
        js = /js/footer.min.js

        # Livereload
        livereload = https://localhost:{$page.livereload.port}/livereload.js
        livereload.if.isTrue = {$page.livereload.port}
        livereload.external = 1
    }

    jsFooterInline {
        # Google Analytics
        10 = COA
        10 {
            if {
                isTrue = {$page.tracking.google.trackingID}
            }
            10 = TEXT
            10.value (
    <!-- Google Tag Manager -->
    <noscript><iframe src="//www.googletagmanager.com/ns.html?id={$page.tracking.google.trackingID}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','{$page.tracking.google.trackingID}');</script>
    <!-- End Google Tag Manager -->
            )
        }
    }
}

###################################################
#### EXCLUDE PAGE FROM EXTERNAL SEARCH RESULTS ####
#### IF NO SEARCH IS SET FOR THIS PAGE         ####
###################################################
[globalVar = TSFE:page|no_search = 1]
    page.meta.robots = noindex,follow
[end]


################
#### CONFIG ####
################
config {
    absRefPrefix = auto
    no_cache = {$config.no_cache}
    uniqueLinkVars = 1
    pageTitleFirst = 1
    linkVars = L
    renderCharset = utf-8
    metaCharset = utf-8
    doctype = html5
    removeDefaultCss = 1
    removeDefaultJS = 1
    inlineStyle2TempFile = 1
    admPanel = {$config.admPanel}
    debug = 0
    cache_period = 86400
    sendCacheHeaders = {$config.sendCacheHeaders}
    intTarget =
    extTarget =
    disablePrefixComment = 1
    index_enable = 1
    index_externals = 1
    index_metatags = 1
    headerComment = {$config.headerComment}

    // Enable RealUrl
    tx_realurl_enable = 1
    simulateStaticDocuments = 0
    typolinkCheckRootline = 1
    typolinkEnableLinksAcrossDomains = 1

    // Disable Image Upscaling
    noScaleUp = 1

    // Language Settings
    sys_language_uid = 0
    sys_language_overlay = 1
    sys_language_mode = content_fallback
    language = en
    locale_all = en_GB.UTF-8
    htmlTag_setParams = lang="en" dir="ltr" class="no-js"

    // Compression and Concatenation of CSS and JS Files
    compressJs = 0
    compressCss = 0
    concatenateJs = 0
    concatenateCss = 0
}

#############################
#### LANGUAGE CONDITIONS ####
#############################
// tbd
