const button = document.getElementById('to-delivery-btn');

button.addEventListener('click', (e) => {

  const blockId = e.target.attributes.href.value

  if (blockId[0] == '#') {
    const block = document.getElementById(blockId.slice(1, blockId.length));

    block.scrollIntoView({
      behavior: 'smooth',
    });
  }
});