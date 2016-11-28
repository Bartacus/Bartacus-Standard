################################################
#### UNSET DEFAULT RTE CONFIG               ####
#### Get a clean start without the need of  ####
#### of overriding everything               ####
################################################
RTE >

################################################
#### RTE BASICS                             ####
################################################
RTE.default {

    // Use delivered rte css file that includes a default bootstrap css file.
    // This css file is only for backend purposes and not used in frontend anyways!
    contentCSS = css/rte.css

    // Use default schema for microdata
    schema.sources {
        schemaOrg = EXT:rtehtmlarea/extensions/MicrodataSchema/res/schemaOrgAll.rdf
    }

    // This option doesn't exist in RTE. We use it to copy the value into the corresponding properties
    allowedTags (
        b, strong, i, em, u, ol, ul, li, a, link,
        br, p, h3, h4, h4, h6
    )

    // We really don't want any comments in our frontend output. Remove them.
    removeComments = 1

    // List of tags that should be removed automatically.
    removeTags = center, font, o:p, sdfield, strike, img

    // These tags should never been in here and also its content
    removeTagsAndContents = link, meta, script, style, title

}

################################################
#### RTE BUTTON CONFIG                      ####
################################################
RTE.default.buttons {

    // Remove html tags that are not suitable for an editor to maintain
    formatblock {
        removeItems = address, article, aside, div, header, footer, section, h1, h2, nav
    }

    // Remove stylings from select options
    blockstyle.disableStyleOnOptionLabel = 1

    // Restrict allowed classes for links to the bootstrap btn classes
    textstyle.tags.a {
        allowedClasses (
            btn, btn-default, btn-primary, btn-success, btn-warning,
            btn-danger, btn-link, btn-block
        )
    }

    // Key mapping (strg + x)
    bold.hotKey = b
    italic.hotKey = i

    // Use bootstrap css classes for text alignment
    left.useClass = text-left
    center.useClass = text-center
    right.useClass = text-right
    justifyfull.useClass = text-justify

    // Make borders for tables visible default
    toggleborders {
        setOnTableCreation = 1
        setOnRTEOpen = 1
    }
}

################################################
#### RTE APPEARANCE                         ####
################################################
RTE.default {

    // Allow only buttons which are listed in property "toolbarOrder"
    showButtons (
        formatblock, bold, italic,
        orderedlist, unorderedlist, left, center, right, justifyfull, copy, cut, paste,
        undo, redo, removeformat, link, unlink,
        insertcharacter, findreplace
    )

    // Define buttons and order of button that will be shown
    #toolbarOrder (
    #	formatblock, blockstyle, textstyle, linebreak,
    #	bold, italic, underline, strikethrough, big, small, subscript, superscript, bar,
    #	orderedlist, unorderedlist, bar,
    #	left, center, right, justifyfull, copy, cut, paste, bar,
    #	undo, redo, removeformat, bar,
    #	link, unlink, bar,
    #	line, insertparagraphbefore, insertparagraphafter, bar,
    #	chMode, linebreak, table, tableproperties, toggleborders, tablerestyle, bar,
    #	rowproperties, rowinsertabove, rowinsertunder, rowdelete, rowsplit, bar,
    #	columnproperties, columninsertbefore, columninsertafter, columndelete, columnsplit, bar,
    #	cellproperties, cellinsertbefore, cellinsertafter, celldelete, cellsplit, cellmerge
    #)

    // Make the RTE bigger
    RTEHeightOverride = 700

    // Make the RTE resizeable for more comfort
    rteResize = 1

    // Disable the context menu
    contextMenu.disabled = 1

    // Enable status bar at the bottom that includes wordcount and current selected element
    showStatusBar = 1

    // Disable table wizard fieldsets that are not suitable for the editor
    disableAlignmentFieldsetInTableOperations = 1
    disableBordersFieldsetInTableOperations = 1
    disableColorFieldsetInTableOperations = 1
    disableLayoutFieldsetInTableOperations = 1
    disableSpacingFieldsetInTableOperations = 1
    disableDescriptionFieldsetInTableOperations = 1
}

################################################
#### PROCESSING RULES                       ####
################################################
RTE.default.proc {

    // convert a-tags to link-tags and some other predefined conversions
    overruleMode = ts_css

    // Allow br tags in paragraphs
    dontConvBRtoParagraph = 1

    // Do not preserve div section and remap them to p
    preserveDIVSections = 0

    // List of denied tags
    denyTags = img, center, font, span

    // List of allowed classes in the RTE
    allowedClasses (
        text-left, text-center, text-right, text-justify,
        list-unstyled, list-inline,
        btn, btn-default, btn-primary, btn-success, btn-warning, btn-block
    )

    // List of tags that don't have to be wrapped in a paragraph
    allowTagsOutside (
        blockquote, h1, h2, h3, h4, h5, h6, hr, pre, table, ul, ol
    )

    // We have no option to set special attributes outside html view so remove all
    keepPDIVattribs =

    // Allow to write about html
    dontUndoHSC_db = 1
    dontHSC_rte = 1
}

################################################
#### PROCESSING entryHTMLparser_db          ####
################################################
RTE.default.proc.entryHTMLparser_db = 1
RTE.default.proc.entryHTMLparser_db {

    // Set allowed and denied tags
    allowTags < RTE.default.allowedTags
    denyTags < RTE.default.proc.denyTags

    // Avoid content being hsc`ed twice
    htmlSpecialChars = 0

    tags {

        // Clean Tags
        span {
            fixAttrib {
                style.unset = 1
                lang.unset = 1
            }
            allowedAttribs >
            rmTagIfNoAttrib = 1
        }

        // Only the classs mentioned in these lists, are allowed on db-entry parsing
        // Which means if a element enters the db, all classes on the element will
        // get removed *except* those mentioned here.
        // It's important to mention the "emtpy" list element here, denoted with
        // the leading comma, otherwise the first element get's applied *automatically*
        // Bug or feature!?
        h1.fixAttrib.class.list     = , lead, text-left, text-center, text-right, text-justify
        h2.fixAttrib.class.list     = , lead, text-left, text-center, text-right, text-justify
        h3.fixAttrib.class.list     = , lead, text-left, text-center, text-right, text-justify
        h4.fixAttrib.class.list     = , lead, text-left, text-center, text-right, text-justify

        p.fixAttrib.class.list      = , lead, text-left, text-center, text-right, text-justify

        ol.fixAttrib.class.list     = , list-unstyled, list-inline
        ul.fixAttrib.class.list     = , list-unstyled, list-inline

        a.fixAttrib.class.list      = , btn, btn-default, btn-primary, btn-success, btn-warning, btn-danger, btn-link, btn-block

        // Disallow all attributes
        hr.allowedAttribs           = 0
        b.allowedAttribs            = 0
        strong.allowedAttribs       = 0
        i.allowedAttribs            = 0
        em.allowedAttribs           = 0
        u.allowedAttribs            = 0
        strike.allowedAttribs       = 0
        del.allowedAttribs          = 0
        big.allowedAttribs          = 0
        small.allowedAttribs        = 0
        sup.allowedAttribs          = 0
        sub.allowedAttribs          = 0
        li.allowedAttribs           = 0
        blockquote.allowedAttribs   = 0
        code.allowedAttribs         = 0
        thead.allowedAttribs        = 0
        tbody.allowedAttribs        = 0
        tfoot.allowedAttribs        = 0
        div.allowedAttribs          = 0

        // Special configuration for elements that are allowed to have classes
        h1.allowedAttribs           = class
        h2.allowedAttribs           = class
        h3.allowedAttribs           = class
        h4.allowedAttribs           = class
        p.allowedAttribs            = class
        ol.allowedAttribs           = class
        ul.allowedAttribs           = class
        a.allowedAttribs            = class, href, title, target
        tr.allowedAttribs           = class
        th.allowedAttribs           = class
        td.allowedAttribs           = class, colspan, rowspan
    }

    // Do not keep what is not allowed! YOLO!
    //keepNonMatchedTags = 0
}


################################################
#### PROCESSING HTMLparser_db               ####
################################################
RTE.default.proc.HTMLparser_db = 1
RTE.default.proc.HTMLparser_db {

    // Set allowed and denied tags
    allowTags < RTE.default.allowedTags
    denyTags < RTE.default.proc.denyTags

    noAttrib = br
}

################################################
#### PROCESSING exitHTMLparser_db           ####
################################################
RTE.default.proc.exitHTMLparser_db = 1
RTE.default.proc.exitHTMLparser_db {

    // Set allowed and denied tags
    allowTags < RTE.default.allowedTags
    denyTags < RTE.default.proc.denyTags

    tags {
        b.remap = strong
        i.remap = em
        strike.remap = del
    }
    keepNonMatchedTags = 1
    htmlSpecialChars = 0
}

################################################
#### PROCESSING entryHTMLparser_rte         ####
################################################
RTE.default.proc.entryHTMLparser_rte = 1
RTE.default.proc.entryHTMLparser_rte {

    // Set allowed and denied tags
    allowTags < RTE.default.allowedTags
    denyTags < RTE.default.proc.denyTags

    tags {
        strong.remap = b
        em.remap = i
        del.remap = strike
    }
    keepNonMatchedTags = 1
    htmlSpecialChars = 0
}

################################################
#### PROCESSING HTMLparser_rte              ####
################################################
RTE.default.proc.HTMLparser_rte = 1
RTE.default.proc.HTMLparser_rte {

    // Set allowed and denied tags
    allowTags < RTE.default.allowedTags
    denyTags < RTE.default.proc.denyTags

    keepNonMatchedTags = 1
    htmlSpecialChars = 0
}

################################################
#### USE PROCESSING RULES IN FRONTEND       ####
################################################
RTE.default.FE < RTE.default

################################################
#### CLEANUP CONFIG FOR TT_CONTENT          ####
################################################
RTE.config.tt_content.bodytext >

################################################
#### SET WORDCLEAN PARSER                   ####
################################################
RTE.default.enableWordClean = 1
RTE.default.enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db
