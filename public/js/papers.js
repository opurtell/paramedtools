// Paramedic Papers preview: fetch the daily podcast feed and show the
// latest episode — its title is the day's top paper, and its description
// lists the papers in that episode. The feed allows cross-origin reads
// (Access-Control-Allow-Origin: *), checked 21/11/2026.
// If the fetch fails, the static fallback in index.html (dated 21 Nov 2026)
// stays in place, so the page never shows an empty box.
(function () {
  var preview = document.getElementById("papers-preview");
  if (!preview) return;

  fetch("https://paramedicpapers.com/feed.xml")
    .then(function (res) { if (!res.ok) throw new Error(res.status); return res.text(); })
    .then(function (text) {
      var xml = new DOMParser().parseFromString(text, "text/xml");
      var item = xml.querySelector("item");
      if (!item) return;
      var title = item.querySelector("title");
      var link = item.querySelector("link");
      var desc = item.querySelector("description");
      var pubDate = item.querySelector("pubDate");
      if (!title || !link || !desc) return;

      var dateEl = document.getElementById("papers-date");
      var titleEl = document.getElementById("papers-title");
      var descEl = document.getElementById("papers-desc");
      var episodeEl = document.getElementById("papers-episode");

      // Title is "Top paper · 21 Nov" — keep just the paper title.
      var paperTitle = title.textContent.split(" · ")[0];
      titleEl.textContent = paperTitle;
      titleEl.href = link.textContent;
      descEl.textContent = desc.textContent;
      episodeEl.href = link.textContent;

      if (pubDate && dateEl) {
        var d = new Date(pubDate.textContent);
        if (!isNaN(d)) {
          dateEl.textContent = "Today — " + d.toLocaleDateString("en-AU", {
            day: "numeric", month: "long", year: "numeric"
          });
        }
      }
    })
    .catch(function () { /* leave the static fallback in place */ });
})();
