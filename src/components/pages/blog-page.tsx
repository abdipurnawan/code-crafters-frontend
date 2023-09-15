import BlogListSection from '../organism/blog-list-section';
import BlogMainSection from '../organism/blog-main-section';
import { BlogModel } from '@/src/models/blog-model';
import TagModel from '@/src/models/tag-model';
import { PaginationModel } from '@/src/models/pagination-model';

interface BlogPageProps {
  lastestBlog: BlogModel;
  tags: TagModel[];
  blogs: PaginationModel<BlogModel[]>;
}

const BlogPage = ({ lastestBlog, tags, blogs }: BlogPageProps) => {
  return (
    <>
      {/* Main Blog Section */}
      <BlogMainSection lastestBlog={lastestBlog} />

      {/* Blog List Section */}
      <BlogListSection blogs={blogs} tags={tags} />
    </>
  );
};

export default BlogPage;
