import React from 'react';
import FooterSection from '../organism/footer-section';
import NavbarSection from '../organism/navbar-section';
import Head from 'next/head';
import { useRecoilValue } from 'recoil';
import SettingModel from '@/src/models/setting-model';
import { settingsDataState } from '@/src/recoils/setting-atom';

interface MainTemplateProps {
  title?: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
}

const MainTemplate = ({ title, description, image, children }: MainTemplateProps) => {
  const settings = useRecoilValue<SettingModel>(settingsDataState);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <>
      <Head>
        <title>{title ?? `${settings.site_name ?? 'CodeCrafters'} - Crafting Innovation Through Code`}</title>
        <meta name='description' content={description ?? settings.site_description} />

        <meta property='og:title' content={title ?? settings.site_name} />
        <meta property='og:description' content={description ?? settings.site_description} />
        <meta property='og:image' content={image ?? `${baseUrl}favicon.ico`} />
      </Head>

      <NavbarSection />
      {children}
      <FooterSection />
    </>
  );
};

export default MainTemplate;
