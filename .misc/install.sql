UPDATE sys_template
SET title = 'Mastertemplate',
    include_static_file = '',
    constants = '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:app/config/typoscript/constants.typoscript">\n<INCLUDE_TYPOSCRIPT: source="FILE:EXT:app/config/typoscript/constants_local.typoscript">',
    config = '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:app/config/typoscript/setup.typoscript">',
    description = ''
WHERE uid = 1;

UPDATE pages
SET TSconfig = '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:app/config/pagets/index.tsconfig">',
    backend_layout = 'pagets__default',
    backend_layout_next_level = 'pagets__default'
WHERE uid = 1;
