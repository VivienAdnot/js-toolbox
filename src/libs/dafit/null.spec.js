const { Resolver } = require("dafit");
const dateFns = require("date-fns");

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

describe("should fail", () => {
  it("resolves empty object returns null entity", () => {
    return resolveMedia({}).then(formattedResult => {
      return expect(formattedResult).toEqual({
        author: undefined,
        comments: [],
        content: null,
        context: undefined,
        created_at: null,
        href: undefined,
        language: null,
        likes: [],
        local_engagement: 0,
        mentions: [],
        owner: null,
        shortcode: undefined,
        source: "instagram",
        tagged_users: [],
        uri: undefined
      });
    });
  });

  it("resolves undefined throws", () => {
    try {
      resolveMedia(undefined);
    } catch (err) {
      expect(err).toBeDefined();
    }
  });
});
