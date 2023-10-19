const images = [
  {
    author: 'Yurii',
    alt: 'tree',
    src: 'https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg',
  },
  {
    author: 'Roman',
    alt: 'tree',
    src: 'https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg',
  },
  {
    author: 'Taras',
    alt: 'tree',
    src: 'https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg',
  },
  {
    author: 'Kolya',
    alt: 'tree',
    src: 'https://cdn.britannica.com/50/180050-138-521974A7/tree-limits-height-width-growth-ring-discussion.jpg?w=800&h=450&c=crop',
  },
  {
    author: 'Ivan',
    alt: 'tree',
    src: 'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/03091106/Trees-1024x682.jpg',
  },
  {
    author: 'Petro',
    alt: 'tree',
    src: 'https://cdn.britannica.com/98/214598-050-9879F2FA/giant-sequoia-tree-Sequoia-National-Park-California.jpg',
  },
];

$(document).ready(function () {
  $('#card-list').html(() =>
    images
      .map(
        (image, index) => `
        <div role='button' id="${index}" class="col">
            <div class="card h-100 user-select-none">
                <img src="${image.src}"
                    class="card-img-top h-75"
                    alt="${image.alt}">
                <div style="background-color: #acacae" class="card-body">
                    <div class="d-flex justify-content-center align-items-center card-title h5 h-100">${image.author}</div>
                </div>
            </div>
        </div>
    `
      )
      .join('')
  );

  $('.col').hover(function () {
    $('#' + $(this).attr('id'))
      .find('.card')
      .toggleClass('hover-card');
  });

  $('.card').on('click', function () {
    console.log('show');
    $('#popup').modal('show');
  });

  $('#close-button').on('click', function () {
    console.log('hide');
    $('#popup').modal('hide');
  });

  let currentImage = 1;

  $('#next-button').on('click', function () {
    console.log(currentImage);
    $('#picture')
      .attr('src', images[currentImage].src)
      .attr('alt', images[currentImage].alt);
    currentImage++;
  });

  $('#prev-button').on('click', function () {
    console.log(currentImage);
    $('#picture')
      .attr('src', images[currentImage].src)
      .attr('alt', images[currentImage].alt);
    currentImage--;
  });
});
