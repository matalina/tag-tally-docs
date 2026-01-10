export const _notesCollection = () => (collectionApi) => {
  const mdFiles = collectionApi.getFilteredByGlob("../**/*.md");
  const njkFiles = collectionApi.getFilteredByGlob("../**/*.njk").filter(
    (file) => !file.inputPath.includes("/.app/")
  );
  return [...mdFiles, ...njkFiles].sort((a, b) => {
    const nameA = a.data.title || a.fileSlug;
    const nameB = b.data.title || b.fileSlug;
    return nameA.localeCompare(nameB);
  });
};
