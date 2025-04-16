export function updateSelOpts(ctx) {
  const { sel, productList } = ctx;

  sel.innerHTML = '';
  productList.forEach(function (item) {
    let opt = document.createElement('option');
    opt.value = item.id;
    opt.textContent = item.name + ' - ' + item.val + '원';
    if (item.q === 0) opt.disabled = true;
    sel.appendChild(opt);
  });
}
