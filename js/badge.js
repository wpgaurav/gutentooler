( function( wp ) {

    var badgeButton = function( props ) {
        return wp.element.createElement(
        wp.editor.RichTextToolbarButton, {
            icon: 'tag', 
            title: ' Badge', 
            onClick: function() {
                props.onChange( 
                    wp.richText.toggleFormat(props.value, {
                        type: 'gutentooler/badge'
                    }) 
                );
            }
        }
    );
       
    }

    // wp.richText.unregisterFormatType('core/underline');
    wp.richText.registerFormatType(
        'gutentooler/badge', {
            title: 'Badge',
            tagName: 'span',
            className: 'badge',
            edit: badgeButton,
        }
    );
} )( window.wp );