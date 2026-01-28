'use strict';

const table = document.querySelector('table');

// for thead
const trHead = table.querySelector('thead tr');
const thsHead = trHead.querySelectorAll('th');
const newThHead = document.createElement('th');

newThHead.textContent = thsHead[1].textContent;

if (thsHead.length >= 2) {
  trHead.insertBefore(newThHead, thsHead[thsHead.length - 1]);
}

// for tfoot
const trFoot = table.querySelector('tfoot tr');
const thsFoot = trFoot.querySelectorAll('th');
const newThFoot = document.createElement('th');

newThFoot.textContent = thsFoot[1].textContent;

if (trFoot.length >= 2) {
  trFoot.insertBefore(newThFoot, thsFoot[thsFoot.length - 1]);
}

// for tbody
const trs = table.querySelectorAll('tbody tr');

trs.forEach((tr) => {
  const tds = tr.querySelectorAll('td');
  const newTd = document.createElement('td');

  if (tds[1]) {
    newTd.textContent = tds[1].textContent;
  }

  if (tds.length >= 2) {
    tr.insertBefore(newTd, tds[tds.length - 1]);
  }
});
