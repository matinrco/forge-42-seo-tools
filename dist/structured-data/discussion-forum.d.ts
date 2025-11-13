import { DiscussionForumPosting, WithContext } from 'schema-dts';
export { DiscussionForumPosting } from 'schema-dts';

/**
 *  This helper is used to generate a DiscussionForumPosting ld+json structured data object.
 * @param discussionForum  DiscussionForumPosting object
 * @see https://schema.org/DiscussionForumPosting
 * @returns Returns a DiscussionForumPosting object to be used in head via json-ld script tag
 */
declare const discussionForum: (discussionForum: DiscussionForumPosting) => WithContext<DiscussionForumPosting>;

export { discussionForum };
