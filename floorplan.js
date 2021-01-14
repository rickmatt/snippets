document.write('<h3 id="floorplan-title"></h3>');
document.write('<p><i id="floorplan-details"></i></p>');
document.write('<p id="floorplan-description"></p>');

jQuery(document).ready(function($) {
  $('.wpb_wrapper.vc_figure').each(function() {
    var $this = $(this);

    function getInfo () {
      var title = $this.find('.floorplan-title').html();
      var description = $this.find('.floorplan-description').html();
      var details = $this.find('.floorplan-caption').html();
      var alt = $this.find('.floorplan-alt').html();
    
      return {
        title: title,
        description: description,
        details: details,
        alt: alt
      }
    }

    var info = getInfo();

    // Shows info
    $('#floorplan-title').html(info.title);
    $('#floorplan-details').html(info.details);
    $('#floorplan-description').html(info.description);

    // On icon click
    $('.vc_icon_element-inner').on('click', function() {
      var $image = $this.find('.vc_single_image-img').clone();

      var $modal = $('<div />')
        .addClass('image-modal');

      var $info = (
        '<div>' + info.title + '</div>'+
        '<div>' + info.description + '</div>'+
        '<div>' + info.details + '</div>'
      );

      var $print = $('<button />')
        .html('Print')
        .on('click', function(event) {
          print();
        });

      $modal.appendTo('body');
      $modal.append($print);
      $modal.append($image);
      $modal.append($info);

      function close(event) {
        if (event.target.nodeName === 'BUTTON') return;

        $modal.remove();
        $(document).off('keyup', close);
      }

      // Close on escape
      $(document).on('keyup', function(event) {
        if (event.key === 'Escape') close(event);
      });

      // Close on modal click
      $modal.on('click', function(event) {
        close(event);
      });
    })
  })

  $('body').append(`
    <style>
      .image-modal {
        position: fixed;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.6);
          top: 0;
          left: 0;
          text-align: center;
          padding-top: 150px;
          color: white;
          /* z-index: 10000; */
      }
      
      .image-modal img {
        width: 400px;
      }

      @media print {
        .image-modal {
          background: white;
          color: black;
          z-index: 100000;
        }
      }
    </style>
  `)
});

/*
.image-modal {
  position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.6);
    top: 0;
    left: 0;
    text-align: center;
    padding-top: 150px;
    color: white;
    /* z-index: 10000; */
}

.image-modal img {
  width: 400px;
}

@media print {
  .image-modal {
    background: white;
    color: black;
    z-index: 100000;
  }
}
*/