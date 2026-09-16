async function loadArticle() {
  const contentEl = document.getElementById("article-content");
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  if (!slug) {
    contentEl.innerHTML = "<p>Aucun article demandé.</p>";
    return;
  }

  try {
    const response = await fetch(`articles/${slug}.md`);
    if (!response.ok) throw new Error("Article introuvable.");
    const raw = await response.text();
    const { data, content } = parseFrontmatter(raw);

    document.title = `${data.title || "Article"} — AgaNews`;

    contentEl.innerHTML = `
      <p class="article-date">${escapeHtml(formatDate(data.date))}</p>
      <h1 class="article-title">${escapeHtml(data.title || "Sans titre")}</h1>
      <p class="article-author">Par ${escapeHtml(data.author || "Anonyme")}</p>
      <div class="article-body">${marked.parse(content)}</div>
    `;
  } catch (error) {
    contentEl.innerHTML = `<p>Erreur : impossible de charger cet article (${escapeHtml(error.message)}).</p>`;
    console.error(error);
  }
}

loadArticle();
