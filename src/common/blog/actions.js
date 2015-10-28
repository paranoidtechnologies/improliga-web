export const LOAD_BLOG = 'LOAD_BLOG';
export const LOAD_BLOG_ITEM = 'LOAD_BLOG_ITEM';


export function loadBlog() {
  return ({fetch}) => ({
    type: [LOAD_BLOG],
    promise: fetch('/news').then(response => response.json())
  });
}

export function loadBlogItem(blogItemId) {
  return ({fetch}) => ({
    type: [LOAD_BLOG_ITEM],
    promise: fetch('/news/' + blogItemId).then(response => response.json())
  });
}
