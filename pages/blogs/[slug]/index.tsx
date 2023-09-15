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
  // blog thumbnail
  const thumbnail = `${App.API_BASE_URL}storage/${props.blog?.thumbnail?.id}/${props.blog?.thumbnail?.file_name}`;

  return (
    <MainTemplate title={props.blog.title} description={props.blog.description} image={thumbnail}>
      <BlogDetailPage blog={props.blog} />
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
