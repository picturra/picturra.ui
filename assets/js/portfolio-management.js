$( function() {
    $('#artwork-sortable, #collections-sortable').sortable({
      handle: '.drag-drop-arrows'
    });
    $('#sortable').disableSelection();
  }
)
