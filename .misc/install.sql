UPDATE sys_template
SET title = 'Mastertemplate',
    include_static_file = '',
    constants = '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:app/config/typoscript/constants.ts">\n<INCLUDE_TYPOSCRIPT: source="FILE:EXT:app/config/typoscript/constants_local.ts">',
    config = '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:app/config/typoscript/setup.ts">',
    description = ''
WHERE uid = 1;

UPDATE pages
SET TSconfig = '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:app/config/pagets/index.ts">',
    backend_layout = 'pagets__default',
    backend_layout_next_level = 'pagets__default'
WHERE uid = 1;
