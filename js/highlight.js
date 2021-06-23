( function( wp ) {

    var badgeButton = function( props ) {
        return wp.element.createElement(
        wp.editor.RichTextToolbarButton, {
            icon: 'superhero-alt', 
            title: ' Highlight', 
            onClick: function() {
                props.onChange( 
                    wp.richText.toggleFormat(props.value, {
                        type: 'gutentooler/highlight'
                    }) 
                );
            }
        }
    );
       
    }

    // wp.richText.unregisterFormatType('core/underline');
    wp.richText.registerFormatType(
        'gutentooler/highlight', {
            title: 'Highlight',
            tagName: 'span',
            className: 'highlight',
            edit: badgeButton,
        }
    );
} )( window.wp );