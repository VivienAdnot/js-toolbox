const { Resolver } = require("dafit");
const dateFns = require("date-fns");
const Promise = require("bluebird");

const resolveMedia = new Resolver({
  source: "instagram",
  created_at: ({ taken_at_timestamp }) => {
    const date = new Date(taken_at_timestamp);
    return dateFns.isValid(date) ? date : null;
  },
  uri: ({ uri }) => uri,
  href: ({ uri }) => uri,
  content: ({ captions }) => (captions ? removeInvalidUnicode(captions) : null),
  local_engagement: ({ comments_count, likes_count }) =>
    comments_count + likes_count || 0,
  context: ({ type }) => type,
  language: ({ captions }) => (captions ? detectLanguage(captions) : null),

  // relations
  mentions: ({ captions }) =>
    captions
      ? parseMentions(captions).map(username => resolveUser({ username }))
      : [],
  tagged_users: ({ tagged_users }) =>
    Array.isArray(tagged_users) ? tagged_users.map(resolveUser) : [],
  owner: ({ owner }) => (owner && owner.username ? resolveUser(owner) : null),
  likes: ({ likes }) => (Array.isArray(likes) ? likes.map(resolveUser) : []),
  comments: ({ comments }) => (Array.isArray(comments) ? comments : []),

  // extra fields need for sub normalization
  shortcode: ({ shortcode }) => shortcode, // need for comments normalization
  author: ({ author }) => author
});

const extractEntities = async medias => {
  const result = [];
  for (let media of medias) {
    result.push(media.uri);
  }
  return result;
};

it("should fail", async () => {
  const medias = [];
  const resolvedMedias = await Promise.all(medias.map(resolveMedia));
  expect(resolvedMedias).toEqual([]);

  const result = await extractEntities(resolvedMedias);
  expect(result).toEqual([]);
});
