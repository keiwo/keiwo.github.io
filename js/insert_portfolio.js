// Dynamically insert portfolio items for a numeric range.
// Behaviour:
// - Scans existing `.portfolio-items a[href]` for already-present numbers.
// - Inserts only missing numbers in the requested range.
// - Default example inserts 35..61 in reverse order (61→35).

(function(){
  'use strict';

  function getExistingNumbers(container) {
    var set = new Set();
    var anchors = container.querySelectorAll('a[href]');
    anchors.forEach(function(a){
      var href = a.getAttribute('href') || '';
      var m = href.match(/portfolio\/(\d+)-large/);
      if(m) set.add(parseInt(m[1], 10));
    });
    return set;
  }

  function buildItemHtml(n) {
    return '\n<div class="col-sm-6 col-md-4 adipiscing">\n  <div class="portfolio-item">\n    <div class="hover-bg"> <a href="img/portfolio/' + n + '-large.jpg" >\n      <div class="hover-text">\n\n      </div>\n      <img src="img/1.gif" data-src="img/portfolio/' + n + '-small.jpg" class="img-responsive" alt="Project Title"> </a> </div>\n  </div>\n</div>\n';
  }

  function insertRange(container, start, end, reverse) {
    var existing = getExistingNumbers(container);
    var nums = [];
    for(var i = start; i <= end; i++) nums.push(i);
    if(reverse) nums = nums.reverse();
    var toInsert = nums.filter(function(n){ return !existing.has(n); });
    if(toInsert.length === 0) return;
    var html = toInsert.map(buildItemHtml).join('');
    // insert at the beginning to match user's request
    container.insertAdjacentHTML('afterbegin', html);
  }

  document.addEventListener('DOMContentLoaded', function(){
    var container = document.querySelector('.portfolio-items');
    if(!container) return;
    // Example usage: insert numbers 35..61 in reverse order (61→35)
    insertRange(container, 35, 61, true);
  });

})();
