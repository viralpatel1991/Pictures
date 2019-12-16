const mapCharacters = (results, limit = 100) => {
  const repos = results.slice(0, limit).map(repo => mapCharacter(repo));

  return {
    total_count: limit,
    items: repos
  };
};

const mapCharacter = repo => {
  const {
    id,
    name,
    thumbnail,
    description, 
  } = repo;

  return {
    id,
    name,
    description,
    thumbnail: {
      path: thumbnail.path,
      extension: thumbnail.extension
    }
  };
};

module.exports = {
  mapCharacters,
  mapCharacter
};
