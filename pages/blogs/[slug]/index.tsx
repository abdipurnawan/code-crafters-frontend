/* eslint-disable react-hooks/exhaustive-deps */
import BlogDetailPage from '@/src/components/pages/blog-detail-page';
import MainTemplate from '@/src/components/templates/main-template';
import App from '@/src/configs/app';
import { BlogModel } from '@/src/models/blog-model';
import { blogDataState } from '@/src/recoils/blog-atom';
import BlogRepository from '@/src/repositories/blog-repository';
import { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

interface BlogDetailProps {
  blog: BlogModel;
}

export default function BlogDetail(props: BlogDetailProps) {
  const [blog, setBlog] = useRecoilState<BlogModel>(blogDataState);

  useEffect(() => {
    // set blog data to state
    if (props.blog) {
      setBlog(props.blog);
    }
  }, [props.blog]);

  // blog thumbnail
  const thumbnail = `${App.API_BASE_URL}storage/${blog?.thumbnail?.id}/${blog?.thumbnail?.file_name}`;

  return (
    <MainTemplate title={blog.title} description={blog.description} image={thumbnail}>
      <BlogDetailPage />
    </MainTemplate>
  );
}

export const getServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { slug } = query;

  // get blog
  const blogRepository = new BlogRepository();
  const blogData = await blogRepository.getBlogBySlug(slug as string);

  if (!blogData.data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      blog: blogData.data
    }
  };
};
