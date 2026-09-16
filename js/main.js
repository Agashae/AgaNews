async function loadArticles() {
  const listEl = document.getElementById("articles-list");
  const statusEl = document.getElementById("status");

  try {
    const manifestResponse = await fetch("articles/manifest.json");
    if (!manifestResponse.ok) throw new Error("Impossible de charger la liste des articles.");
    const filenames = await manifestResponse.json();

    const articles = await Promise.all(
      filenames.map(async (filename) => {
        const response = await fetch(`articles/${filename}`);
        if (!response.ok) return null;
        const raw = await response.text();
        const { data } = parseFrontmatter(raw);
        const slug = filename.replace(/\.md$/, "");
        return { slug, ...data };
      })
    );

    const validArticles = articles
      .filter(Boolean)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    if (validArticles.length === 0) {
      statusEl.textContent = "Aucun article pour le moment.";
      return;
    }

    statusEl.remove();
    listEl.innerHTML = validArticles.map(articleCardHtml).join("");
  } catch (error) {
    statusEl.textContent = "Erreur lors du chargement des articles : " + error.message;
    console.error(error);
  }
}

function articleCardHtml(article) {
  return `
    <a class="card" href="article.html?slug=${encodeURIComponent(article.slug)}">
      <article>
        <p class="card-date">${escapeHtml(formatDate(article.date))}</p>
        <h2 class="card-title">${escapeHtml(article.title || "Sans titre")}</h2>
        <p class="card-excerpt">${escapeHtml(article.excerpt || "")}</p>
        <p class="card-author">Par ${escapeHtml(article.author || "Anonyme")}</p>
      </article>
    </a>
  `;
}

loadArticles();
